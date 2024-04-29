const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters):',
        validate: function(value) {
            return value.length > 0 && value.length <= 3 ? true : 'Please enter up to 3 characters.';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
        default: 'white'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:',
        default: 'blue'
    }
];

function generateLogo(answers) {
    const { text, textColor, shape, shapeColor } = answers;
    const logo = shapes.generate(text, textColor, shape, shapeColor);
    writeToFile('logo.svg', logo);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(colors.green('Generated logo.svg'));
    });
}

function init() {
    inquirer.prompt(questions).then(generateLogo).catch(error => {
        console.error(colors.red('Error occurred making your file:'), error);
    });
}

init();