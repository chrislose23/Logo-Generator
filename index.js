// importing required classes
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

// Questions to ask in inquirer prompt
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

// The function that generates the logs
function generateLogo(answers) {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeObject;

    switch (shape) {
        case 'circle':
            shapeObject = new Circle(shapeColor, text, textColor);
            break;
        case 'triangle':
            shapeObject = new Triangle(shapeColor, text, textColor);
            break;
        case 'square':
            shapeObject = new Square(shapeColor, text, textColor);
            break;
        default:
            throw new Error('Invalid shape type');
    }

    const logoSVG = shapeObject.generateSVG();

    writeToFile('logo.svg', logoSVG);
}
// function that creats the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(colors.green('Generated logo.svg'));
    });
}
// the init function
function init() {
    inquirer.prompt(questions).then(generateLogo).catch(error => {
        console.error(colors.red('Error occurred making your file:'), error);
    });
}
// calls the inti function
init();