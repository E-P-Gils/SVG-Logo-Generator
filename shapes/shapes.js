class triangle {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    drawTriangle() {
        return `<svg width="300" height="200">
        <polygon points="0,200 300,200 150,0" fill="${this.color}" />
        <text x="150" y="100" text-anchor="middle" font-size="30">${this.text}</text>
      </svg>`;
    }
}

class circle {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }
    drawCircle() {
        return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="75" fill="${this.color}" />
        <text x="150" y="110" text-anchor="middle" font-size="30">${this.text}</text>
      </svg>`;
    }
}


class square {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }
    drawSquare() {
        return `<svg width="300" height="300">
        <rect x="0" y="0" width="300" height="300" fill="${this.color}" />
        <text x="150" y="150" text-anchor="middle" font-size="30">${this.text}</text>
      </svg>`;
    }
}


module.exports = { triangle, circle, square };