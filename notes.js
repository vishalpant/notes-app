const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }
    else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)
    updatedNotes.length !== notes.length ? console.log(chalk.green(title, ' removed!')) : console.log(chalk.red('Title not found!'))
    saveNotes(updatedNotes)
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length > 0) {
        console.log(chalk.green('Your notes!'))
        notes.forEach((note) => {
            console.log(chalk.green(note.title))
        })
    }
    else {
        console.log(chalk.red('No notes available!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteRead = notes.find((note) => note.title === title)
    if(noteRead) {
        console.log(chalk.italic(noteRead.title))
        console.log(noteRead.body)
    }
    else {
        console.log(chalk.red('Note not found!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    'addNote': addNote,
    'removeNote': removeNote,
    'listNotes': listNotes,
    'readNote': readNote
}