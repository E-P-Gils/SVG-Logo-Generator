const inquirer = require("inquirer");
const readline = require("readline");
const SVG = require("svg.js");
const SVGDOM = require("svgdom");
const document = SVGDOM.createSVGDocument();
const fs = require("fs"); 
const draw = SVG(document.documentElement); 
const { triangle, circle, square } = require("./shapes/shapes");
const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rlInterface.question("Input a catchy phrase or company name for your Logo!", (text) => {
    rlInterface.question("What color is your Logo?", (color) => {
        rlInterface.question("What shape is your logo?(triangle, circle, or square", (shape) => {
            let logoShape;
            if (shape == "triangle"){
                logoShape = new triangle(color, text, draw);
                var myTriangle = logoShape.drawTriangle;
                const callback = function(err){
                    err ? console.error(err) : console.log('Commit logged!')
                  }
                  fs.writeFile("triangle.svg", myTriangle, callback)
            }
            if (shape == "circle"){
                logoShape = new circle(color, text, draw);
                var myCircle = logoShape.drawCircle;
                const callback = function(err){
                    err ? console.error(err) : console.log('Commit logged!')
                  }
                  fs.writeFile("circle.svg", myCircle, callback)
            }
            if (shape == "square"){
                logoShape = new square(color, text, draw);
                var mySquare = logoShape.drawSquare;
                const callback = function(err){
                    err ? console.error(err) : console.log('Commit logged!')
                  }
                  fs.writeFile("square.svg", mySquare, callback)
            }
            rlInterface.close();
})
    })
})