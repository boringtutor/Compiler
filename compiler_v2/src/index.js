import { parser, lexer } from "./parser.js";

const code = `🏁 🍇\n'asdflnlansdf'\n🍉`;

// console.log(code);
const tokens = lexer(code);
parser(tokens);
