
class Measure { 
    // Represents a measure. Has a position and a size, and can have children note, timesignature, and clef. 
    constructor( _pixelSize, _pixelPos, _children = null) { //constructs a measure based on clef, pixel size, and pixel position input, all other sub elements of the measure are attached as children

        if(!(typeof(_pixelSize) == "number")) { //typecheck for size input
            throw new TypeError(`Unexpected value for pixel size: ${_pixelSize} is ${typeof(_pixelSize)}, expected number`);
        }
        this.pixelSize = _pixelSize;

        if(!(_pixelPos instanceof p5.Vector)) { //typecheck for position input
            throw new TypeError (`Unexpected value for pixel position: ${_pixelPos} is not a p5.vector, expected p5.Vector`);
        }
        this.pixelPos = _pixelPos;

        // add children
        this.children = {}
        for(_child in _children) {
            this.addChild(_child);
        }  
    }
    show(SMuFLdictionary, musFont) { //draws the measure to the screen based on the arguments
        textFont(musFont);
        textSize(this.pixelSize);
        fill(0,0,0);
        const encodedText = encode(`(staff5LinesWide)(barlineSingle)(staff5LinesNarrow)${this.children.clef.smufl_point(SMuFLdictionary)}${this.children.timesignature.smufl_point(SMuFLdictionary)}(staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)     (barlineHeavy)`, SMuFLdictionary)
        text(encodedText, this.pixelPos.x, this.pixelPos.y);
        this.children.note.show(SMuFLdictionary, musFont);
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
            this.children.note = _child;

        } else if (_child instanceof Timesignature) {
            this.children.timesignature = _child;

        } else if (_child instanceof Clef) {
            this.children.clef = _child;

        } else {
            throw new TypeError (`Unexpected child: ${_child} cannot be childed to Measure: it is not a Note, Timesignature, or Clef`);
        }
            
    }
}   