function randint(min, max) {  //gets a random integer from a min and max
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function expect(val, valid_vals = null, valid_type = null, valid_class = null) {
    if (valid_class) {
        if (val instanceof valid_class) {
        } else {
            return { passed: false, msg: `Invalid: '${val}' is an instance of '${val.constructor.name}', expected '${valid_class.name}'` };
        }
    }
    if (valid_type) {
        if (typeof (val) === valid_type) {
        } else {
            return { passed: false, msg: `TypeError: '${val}' is of type '${typeof (val)}', expected '${valid_type}'.` };
        }
    }
    if (valid_vals) {
        if (valid_vals.includes(val)) {
        } else {
            return { passed: false, msg: `Invalid: '${val}' is not included in '${valid_vals}'.` };
        }
    }

    return { passed: true, msg: null };

}

