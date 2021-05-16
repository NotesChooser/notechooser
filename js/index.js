//global variables
let testMeasure; 
let testNote;
let testTimeSig;
let evaluation;
const testMeasureSize = 200;
const testMeasurePos = new p5.Vector(80,400);
let bravura; //bravura is the music notation font using the SMuFL standard
let glyphnames; //glyphnames is a dictionary of musical notation symbols and their corresponding unicode codepoints (in the private use area of unicode, as per SMuFL)

function preload() {//preloads assets at beginning of the program
  bravura = loadFont("/assets/BravuraText.otf");
  console.log("loaded font!");
  glyphnames = loadJSON("/assets/glyphnames.json");
} 

function setup() {//runs once at beginning of the program
    encode("(staff5LinesWide)", glyphnames);
    createCanvas(1280, 720);
    testMeasure = new Measure("gClef", testMeasureSize, testMeasurePos);  
    testTimeSig = new Timesignature(4, 4, testMeasure);
    testNote = new Note("C","",0, testMeasure);
}

function draw() { //P5.js's draw runs 60 times per second
  background(229); 
  testMeasure.show(glyphnames, bravura);
  fill(0);
  if (evaluation == "yo!"){  //if the note button the user clicked matches with the note on screen, makes the text green
    fill(0,240,0); 
  } else { //if the note button the user clicked does not match with the note on screen, makes the text red
    fill(255,50,50); 
  }
  textSize(100);
  textFont("Georgia");
  text(evaluation, 850, 350); //takes in evaluation from if statement in button code which determines if the button pressed was correct
}