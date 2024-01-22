export function lexer(code) {
  var _tokens = code
    .replace(/[\n\r]/g, " *nl* ")
    .replace(/\🏁/g, " *ob* ")
    .replace(/\🍇/g, " *ocb* ")
    .replace(/\🍉/g, " *ccb* ")
    .replace(/\😀/g, " *cl* ") //console.log
    .replace(/\🔤/g, " *sl* ") //string literal
    .split(/[\t\f\v ]+/);
  console.log(_tokens);
  const tokens = [];
  for (let i = 0; i < _tokens.length; i++) {
    const token = _tokens[i];
    if (token === "") continue;
    if (token === "*nl*") {
      tokens.push({
        type: "newline",
      });
    } else if (token === "*ob*") {
      tokens.push({
        type: "start-code",
      });
    } else if (token === "*ocb*") {
      tokens.push({
        type: "start-block",
      });
    } else if (token === "*ccb*") {
      tokens.push({
        type: "end-block",
      });
    } else if (token === "*cl*") {
      tokens.push({
        type: "console-log",
      });
    } else if (token === "*sl*") {
      tokens.push({
        type: "string-literal",
      });
    } else {
      tokens.push({
        type: "string",
        value: token,
      });
    }
  }
  if (tokens.length <= 0) {
    console.log("Error: No tokens found");
    return;
  }

  return tokens;
}

export function parser(tokens) {
  var AST = {
    type: "Program",
    body: [],
  };

  while (tokens.length > 0) {
    var current_token = tokens.shift();
    switch (current_token.type) {
      case "start-block":
        var node = {
          type: "Code",
          body: "{",
        };
        AST.body.push(node);
        break;
      case "end-block":
        var node = {
          type: "Code",
          body: "}",
        };
        AST.body.push(node);
        break;
      case "newline":
        var node = {
          type: "Code",
          body: "\n",
        };
        AST.body.push(node);
        break;
      case "string":
        var node = {
          type: "Execute",
          body: current_token.value,
        };
        AST.body.push(node);
        break;
    }
  }
  return AST;
}
