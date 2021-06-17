
class Measure { 
    /* Represents a measure. Has a position and a size and is parent to a clef, timesignature, and note. */

    constructor( _pixelSize, _pixelPos, _children = null) { //constructs a measure based on clef, pixel size, and pixel position input, all other sub elements of the measure are attached as children

        //// TODO: Replace with asserts
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

    show(smufl_dict, bravura) {
        //set up font, font size, and font color
        textFont(bravura);
        textSize(this.pixelSize);
        fill(0,0,0);

        //get smufl_points for staff lines, barlines, clef, and timesignature
        const smufl_text = encode(`(staff5LinesWide)(barlineSingle)(staff5LinesNarrow)${this.children.clef.smufl_point(smufl_dict)}${this.children.timesignature.smufl_point(smufl_dict)}(staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)      (staff5LinesWide)     (barlineHeavy)`, smufl_dict)
        
        // draw measure using smufl_text
        text(smufl_text, this.pixelPos.x, this.pixelPos.y);
        this.children.note.show(smufl_dict, bravura);
    }

    randomizeNote(min_pos, max_pos){
        let clef_offset = 15;
        if (this.children.clef.name == "gClef") { clef_offset = 27 };
        const min_note = (min_pos + clef_offset) * 5;
        const max_note = (max_pos + clef_offset) * 5;
        this.children.note = Note.getNote(randint(min_note,max_note),this);
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