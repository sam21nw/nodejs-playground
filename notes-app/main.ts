import yargs from 'yargs';

yargs.version("1.0.0");

// create add command
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
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        console.log("Title: ", argv.title);
        console.log("Body: " + argv.body);
    }
});

// create remove command
yargs.command({
    command: "remove",
    describe: "remove note",
    handler: () => {
        console.log("removing a note");
    }
});

// create list command
yargs.command({
    command: "list",
    describe: "list of note",
    handler: () => {
        console.log("list of notes");
    }
});

// create read command
yargs.command({
    command: "read",
    describe: "reading note",
    handler: () => {
        console.log("reading a note");
    }
});

console.warn(yargs.parse());
