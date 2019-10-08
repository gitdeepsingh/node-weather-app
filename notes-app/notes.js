const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    debugger
    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('A new note is added successfully.'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
        console.log(chalk.yellow('Please try with some other title.'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > newNotes.length) {

        saveNotes(newNotes);
        console.log(chalk.green.inverse('Note removed successsfully'));
    } else {
        console.log(chalk.red.inverse('Note not found!'));        
        console.log(chalk.yellow('Please try with another title. '));
    }
}

const listNote = () => {
    const notes=loadNotes();
    console.log(chalk.rgb(10, 100, 200)('Your Notes: '))
    notes.forEach(note => {
    console.log(chalk.rgb(100, 10, 100)('-', note.title));       
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = { addNote, removeNote, listNote }