


class triangle {
    constructor(color, text, draw) {
        this.color = color;
        this.text = text;
        this.draw = draw;
        this.drawTriangle = this.draw
        .rect(100,100)
        .fill(this.color)
        .move(10,10);

        this.drawText = this.draw
        .text(this.text)
        .font({
            family: "Helvetica",
            size: 30, 
            anchor: "middle",
            leading: 1, 
        })
        .move(60,150);
    }
}


class circle {
    constructor(color, text, draw) {
        this.color = color;
        this.text = text;
        this.draw = draw;
        this.drawCircle = this.draw
        .rect(100,100)
        .fill(this.color)
        .move(10,10);

        this.drawText = this.draw
        .text(this.text)
        .font({
            family: "Helvetica",
            size: 30, 
            anchor: "middle",
            leading: 1, 
        })
        .move(60,150);
    }
}

class square {
    constructor(color, text) {
        this.color = color;
        this.text = text;
        this.draw = draw;
        this.drawSquare = this.draw
        .rect(100,100)
        .fill(this.color)
        .move(10,10);

        this.drawText = this.draw
        .text(this.text)
        .font({
            family: "Helvetica",
            size: 30, 
            anchor: "middle",
            leading: 1, 
        })
        .move(60,150);
        
    }
}

module.exports = { triangle, circle, square };