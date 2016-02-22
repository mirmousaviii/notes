#!/usr/bin/env node

var prompt = require('prompt');
var fs = require('fs');

const dataPath = '../data/data.sample.json';

var note = {};

prompt.start();


prompt.get(['Subject', 'Description', 'Link', 'Tags'], function (err, result) {

    note.subject = result.Subject;
    note.description = result.Description;
    note.link = result.Link;
    note.tags = result.Tags.split(',');


    var notesJson = fs.readFileSync(dataPath);
    var notesData = JSON.parse(notesJson);
    notesData.push(note);
    notesJson = JSON.stringify(notesData, null, 2);
    fs.writeFile(dataPath, notesJson, function (err) {
        console.log('\nUpdated data with ' + result.Subject);
    });

});
