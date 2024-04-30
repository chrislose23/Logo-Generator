// Shape Parent Class
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor= textColor;
    }
// Error when child classes are not called
    generateSVG() {
        throw new Error('generateSVG method must be implemented in child classes');
    }
}
// Circle child class
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
// Function to generate circle
    generateSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
                <text x="100" y="100" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`;
    }

}
// Triangle child class
class Triangle extends Shape {
    constructor(shapeColor, text, textColor, sideLength) {
        super(shapeColor, text, textColor);
    }
// Function to generate triangle
    generateSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                    <polygon points="100,10 190,190 10,190" fill="${this.shapeColor}" />
                    <text x="100" y="150" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`;
    }

}
// Square child class
class Square extends Shape {
    constructor(shapeColor, text, textColor, sideLength) {
        super(shapeColor, text, textColor);
    }
// Function to generate square
    generateSVG() {
        const x = 10;
        const y = 10;
        const width = 150;
        const halfWidth = width / 2;

        const textX = x + halfWidth;
        const textY = y + halfWidth;

        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                    <rect width="${width}" height="${width}" x="${x}" y="${y}" fill="${this.shapeColor}" />
                    <text x="${textX}" y="${textY}" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`;
    }

}
// Class export
module.exports = {
    Circle,
    Triangle,
    Square
};