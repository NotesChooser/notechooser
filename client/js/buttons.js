
// event listener for randomize button
let exampleButton = document.getElementById("randomButton"); 
exampleButton.addEventListener("click", () => {
  testMeasure.randomizeNote(-6,7);
});

//event listener for treble clef button, when clicked sets clef to treble clef
let gClefButton = document.getElementById("gClefButton");
gClefButton.addEventListener("click", () => { 
    testMeasure.children.timesignature = new Timesignature(4, 4, testMeasure);
    testMeasure.children.note = new Note("C","",0, testMeasure);
    testMeasure.children.clef = new Clef("gClef", testMeasure);

});

//event listener for bass clef button, when clicked sets clef to bass clef
let fClefButton = document.getElementById("fClefButton");
fClefButton.addEventListener("click", () => {
    testMeasure.children.timesignature = new Timesignature(4, 4, testMeasure);
    testMeasure.children.note = new Note("C","",0, testMeasure);
    testMeasure.children.clef = new Clef("fClef", testMeasure);
    
});



function updateScreen(evaluator){ //takes in evaluator and sets the evaluation text on the screen to that evaluator argument
    evaluation = evaluator
}
