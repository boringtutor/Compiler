import SBN from "./compiler.js";

var testCode =
  "Paper 95\nPen 1\nLine 50 15 85 80\nPen 30\nLine 85 80 15 80\nPen 70\nLine 15 80 50 15";
var svg = SBN.compile(testCode);
console.log(svg);
