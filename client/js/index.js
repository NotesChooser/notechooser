//global variables
let testMeasure; 
let testNote;
let testTimeSig;
let evaluation = "";
const testMeasureSize = 200;
const testMeasurePos = new p5.Vector(80,400);

function setup() {//runs once at beginning of the program
    canvas = createCanvas(1440, 810);
    canvas.parent("canvas");
    testMeasure = new Measure(testMeasureSize, testMeasurePos);  
    testTimeSig = new Timesignature(4, 4, testMeasure);
    testClef = new Clef("gClef",testMeasure);
    testNote = new Note("C","",0, testMeasure);
}

function draw() { //P5.js's draw runs 60 times per second
  background(229); 
  testMeasure.show(smufl_dict, bravura);
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