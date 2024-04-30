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