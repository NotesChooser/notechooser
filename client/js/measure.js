class Measure { //class for Measure object
    constructor(_clef, _pixelSize, _pixelPos) { //constructs a measure based on clef, pixel size, and pixel position input, all other sub elements of the measure are attached as children

        if(!(_clef == "gClef" || _clef == "fClef")) {  //validity check for clef input
            throw `Unexpected clef: ${_clef} is not a supported clef`;
        }
        this.clef = _clef;

        if(!(typeof(_pixelSize) == "number")) { //typecheck for size input
            throw new TypeError(`Unexpected value for pixel size: ${_pixelSize} is ${typeof(_pixelSize)}, expected number`);
        }
        this.pixelSize = _pixelSize;

        if(!(_pixelPos instanceof p5.Vector)) { //typecheck for position input
            throw new TypeError (`Unexpected value for pixel position: ${_pixelPos} is not a p5.vector, expected p5.Vector`);
        }
        this.pixelPos = _pixelPos;    
    }
    show(SMuFLdictionary, musFont) { //draws the measure to the screen based on the arguments
        textFont(musFont);
        textSize(this.pixelSize);
        fill(0,0,0);
        const encodedText = encode(`(staff5LinesWide)(barlineSingle)(staff5LinesNarrow)(${this.clef})${this.timeSignature.smufl_point(SMuFLdictionary)}(staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)     (barlineHeavy)`, SMuFLdictionary)
        text(encodedText, this.pixelPos.x, this.pixelPos.y);
        this.note.show(SMuFLdictionary, musFont);
    }

    randomizeNote(min_pos,max_pos){
        let clef_offset = 15;
        if (this.clef == "gClef") { clef_offset = 27 };
        const min_note = (min_pos + clef_offset) * 5;
        const max_note = (max_pos + clef_offset) * 5;
        this.note = Note.getNote(randint(min_note,max_note),this);
    }

    addChild(_child) { //attaches a child
        if(_child instanceof Note) {
            this.note = _child

        } else if(_child instanceof Timesignature){
            this.timeSignature = _child
        } else {
            throw new TypeError (`Unexpected child: ${_child} is not a Note or Timesignature object.`)
        }
            
    }
}   