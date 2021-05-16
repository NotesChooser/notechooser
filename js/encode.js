function encode(plaintext, dictionary){
  //parses strings with parenthesised SMuFL glyph names
  const parenthesized = /\(\w*\)/gm;
  const dictReplace = (glyph) => {// if the glyph is found in the dictionary, returns the codepoint
    const glyph_noparens = glyph.slice(1,glyph.length-1);
    if(dictionary[glyph_noparens] == null){
      return "";
    } else { 
      return dictionary[glyph_noparens].codepoint;
    }
  };
  const encoded = plaintext.replace(parenthesized,dictReplace); //loops through plaintext, finds parenthesised sections, and uses the dictionary to replace them with the proper codepoint.
  return encoded; 
}