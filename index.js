const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

const questions = [];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(colors.green('Your logo has been created, Enjoy!'));
    });
}

function init() {
    
}

init();