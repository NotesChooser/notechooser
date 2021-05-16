# Note Chooser +++!
Note Chooser Maximus PRO+++ is an in-development multi-purpose app for Music Education. 

## Installation Guide
1. In order to install this app, you need to first have Node.js installed. If you don't know whether you have Node.js installed, or if you don't have Node.js installed, you can read a tutorial **!!TODO NODE TUTORIAL LINK!!** on how to set up Node.js properly. 

0. Download a release build(zipped folder) at **!!TODO BUILD LINK!!**, and open a terminal and run `npm install` to install the prerequisite node packages which this app requires.

## Usage

In order to run this app: 
1. Open a terminal and run `node server.js` to start the server.
0. Open a browser and go to http://localhost:3000 to open the app.

## Current Version Features

 - Drawing measures with notes in them to the canvas
 - Treble Clef and Bass Clef buttons to switch the clef
 - C,D,E,F,G,A, and B buttons to guess note and output if user input was correct or not

## Built Using

### SMuFL
[SMuFL](https://www.smufl.org/) is a standardized encoding of musical notation in the private use area of unicode(U+E000–U+F8FF), and a standard for this encoding's usage in the creation of musical notation fonts. SMuFL provides a document(glyphnames.json) which contains the human-readable names for each musical notation symbol, and their  corresponding unicode encoding. This program will use the term 'smufl_name' to refer SMuFl's human-readable names for each musical notation glyph, and will use the term 'smufl_point' to refer to the unicode code point in the private use area defined by SMuFL(and used by SMuFL-compatible fonts) for each musical notation glyph. For more information, see the [SMuFL Docs](https://w3c.github.io/smufl/latest/index.html).

### Bravura
This program uses [Bravura](https://www.smufl.org/fonts/#Bravura) to draw musical notation to the screen. Bravura is a font which contains, rather than letter glyphs, musical notation symbols. These musical notation symbols can then easily be used in any environment which can render text with a given font; because p5 is one of these, using bravura is a simple way to render musical notation for our application.


From the SMuFL Docs: "The reference font for SMuFL is Bravura, which can be downloaded from GitHub. Bravura is provided in OpenType, WOFF, WOFF2 and SVG formats, and is released under the SIL Open Font License."

### p5.js

This program uses p5.js for simple and leightweight web-canvas graphics. 

### Express

This program uses express as an open source and lightweight node.js server library. Our server functions are very simple ATM, though we plan to implement simple database functionality in the future, possibly with accounts. This will require more libraries.



## Contact

Email: notechooserdev@gmail.com