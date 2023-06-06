//Import with require syntax from a local file

const { v4: uuid } = require("uuid");

const { saveNotesToFile, readNotesFromFile } = require("./src/notes.service");

console.log("From node js");

const firstName = "Danilo";
const lastName = "Borozan";

console.log(`${firstName} ${lastName}`);

//Creating note call

class Note {
  constructor(author, text) {
    this.id = uuid();
    this.author = author;
    this.text = text;
  }
}

const newNotes = [
  new Note("Borche", "Node Js is fun"),
  new Note("Danilo", "Don't forget feedback"),
  new Note("John", "The notes app is amazing"),
];

const oldNotes = readNotesFromFile();
const notes = [...oldNotes, ...newNotes];
saveNotesToFile(notes);

//Saving the notes data in a file on the system
//We will comment this out for now to prevent overwriting the file

const printNotes = () => {
  const notes = readNotesFromFile();

  notes.forEach((note) => {
    console.log(`Author:${note.author}, Text:${note.text}`);
  });
};

printNotes();
