
// event listener for randomize button
let exampleButton = document.getElementById("testButton"); 
exampleButton.addEventListener("click", () => {
  console.log("randomized note!");
  testNote = randomNote(45, 99, testMeasure);
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
    console.log(testMeasure);
    testNote = new Note("C","",0, testMeasure);
});

//event listeners for C,D,E,F,G,A,B buttons (line 27 to 111) -> evaluates if button user clicked matches note on screen and calls updateScreen() function
let cButton = document.getElementById("cButton");
cButton.addEventListener("click", () => {
    if(testNote.name == "C") {
        console.log("yo!");
        updateScreen("yo!");
    } else {
        console.log("bruh!");
        updateScreen(`bruh! \n${testNote.name}`);
    }
    testNote = randomNote(45, 99, testMeasure);
});

let dButton = document.getElementById("dButton");
dButton.addEventListener("click", () => {
    if(testNote.name == "D") {
        console.log("yo!");
        updateScreen("yo!");
    } else {
        console.log("bruh!");
        updateScreen(`bruh! \n${testNote.name}`);
    }
    testNote = randomNote(45, 99, testMeasure);
});

let eButton = document.getElementById("eButton");
eButton.addEventListener("click", () => {
    if(testNote.name == "E") {
        console.log("yo!");
        updateScreen("yo!");
    } else {
        console.log("bruh!");
        updateScreen(`bruh! \n${testNote.name}`);
    }
    testNote = randomNote(45, 99, testMeasure);
});

let fButton = document.getElementById("fButton");
fButton.addEventListener("click", () => {
    if(testNote.name == "F") {
        console.log("yo!");
        updateScreen("yo!");
    } else {
        console.log("bruh!");
        updateScreen(`bruh! \n${testNote.name}`);
    }
    testNote = randomNote(45, 99, testMeasure);
});


let gButton = document.getElementById("gButton");
gButton.addEventListener("click", () => {
    if(testNote.name == "G") {
        console.log("yo!");
        updateScreen("yo!");
    } else {
        console.log("bruh!");
        updateScreen(`bruh! \n${testNote.name}`);
    }
    testNote = randomNote(45, 99, testMeasure);
});


let aButton = document.getElementById("aButton");
aButton.addEventListener("click", () => {
    if(testNote.name == "A") {
        console.log("yo!");
        updateScreen("yo!");
    } else {
        console.log("bruh!");
        updateScreen(`bruh! \n${testNote.name}`);
    }
    testNote = randomNote(45, 99, testMeasure);
});

let bButton = document.getElementById("bButton");
bButton.addEventListener("click", () => {
    if(testNote.name == "B") {
        console.log("yo!");
        updateScreen("yo!");
    } else {
        console.log("bruh!");
        updateScreen(`bruh! \n${testNote.name}`);
    }
    testNote = randomNote(45, 99, testMeasure);
});

function updateScreen(evaluator){ //takes in evaluator and sets the evaluation text on the screen to that evaluator argument
    evaluation = evaluator
}
