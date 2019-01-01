console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


function showOptions() {
  console.log('Welcome to notes app');
  console.log('Commands include : add, list, read, remove');
  console.log('Options: ');
  console.log('\n \t --title \t  title of the note. Also used as the identity of a note');
  console.log("\n \t --body \t body of the note.");
  console.log('\n \t \t Example ');
  console.log('\n \t \t node app.js add --title="mytitle" --body="note content"');
}
const argv = yargs.argv;
var command = argv._[0];
console.log('Yargs', argv);

const commandArr = ['add', 'list', 'read', 'remove', 'help'];
const commandCallbackArr = [notes.addNote, notes.getAll, notes.getNote, notes.removeNote, showOptions];
if (command !== undefined) {
  let index = commandArr.indexOf(command);
  if (index > -1) {
    commandCallbackArr[index](argv.title, argv.body);
  } else {
    console.log('Command Not found');
  }
} else {
  console.log('No command found. Type help for more options')
}

function showOptions() {
  console.log('Welcome to notes app');
  console.log('Commands include : add, list, read, remove, help');
  console.log('\t Options: ');
  console.log('\n\t --title\ttitle of the note. Also used as the identity of a note');
  console.log("\n\t --body\tbody of the note.");
  console.log('\n\t Example ');
  console.log('\n\t node app.js add --title="mytitle" --body="note content"');
}