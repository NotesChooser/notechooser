function getPossibleNotes(clef) {
    let possibleNotes = [];
    const validOctaves = [-2, -1, 0, 1, 2];
    let validNames = ["C","D","E","F","G","A","B"];
    const validAccidentals = ["bb","b","","#","##"];
    const trebleShift = 1;
    const bassShift = -1;   

    //shifting the validNames list to allign note names with displayed clef
    if(clef == "gClef") { 
            cycle(validNames,trebleShift);
                
    } else  {
        cycle(validNames,bassShift);
                
    }
    for (octave of validOctaves) {
        for (note_name of validNames) {
            for (accidental of validAccidentals) {
                possibleNotes.push({note_name, accidental, octave})
            }

        }
    }
    return(possibleNotes);
}

function randomNumber(min, max) {  //gets a random integer from a min and max
    return Math.floor(Math.random() * (max - min) + min);
}  
function randomNote(noteMin, noteMax, parent) {
    //take random item from possibleNotes, create a Note from this item
    let notes = getPossibleNotes(parent.clef)
    let randomItem = getPossibleNotes(parent.clef)[randomNumber(noteMin, noteMax)];
    const randNote = new Note(randomItem.note_name,randomItem.accidental, randomItem.octave, parent);
    return(randNote);
}  