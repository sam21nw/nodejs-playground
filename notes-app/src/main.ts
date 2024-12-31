import yargs from 'yargs';
import { notes } from "./notes";
import { randomUUID } from 'crypto';

yargs.version("1.1.0");

// add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true, type: "string"
        }
    },
    handler: (argv) => {
        notes.addNote({ id: randomUUID(), title: argv.title, body: argv.body });
    }
});

// remove command
yargs.command({
    command: "remove",
    describe: "remove note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

// list command
yargs.command({
    command: "list",
    describe: "list of notes",
    handler: () => {
        notes.getNotes();
    }
});

// read command
yargs.command({
    command: "read",
    describe: "reading note",
    handler: (argv) => {
        notes.readNote(argv.title);
    }
});

yargs.parse();
