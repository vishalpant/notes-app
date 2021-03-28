const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptions: true,
            type: 'string'
        },
        body: {
            description: 'Complete note',
            type: 'string',
            demandOptions: true,
        }
    },
    handler: function(argv) {
        console.log('Title:', argv.title)
        console.log('Body:', argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function() {
        console.log('List of notes!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Note!')
    }
})

yargs.parse()