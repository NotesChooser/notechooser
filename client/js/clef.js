class Clef {
    //Represents a Clef. Is a child of Measure. 
    constructor(_name, _parent = null) {
        // typecheck _name
        console.assert(typeof _name == "string", `Unexpected clef name: '${_name}' is of type '${typeof _name}', expected 'string'.`);
        
        this.name = _name;
        this.addParent(_parent);
    }

    smufl_point(smufl_dict) { //gets smufl_point by passing a formatted smufl_name to encode()
        this.smufl_name = `(${this.name})`;
        return encode(this.smufl_name, smufl_dict);
    }

    addParent(parent) {
        //parent this to a measure 
        if (parent) { // nullcheck
            // check if parent is a Measure
            console.assert(parent instanceof Measure, { parent, msg: `Parent must be a Measure.`,}); // typecheck
            this.parent = parent;
            this.parent.addChild(this);
            return true; // return true if a parent was added
        } else {
            return false; // return false if a parent wasn't added
        }
    }

}