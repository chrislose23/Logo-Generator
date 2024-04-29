class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    generateSVG() {
        return;
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
        return;
    }
}

class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    generateSVG() {
        return;
    }
}


module.exports = {
    Circle,
    Triangle,
    Square
};