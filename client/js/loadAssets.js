/* This program uses Bravura to draw musical notation to the screen. Bravura is a font which contains, rather than
    letter glyphs, musical notation symbols. These musical notation symbols can then easily be used in any 
    environment which can render text with a given font; because p5 is one of these, using bravura is a simple way
    to render musical notation for our application. 

    From the SMuFL Docs: "The reference font for SMuFL is Bravura, which can be downloaded from GitHub. Bravura is
    provided in OpenType, WOFF, WOFF2 and SVG formats, and is released under the SIL Open Font License."
*/
/* SMuFL is a standardized encoding of musical notation in the private use area of unicode(U+E000–U+F8FF), and
    a standard for this encoding's usage in the creation of musical notation fonts. SMuFL provides a 
    document(glyphnames.json) which contains the human-readable names for each musical notation symbol, and their 
    corresponding unicode encoding. This program will use the term 'smufl_name' to refer SMuFl's human-readable
    names for each musical notation glyph, and will use the term 'smufl_point' to refer to the unicode code point 
    in the private use area defined by SMuFL(and used by SMuFL-compatible fonts) for each musical notation glyph.
    For more information, see https://www.smufl.org/ and https://w3c.github.io/smufl/latest/index.html.
*/

let bravura;
let smufl_dict; 

function preload() { //p5 runs this before loading, awaits all asynchronous returns implicitly
    console.log("loading assets...")
    console.log("loaing /assets/BravuraText.otf...");
    bravura = loadFont("/assets/BravuraText.otf");
    console.log("loading /assets/glyphnames.json...");
    smufl_dict = loadJSON("/assets/glyphnames.json");
    console.log("loading complete!")
} 