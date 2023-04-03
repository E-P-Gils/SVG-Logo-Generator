const inquirer = require("inquirer");
const readline = require("readline"); 
const svgjs = require("svg.js");

class triangle{
    constructor(type, color, text){
    this.type = "triangle";
    this.color = color;
    this.text = text;
    }

    drawTriangle(){
        var userTriangle = draw.triangle(100).fill(this.color)
    }
}


class circle{
    constructor(type, color, text){
    this.type = "circle";
    this.color = color;
    this.text = text;
    }

    drawCircle(){
        var userCircle = draw.circle(100).fill(this.color)
    }
}

class square{
    constructor(type, color, text){
    this.type = "square";
    this.color = color;
    this.text = text;
    }

    drawSquare(){
        var userSquare = draw.square(100).fill(this.color)
    }
}