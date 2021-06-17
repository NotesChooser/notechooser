
// event listener for randomize button
let exampleButton = document.getElementById("randomButton");
exampleButton.addEventListener("click", () => {
    testMeasure.randomizeNote(-6, 7);
});

//event listener for treble clef button, when clicked sets clef to treble clef
let gClefButton = document.getElementById("gClefButton");
gClefButton.addEventListener("click", () => {
    testMeasure.children.timesignature = new Timesignature(4, 4, testMeasure);
    testMeasure.children.note = new Note("C", "", 0, testMeasure);
    testMeasure.children.clef = new Clef("gClef", testMeasure);

});

//event listener for bass clef button, when clicked sets clef to bass clef
let fClefButton = document.getElementById("fClefButton");
fClefButton.addEventListener("click", () => {
    testMeasure.children.timesignature = new Timesignature(4, 4, testMeasure);
    testMeasure.children.note = new Note("C", "", 0, testMeasure);
    testMeasure.children.clef = new Clef("fClef", testMeasure);

});


function button_handler(button_name) {
    console.log(button_name);
    if (testMeasure.children.note.name == button_name) {
        console.log("yo!");
        evaluation = "yo!";
    } else {
        console.log(`bruh! ${testMeasure.children.note.name}`);
        evaluation = `bruh! ${testMeasure.children.note.name}`;
    }

    testMeasure.randomizeNote(-6, 7);
}

function addButtons(button_names) {
    // return a list of buttons based on list of button titles
    const button_div = document.getElementById("button-container");
    let output = [];
    for (let button_name of button_names) {
        const new_button = document.createElement("div");
        new_button.setAttribute("class", "button");
        new_button.innerHTML = button_name;
        new_button.id = button_name;
        new_button.addEventListener("click", () => button_handler(button_name));
        button_div.appendChild(new_button);
        output.push(new_button);

    }
    return output;

}

addButtons(Note.valid_names);

window.addEventListener("keydown", (keyEvent) => { // get keyboard input for note name guesses
    guess = keyEvent.key.toUpperCase();
    if (Note.valid_names.includes(guess)) { //discard irrelevant key events (i.e. the 'O' key)
        button_handler(keyEvent.key.toUpperCase());
    }
});


