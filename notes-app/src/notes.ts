import { UUID } from "crypto";
import fse from "fs-extra";

type Note = {
    id: UUID,
    title: string,
    body: string;
};

const loadNotes = (): Note[] => {
    try {
        const dataString: string = fse.readFileSync("notes.json", "utf-8");
        return JSON.parse(dataString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes: Note[]) => {
    const dataJSON: string = JSON.stringify(notes);
    fse.writeFileSync("notes.json", dataJSON);
};

const getNotes = (): void => {
    const notes: Note[] = loadNotes();
    notes.forEach(note => {
        console.log(note);
    });
};

const addNote = (note: Note): void => {
    const notes: Note[] = loadNotes();
    const duplicateNotes = notes.filter((n: Note) => n.title === note.title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);

        console.log('New note added:', note.title);
    } else {
        console.warn("Note title taken");
    }
};

const removeNote = (command: string): void => {
    const notes: Note[] = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== command);

    if (notes.length > notesToKeep.length) {
        console.log("Note removed");
        saveNotes(notesToKeep);
    } else {
        console.log("No notes found");
    }
};

const readNote = (command: string): void => {
    const notes: Note[] = loadNotes();
    const noteToRead = notes.filter(note => note.title === command);
    if (noteToRead.length == 0) {
        console.warn("No note to read with the provided title");
    } else {
        console.log(noteToRead);
    }
};

export const notes = { getNotes, addNote, removeNote, readNote };
