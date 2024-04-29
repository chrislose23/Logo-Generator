class Shape {
    constructor() {
        this.color = ''
    }
    inputColor(color) {
        this.color = (color);
    }
}

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    generateSVG() {
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="75" fill="${this.color}"/></svg>`;
    }
}

class Triangle {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    generateSVG() {
        const halfHeight = (Math.sqrt(3) / 2) * this.sideLength;
        const halfWidth = this.sideLength / 2;
        return `<svg width="300" height="200"><polygon points="${150 - halfWidth},${100 + halfHeight} ${150},${100 - halfHeight} ${150 + halfWidth},${100 + halfHeight}" fill="${this.color}"/></svg>`;
    }
}

class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    generateSVG() {
        return `<svg width="300" height="200"><rect x="${150 - this.sideLength / 2}" y="${100 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}"/></svg>`;
    }
}

function generate(text, textColor, shapeType, shapeColor) {
    let shape;
    switch (shapeType) {
        case 'circle':
            shape = new Circle(50, shapeColor); // Adjust the radius as needed
            break;
        case 'triangle':
            shape = new Triangle(100, shapeColor); // Adjust the side length as needed
            break;
        case 'square':
            shape = new Square(100, shapeColor); // Adjust the side length as needed
            break;
        default:
            throw new Error('Invalid shape type');
    }

    // You can add text to the SVG here if needed

    return shape.generateSVG();
}

module.exports = {
    generate
};