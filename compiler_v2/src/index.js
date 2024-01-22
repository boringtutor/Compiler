import { parser, lexer } from "./parser.js";
import { generator } from "./generator.js";
import { transformer } from "./transformer.js";
const code = `🏁 🍇\n'asdflnlansdf'\n🍉`;

// console.log(code);
const tokens = lexer(code);
console.log(tokens);
const ast = parser(tokens);
console.log(ast);

console.log("---------------------------------");

console.log(generator(transformer(ast)));
