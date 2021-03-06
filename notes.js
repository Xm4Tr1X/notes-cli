console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);

  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  if (!validateInput(title, body, true)) {
    return false;
  }

  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    logNote(note);
    console.log('Note created');
  } else {
    console.log('Note title already taken.');
  }
};
var getAll = () => {
  let notes = fetchNotes();
  if (notes.length === 0) {
    console.log('No Notes Found');
    return false;
  }
  console.log(notes.length + ' Notes found');
  for (let i = 0; i < notes.length; i++) {
    console.log('\t', notes[i].title);
  }
};

var getNote = (title) => {
  if (!validateInput(title)) {
    return false;
  }
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  if (filteredNotes[0]) {
    console.log('Note Found');
    logNote(filteredNotes[0]);
  } else {
    console.log('Note not found');
  }
};

var removeNote = (title) => {
  if (!validateInput(title)) {
    return false;
  }
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  Array.prototype.filter
  var message = notes.length !== filteredNotes.length ? 'Note was removed' : 'Note not found';
  console.log(message);
};

var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

var validateInput = function (title, body, validateBoth) {
  if (title === undefined) {
    console.log('Invalid title');
    return false;
  }
  if (validateBoth === true && body === undefined) {
    console.log('Invalid body');
    return false;
  }
  return true;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
