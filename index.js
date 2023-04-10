const inquirer = require("inquirer");
const fs = require("fs"); 
const { triangle, circle, square } = require("./shapes/shapes");

const questions= [
{
    type: "input",
    name: "text",
    message: "Input a catchy phrase or company name for your logo!"
},
{
    type: "input",
    name: "color",
    message: "What color is your logo?"
},
{
    type: "list",
    name: "shape",
    message: "What shape is your logo?",
    choices: ["triangle", "circle", "square"]
}
]

inquirer.prompt(questions).then(answers=>{
    let logoShape;
    let svgContent; 
    if(answers.shape === "triangle"){
        logoShape = new triangle(answers.color, answers.text);
        svgContent = logoShape.drawTriangle();
        fs.writeFile("logo.svg", svgContent, err =>{
            if(err){
                console.error(err);
            } else{
                console.log("File saved successfully.")
            }
        })
    } else if(answers.shape === "circle"){
        logoShape = new circle(answers.color, answers.text);
        svgContent = logoShape.drawCircle();
        fs.writeFile("logo.svg", svgContent, err =>{
            if(err){
                console.error(err);
            } else{
                console.log("File saved successfully.")
            }
        })
    } else if(answers.shape === "square"){
        logoShape = new square(answers.color, answers.text);
        svgContent = logoShape.drawSquare();
        fs.writeFile("logo.svg", svgContent, err =>{
            if(err){
                console.error(err);
            } else{
                console.log("File saved successfully.")
            }
        })
    } else{
        console.error("Invalid Input");
        return;
    }
}).catch((err)=>console.log("Error in program: ", err));
