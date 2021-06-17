class Timesignature {
    //Represents a Time Signature. Has a numerator, a denominator, and works with smufl. Can be childed to a Measure. 
    constructor(_num, _den, _parent = null) {
        //typechecking and validitychecking of inputs
        if (typeof _num != "number") {
            throw new TypeError(`Unexpected numerator: '${_num}' is of type '${typeof _num}', expected 'number'.`);
        }
        this.num = Math.abs(Math.floor(_num));

        if (typeof _den != "number") {
            throw new TypeError(`Unexpected denominator: '${_den}' is of type '${typeof _den}', expected 'number'.`);
        }
        if (!(_den && (_den & (_den - 1)) === 0)) {
            throw `Unexpected denominator: ${_den} is not a power of two.`;
        }
        this.den = Math.abs(_den);
        this.addParent(_parent);

    }

    smufl_point(smufl_dict) { //gets smufl_point by passing a formatted smufl_name to encode()
        this.smufl_name = `(timeSig${this.num}over${this.den})`;
        return encode(this.smufl_name, smufl_dict);

    }

    addParent(parent) {
        if (parent) { // checks if parent is null
            if (!(parent instanceof Measure)) { //checks parent validity
                throw new TypeError(`Unexpected parent: ${parent} is not a Measure object.`)
            }
            this.parent = parent;
            this.parent.addChild(this);
            return true;
        } else {
            return false;
        }
    }

}