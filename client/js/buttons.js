
// event listener for randomize button
let exampleButton = document.getElementById("randomButton"); 
exampleButton.addEventListener("click", () => {
  testMeasure.randomizeNote(-6,7);
});

//event listener for treble clef button, when clicked sets clef to treble clef
let gClefButton = document.getElementById("gClefButton");
gClefButton.addEventListener("click", () => { 
    testMeasure = new Measure("gClef", testMeasureSize, testMeasurePos);
    testTimeSig = new Timesignature(4, 4, testMeasure);
    testNote = new Note("C","",0, testMeasure);
});

//event listener for bass clef button, when clicked sets clef to bass clef
let fClefButton = document.getElementById("fClefButton");
fClefButton.addEventListener("click", () => {
    testMeasure = new Measure("fClef", testMeasureSize, testMeasurePos);
    testTimeSig = new Timesignature(4, 4, testMeasure);
    testNote = new Note("C","",0, testMeasure);
});



function updateScreen(evaluator){ //takes in evaluator and sets the evaluation text on the screen to that evaluator argument
    evaluation = evaluator
}
