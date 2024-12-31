import yargs from 'yargs';

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Title:', argv.title);
        console.log('Body:', argv.body);
    }
})
    .help()
    .argv;


const command: string = process.argv[2];

if (command == "add") {
    console.log("Adding note!");
} else if (command == "remove") {
    console.log("Removing note!");
}
