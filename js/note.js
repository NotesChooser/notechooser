class Note { //note object (child of Measure object)
    constructor(_name, _accidental, _octave, _parent) { //constructs note based on nate, accidental, octave, and parent parameters
        //checks note name validity
        let validNames = ["C","D","E","F","G","A","B"]; 
        if(!(typeof(_name) == "string")) { 
            throw new TypeError(`Unexpected value for noteName: ${_name} is of type ${typeof(_name)}, expected string.`);
    
        }
        if (!(validNames.includes(_name))) {
            throw `Unexpected note name: ${_name} is not a valid note name!(This could be a capitalization issue!)` ;
        }
        this.name = _name;

        //checks accidental validity
        const validAccidentals = ["","b","#", "##", "bb"];
        if(!(typeof(_accidental) == "string")) {
            throw new TypeError (`Unexpected value for accidental: ${_accidental} is type ${typeof(_accidental)}, expected string`);
        }
        if (!(validAccidentals.includes(_accidental))){
            throw `Unexpected accidental: ${_accidental} is not a valid accidental!` ;
        }
        this.accidental = _accidental;
        
        //checks octave validity
        const validOctaves = [-2, -1, 0, 1, 2]
        if(!(typeof(_octave) == "number")) {
            throw new TypeError (`Unexpected value for octave: ${_octave} is type ${typeof(_octave)}, expected number.`);
            }
        if (!(validOctaves.includes(_octave))) {
            throw `Unexpected octaveL ${_octave} is not a valid octave!` ;
        }
        
        this.octave = _octave;
        //checks parent validity
        if(!(_parent instanceof Measure)) {
            throw new TypeError (`Unexpected parent: ${_parent} is not a Measure object.`)
        }
        this.parent = _parent;
        this.parent.addChild(this);          
        
        //gets an offset in pixels which will correctly place a note within a measure
        const trebleShift = 1;
        const bassShift = -1;   
        //shifting the validNames list to allign note names with displayed clef
        if(this.parent.clef == "gClef") { 
                cycle(validNames,trebleShift);
            
        } else  {
                cycle(validNames,bassShift);
            
        }
        this.number = validNames.findIndex((e) => e == this.name);
        this.pixelOffset= (this.parent.pixelSize * -0.10 * (this.number + (this.octave * 7)));
        
        //find the index of this in possibleNotes
        const foundNote = (noteItem) => ((this.name == noteItem.note_name) && (this.accidental == noteItem.accidental) &&(this.octave == noteItem.octave));
        this.index = getPossibleNotes(this.parent.clef).findIndex(foundNote)
        console.log(this.index); //149 is the highest for bass clef 35 is the lowest //74 is the highest for treble, 56 lowest for treble
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)

    }

    show(SMuFLdictionary, musFont) { //draws note
        textFont(musFont)
        textSize(this.parent.pixelSize);
        let legStandin = ""
        const acciDict = { //dictionary of accents
            "##": "(accidentalDoubleSharp)",
            "#": "(accidentalSharp)",
            "": "",
            "b": "(accidentalFlat)",
            "bb": "(accidentalDoubleFlat)",

        }
        if(this.parent.clef == "gClef") { //checks if leger line is needed for treble clef
            if(this.index >= 45 && this.index <= 99) {
                legStandin = ""
            } else {
                legStandin = "(legerLine)"
            }
        } else if(this.parent.clef == "fClef") {//checks if leger line is needed for bass clef
            if(this.index >= 45 && this.index <= 99) {
                legStandin = ""
            } else {
                legStandin = "(legerLine)"
            }
        } else {
            throw 'error: clef is not fclef or gclef'
        }
        fill(this.r,this.g,this.b);
        const encodedText = encode(`            ${acciDict[this.accidental]}${legStandin}(noteQuarterUp)`, SMuFLdictionary)
        text(encodedText,this.parent.pixelPos.x, this.parent.pixelPos.y + this.pixelOffset)
    }

    

}