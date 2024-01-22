// import SBN from "./compiler.js";
import { lexer, parser } from "./parser.js";
import { transformer } from "./transformer.js";
import { generator } from "./generator.js";
var testCode =
  "Paper 95\nPen 1\nLine 50 15 85 80\nPen 30\nLine 85 80 15 80\nPen 70\nLine 15 80 50 15";
// var svg = SBN.compile(testCode);
// console.log(svg);

var tokens = lexer(testCode);
console.log(tokens);

console.log("----------------------------------------");
var ast = parser(tokens);
console.log(ast);
console.log("----------------------------------------");
var svg_ast = transformer(ast);
console.log(svg_ast);
console.log(svg_ast.body);
console.log("----------------------------------------");

var svg = generator(svg_ast);
console.log(svg);
