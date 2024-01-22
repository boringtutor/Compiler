# emojie

This compiler is small version of emojie language compiler written in c. Inspired by [https://github.com/emojicode/emojicode]

## Supported Keywords

This compiler is work-in-progress. Here is a list of commands currently supported (v0.4.3) & planning to implement.

- [x] `🏁`
- [x] `🍇`
- [x] `🍉`
- [ ] `// comment`
- [ ] `Set` (variable)
- [ ] `{ }` (block)
- [ ] Nested block
- [ ] `Repeat`
- [ ] `(+ - / *)` (calculations)
- [ ] `[x, y]` (dot)
- [ ] Copy Dots (calculation on dot)
- [ ] `Same ? / NotSame?` (question)
- [ ] `Smaller ? / NotSmaller?` (question)
- [ ] `Command` (function)
- [ ] `Load` (import)

## usage

```javascript
import { parser, lexer } from "./parser.js";

const code = `🏁 🍇\n'asdflnlansdf'\n🍉`;

const tokens = lexer(code);
parser(tokens);
```

## License

Copyright 2024 boring tutor

Code licensed under the [Apache-2.0 License](http://www.apache.org/licenses/LICENSE-2.0)
Documentation licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
