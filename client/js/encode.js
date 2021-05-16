function encode(plaintext, smufl_dict){
  //replaces all parenthesized smufl_names in 'plaintext' with matching smufl_points using 'smufl_dict'
  
  const parenthesized = /\(\w*\)/gm; //regex to match parenthesized substrings
  const get_smufl = (smufl_name) => { // looks up smufl_name in smufl_dict, returns smufl_point
    smufl_name = smufl_name.slice(1,smufl_name.length-1); //cleans parentheses from input
    if(smufl_dict[smufl_name] == null){ 
      throw new ReferenceError(`'(${smufl_name})' is not in smufl_dict`)
    }
    const smufl_point = smufl_dict[smufl_name].codepoint; 
    return smufl_point;
    
  };
  const encoded = plaintext.replace(parenthesized,get_smufl); //replaces parenthesized substrings using get_smufl
  return encoded; 
}