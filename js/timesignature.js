class Timesignature {
    //creates Timesignature objects with numerator and denominator and SMuFL codepoint attributes - will be child of Measure
    constructor(_num, _den, _parent) { //constructor inputs are numerator, denominator, and parent (Measure)
        this.num = _num;
        this.den = _den; 

        //typecheck for numerator and denominator
        if (!((typeof this.num == "number" && typeof this.den == "number") && (Number.isInteger(this.den) && Number.isInteger(this.num)))) {
            throw new TypeError(`Unexpected value(s) for Timesignature initialization: ${this.den} and/or ${this.num} are not integers!`);
        }

        if (!(this.den && (this.den & (this.den - 1)) === 0)) { 
            throw `Unexpected value for denominator of Timesignature: ${this.den} is not a power of two.`;
        }
        if(!(_parent instanceof Measure)) {
            throw new TypeError (`Unexpected parent: ${_parent} is not a Measure object.`)
        }
        this.parent = _parent;
        this.parent.addChild(this);  
    }
    unicodepoint(dictionary) { //returns SMuFL unicode codepoint for given timesignature
        const index = `timeSig${this.num}over${this.den}`;
        if (dictionary[index] == null) {
            throw 'this is a temporary error based on SMuFL limitations';
        } else { 
            return dictionary[index].codepoint;
        }
            
    }

}