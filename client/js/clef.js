class Clef {
    //Represents a musical Clef and works with smufl. Can be childed to a Measure. 
    constructor(_name, _parent = null) { 
        //typechecking of inputs
        if (typeof _name != "string") {
            throw new TypeError(`Unexpected clef name: '${_name}' is of type '${typeof _num}', expected 'string'.`);
        }
        this.name = _name;

        this.addParent(_parent);     
    }

    smufl_point(smufl_dict) { //gets smufl_point by passing a formatted smufl_name to encode()
        this.smufl_name = `(${this.name})`;
        return encode(this.smufl_name,smufl_dict);
    }
    
    addParent(parent){ 
        if(parent){ // checks if parent is null
            if(!(parent instanceof Measure)) { //checks parent validity
                throw new TypeError (`Unexpected parent: ${parent} is not a Measure object.`)
            }
            this.parent = parent;
            this.parent.addChild(this);
            return true;
        } else {
            return false;
        }
    }

}