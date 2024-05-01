# SVG Logo Generator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Description

![JavaScript](https://img.shields.io/badge/JavaScript-blue) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js](https://img.shields.io/badge/Express.js-blue) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

This application will allow you to quickly generate a simple logo for you to use. The app asks 4 questions to dynamically generate a logo.svg file that you can use.

Here is a walkthrough video I created to assist anyone in the install process or running the application.

[Video Walkthrough](https://app.screencastify.com/v3/watch/MVp6yyV5kjEfhhpxuQ7b)

## Installation

For this application, you will need to download the index.js file and the lib folder with the shapes.js and shapes.test.js files in it.

![Screenshot](/images/installss1.png)

Open the Integrated Terminal and create your package.jason by typing ‘npm init -y’

![Screenshot](/images/installss2.png)

Install Inquirer and the Colors dependency by typing ‘npm i inquirer@8.2.4’ Do the same thing after this complete but this time type ‘npm i colors’

![Screenshot](/images/installss3.png)

Once complete, type ‘node index.js’ to start the application

## Usage

To use this application, type ‘node index.js’ in your Integrated Terminal. This will start the inquirer prompt and give you a few questions to answer about your logo design.

![Screenshot](/images/usagess1.png)

First, enter up to 3 letters. These will appear in the center of your generated logo.

![Screenshot](/images/usagess2.png)

Next select the color of your text. The color can be any color you want with some limitations.

![Screenshot](/images/usagess3.png)

The third question will ask you to pick the shape of your logo. You can choose from Circle, Triangle, or Square.

![Screenshot](/images/usagess4.png)

The final question asks you for a color for your shape.

![Screenshot](/images/usagess5.png)

If successfully generated, you will see a success message in your terminal and the logo.svg file will be created. 

![Screenshot](/images/usagess6.png)

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Tests

I did create a jest test that is available. To access it, open the integrated Terminal and type ’npm test’.

Make sure to install Jest before you run the test. You can do this by typing ’nom i jest’ in your terminal. Once complete, check your package.json file to ensure "test": "jest" is under “scripts”.

![Screenshot](/images/testss1.png)

## Questions

[My GitHub Repo](https://github.com/chrislose23)

[My Email Address](chrislose23@gmail.com)

