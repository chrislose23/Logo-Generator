class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor= textColor;
    }

    inputColor(shapeColor) {
        this.shapeColor = (shapeColor);
    }

    inputText(text) {
        this.text = (text);
    }

    inputText(textColor) {
        this.textColor = (textColor);
    }
}

module.exports = {
    Shape
};