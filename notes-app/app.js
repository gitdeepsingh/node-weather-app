const notes = require('./notes.js')
const yargs = require('yargs')
// const command = process.argv[2];


//cutomizing version
yargs.version('1.0.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: "title of the note to be removed",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'List the notes.',
    handler: () => {
        notes.listNote();
    }
});


//create read command
yargs.command({
    command: 'read',
    describe: 'read a note.',
    handler: () => {
        console.log('reading the note!...')
    }
});

yargs.parse();