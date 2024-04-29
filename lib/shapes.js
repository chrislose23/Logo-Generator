class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor= textColor;
    }

    // inputColor(shapeColor) {
    //     this.shapeColor = (shapeColor);
    // }

    // inputText(text) {
    //     this.text = (text);
    // }

    // inputText(textColor) {
    //     this.textColor = (textColor);
    // }
    generateSVG() {
        throw new Error('generateSVG method must be implemented in child classes');
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    generateSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                    <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
                    <text x="100" y="100" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`;
    }

}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor, sideLength) {
        super(shapeColor, text, textColor);
    }

    generateSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                    <polygon points="100,10 190,190 10,190" fill="${this.shapeColor}" />
                    <text x="100" y="150" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`;
    }

}

class Square extends Shape {
    constructor(shapeColor, text, textColor, sideLength) {
        super(shapeColor, text, textColor);
    }

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

module.exports = {
    Circle,
    Triangle,
    Square
};