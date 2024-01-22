function pushNextLine(res) {
  res.push(`\n`);
}

export function transformer(ast) {
  var res = [`console.log('hello from transformer');`];
  pushNextLine(res);

  while (ast.body.length > 0) {
    var current_node = ast.body.shift();
    switch (current_node.type) {
      case "Execute":
        res.push(`console.log(${current_node.body});`);
        pushNextLine(res);

        break;
    }
  }

  return res;
}
