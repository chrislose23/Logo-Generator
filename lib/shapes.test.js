// Jest Test
const {Circle, Triangle, Square} = require('./shapes')

// Circle shape to test
describe('Circle', () => {
    it('circle created correctly', () => {
        const result = new Circle();
        let svg = result.generateSVG();
        expect(svg).toEqual(
                `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
                <text x="100" y="100" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`)
    });
});

// Triangle shape to test
describe('Triangle', () => {
    it('triangle created correctly', () => {
        const result = new Triangle();
        let svg = result.generateSVG();
        expect(svg).toEqual(
                `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                <polygon points="100,10 190,190 10,190" fill="${this.shapeColor}" />
                <text x="100" y="150" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`)
    });
});

// Square shape to test
describe('Square', () => {
    it('square created correctly', () => {
        const result = new Square();
        const x = 10;
        const y = 10;
        const width = 150;
        const halfWidth = width / 2;

        const textX = x + halfWidth;
        const textY = y + halfWidth;
        let svg = result.generateSVG();
        expect(svg).toEqual(
                `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
                <rect width="${width}" height="${width}" x="${x}" y="${y}" fill="${this.shapeColor}" />
                <text x="${textX}" y="${textY}" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".3em">${this.text}</text>
                </svg>`)
    });
});