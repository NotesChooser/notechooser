function cycle(array_input, shift) {
    //shifts the elements of the array back or forward, wrapping the last and first elements appropriately 

    if (shift > 0) {
       for(i=0; i < shift; i++) {
           const lastEl = array_input[array_input.length-1];
           array_input.pop();
           array_input.unshift(lastEl); 
       }
    } else {
        for(i=0; i < Math.abs(shift); i++) {
            const firstEl= array_input[0];
            array_input.shift();
            array_input.push(firstEl);
        }
    }
}