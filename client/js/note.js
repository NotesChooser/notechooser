class Note { 
    /* Represents a note. Has a name(A-G), Has an octave(+-3,centered on middle C), 
    and can have an accidental(double flat-double sharp). Is a child of a Measure. */

    static valid_names = ["C", "D", "E", "F", "G", "A", "B"];
    static valid_accidentals = ["bb", "b", "", "#", "##"];
    static accidental_names = { 
        "##": "(accidentalDoubleSharp)",
        "#": "(accidentalSharp)",
        "": "",
        "b": "(accidentalFlat)",
        "bb": "(accidentalDoubleFlat)",
    }
    static valid_octaves = [-3, -2, -1, 0, 1, 2, 3];

    static getNote(number, parent = null){
        //do fun math to get the indecies for the accidental, name, and octave based on the number input
        const accidental_index = number % this.valid_accidentals.length;
        const accidental = this.valid_accidentals[accidental_index];
        const name_index = Math.floor((number/this.valid_accidentals.length) % (this.valid_names.length));
        const name = this.valid_names[name_index];
        const octave_index = Math.floor((number/(this.valid_accidentals.length*this.valid_names.length)) % (this.valid_octaves.length));
        const octave = this.valid_octaves[octave_index];
        //return a note which has the attributes described at those list indecies

        return new Note(name, accidental, octave, parent);


    }

    constructor(_name, _accidental, _octave, _parent = null) {

        //typecheck & validitycheck parameters
        let expectation;

        _name = _name.toUpperCase();
        expectation = expect(_name, Note.valid_names, 'string'); console.assert(expectation.passed,expectation.msg); //expect _name to be in Note.valid_names and of type string, throw appropriate error if it's not
        this.name = _name;
        
        expectation = expect(_accidental, Note.valid_accidentals, "string"); console.assert(expectation.passed,expectation.msg);
        this.accidental = _accidental;

        expectation = expect(_octave, Note.valid_octaves, "number"); console.assert(expectation.passed,expectation.msg);
        this.octave = _octave;

        colorMode(HSB);
        this.color = color(random(0, 255),random(100, 255), 100);
        colorMode(RGB);
        //set up number, parent, and position
        this.has_parent = false;
        this.getNumber();
        if(this.addParent(_parent)){
            this.getPos(); // position is based on position of parent
        }
    }

    addParent(parent){
        //parent this to a measure 
        if(parent){ // nullcheck
            console.assert(parent instanceof Measure, {parent, msg:`Parent must be a Measure.`}); // typecheck
            this.parent = parent;
            this.parent.addChild(this);
            this.getPos(); // update position for current parent
            this.has_parent = true;
            return true; // return true if a parent was added
        } else {
            return false; // return false if a parent wasn't added
        }
    }

    getNumber(){
        //find indices of name, accidental, octave in their corresponding lists
        const findName = (el) => this.name == el;
        const name_index = Note.valid_names.findIndex(findName);
        const findAccidental = (el) => this.accidental == el;
        const accidental_index = Note.valid_accidentals.findIndex(findAccidental);
        const findOctave = (el) => this.octave == el;
        const octave_index = Note.valid_octaves.findIndex(findOctave);

        //do some fun math on the indecies to get the number based on those indecies
        this.number = accidental_index + (name_index * Note.valid_accidentals.length) + (octave_index * Note.valid_names.length * Note.valid_accidentals.length);
        return this.number;
    }

    getPos(){ 
        //find the offset, in number of positions, based on clef
        this.clef_offset = 15;
        if (this.parent.children.clef.name == "gClef") { this.clef_offset = 27 };

        //find on clef position based on number and clef offset
        this.pos_number = Math.floor(this.number/Note.valid_accidentals.length); // remove accidental's effect on number; i.e. 'A' and 'Ab' have different numbers, same pos
        this.clef_position = this.pos_number - this.clef_offset;

        //find pixel position based on the size of one staff-space
        this.pixel_offset = ((this.parent.pixelSize * -0.10) * this.clef_position);
        this.pos = {x: this.parent.pixelPos.x, y: (this.parent.pixelPos.y + this.pixel_offset)};
        return this.pos;

    }

    show(smufl_dict, bravura) { 
        // draws the note

        console.assert(this.parent, {note: this, msg:"Note unable to show: note has no parent Measure."}); // note can only show when childed to measure
        // check if leger line is necessary
        //// TODO: ADD MULTIPLE LEGER LINES!
        let leger = ""
        if (Math.abs(this.clef_position) >= 6) { leger = "(legerLine)"}

        //get smufl_points for note and accidental
        const smufl_text = encode(`            ${Note.accidental_names[this.accidental]}${leger}(noteQuarterUp)`, smufl_dict);

        //set up font, font size, and font color
        textFont(bravura);
        textSize(this.parent.pixelSize);
        fill(this.color);

        // draws note and accidental using smufl_text
        text(smufl_text,this.pos.x,this.pos.y)

    }

}
