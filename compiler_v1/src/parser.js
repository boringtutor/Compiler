/**
  ## Lexical Analyzer
  Just like we can split English sentence "I have a pen" to [I, have, a, pen],
  lexical analyzer splits a code string into small meaningful chunks (tokens).
  In this language, each token is delimited by white spaces, a token is either
  `word` or `number`.

  ### Parameter
  - code `String`: the sbn code string to analyze

  ### Return
  Array of objects.
  ```
  input: "Paper 100"
  output:[{ type: 'word', value: 'Paper' }, { type: "number", value: 100 }]
  ```

  ### Notes
  Regex for split
    \s : matches any whitespace character (equal to [\r\n\t\f\v ])
     + : match previous condition for one and unlimited times
*/

export function lexer(code) {
  const res = code.split(/\s+/).map((node) => {
    return isNaN(node)
      ? { type: "word", value: node }
      : { type: "number", value: node };
  });

  return res;
}

/**
  ## Parser (Syntactical Analyzer)
  Parser go through each tokens, find syntactic information, and builds
  AST (Abstract Syntax Tree). You can think of it as a 🗺 for our code.
  In this language, there is 2 syntax type `NumberLiteral` and `CallExpression`.

  `NumberLiteral` means the value is a number. It is used as a parameter
  for CallExpression. In this language, only numbers from 0 to 100 exist.

  `CallExpression` is a command to execute action. There are three kinds.
    - `Paper` means "grab a paper". It takes one NumberLiteral as color
      code of the paper. (In this language, paper is always size 100 x 100)
    - `Pen` is "grab a pen". It takes one NumberLiteral as color code of the pen.
      (In this language, a pen only have a thickness of 1)
    - `Line` means "draw a line" It takes 4 NumberLiteral as coordinates.
      (First half x and y coordinate of starting point, and second half is x and
      y coordinate of ending point, counting from bottom right corner of a paper.)

  ### Parameter
  - tokens `Array`: sbn code tokenized by lexer function

  ### Return
  AST object
  ```
  input: [{ type: "word", value: "Paper" }, { type: "number", value: 100 }]
  output: {
    type: "Drawing",
    "body": [{
      "type": "CallExpression",
      "name": "Paper",
      "arguments": [
        {
          "type": "number",
          "value": "100"
        }
      ]
    }]
  }
  ```
*/

export function parser(tokens) {
  var AST = {
    type: "Drawing",
    body: [],
  };
  while (tokens.length > 0) {
    const token = tokens.shift();
    if (token.type === "word") {
      switch (token.value) {
        case "Paper":
          var expression = {
            type: "CallExpression",
            name: "Paper",
            arguments: [],
          };
          //grab the next token
          var argument = tokens.shift();
          if (argument.type === "number") {
            expression.arguments.push({
              type: "NumberLiteral",
              value: argument.value,
            });
          } else {
            throw "Paper command must be followed by a number.";
          }
          AST.body.push(expression);
          break;
        case "Pen":
          var expression = {
            type: "CallExpression",
            name: "Pen",
            arguments: [],
          };
          //grab the next token
          var argument = tokens.shift();
          if (argument.type === "number") {
            expression.arguments.push({
              type: "NumberLiteral",
              value: argument.value,
            });

            AST.body.push(expression);
          } else {
            throw "Pen command must be followed by a number.";
          }
          break;
        case "Line":
          var expression = {
            type: "CallExpression",
            name: "Line",
            arguments: [],
          };
          // next 4 tokens should be position arguments
          for (var i = 0; i < 4; i++) {
            //grab the next token
            var argument = tokens.shift();
            if (argument.type === "number") {
              expression.arguments.push({
                type: "NumberLiteral",
                value: argument.value,
              });
            } else {
              throw "Line command must be followed by four numbers.";
            }
          }
          AST.body.push(expression);
          break;
      }
    }
  }
  return AST;
}
