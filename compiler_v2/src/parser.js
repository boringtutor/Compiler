export function lexer(code) {
  var _tokens = code
    .replace(/[\n\r]/g, " *nl* ")
    .replace(/\🏁/g, " *ob* ")
    .replace(/\🍇/g, " *ocb* ")
    .replace(/\🍉/g, " *ccb* ")
    .split(/[\t\f\v ]+/);

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
  while (tokens.length > 0) {
    var current_token = tokens.shift();
    if (current_token.type === "string") {
      console.log(current_token.value);
    }
  }
}
