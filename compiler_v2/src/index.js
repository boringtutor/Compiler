import { parser, lexer } from "./parser.js";
import { generator } from "./generator.js";
import { transformer } from "./transformer.js";
import { Emojis as E } from "./types/emojies.js";

const code = `🏁 🍇\n'asdflnlansdf'\n🍉`;
const code_1 = `🏁 🍇\n😀 🔤Hey!🔤❗️\n🍉`;
// console.log("---------------------------------");
// console.log("---------------------------------");
// console.log("🍇");
// console.log(E.E_GRAPES);

// console.log("---------------------------------");
// console.log("---------------------------------");

console.log(code_1);
const tokens = lexer(code_1);
console.log(tokens);
// const ast = parser(tokens);
// console.log(ast);

// console.log("---------------------------------");

// console.log(generator(transformer(ast)));
