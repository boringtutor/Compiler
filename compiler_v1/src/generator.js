/**
  ## Code Generator
  At the final stop of abn to avg compile process, generator function created
  SVG code based on given AST.

  ### Parameter
  - svg_ast `Object`: svg abstract syntax tree created by transformer function.

  ### Return
  SVG formatted string
  ```
  input: {
    "tag": "svg",
    "attr": {
      "width": 100,
      "height": 100,
      "viewBox": "0 0 100 100",
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.1"
    },
    "body": [{
      "tag": "rect",
      "attr": {
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "fill": "rgb(0%, 0%, 0%)"
      }
    }]
  }
  output:
  <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <rect x="0" y="0" width="100" height="100" fill="rgb(0%, 0%, 0%)"></rect>
  </svg>
  ```
*/
export function generator(svg_ast) {
  function createAttrString(attr) {
    return Object.keys(attr)
      .map(function (key) {
        return key + '="' + attr[key] + '"';
      })
      .join(" ");
  }
  const svg_attr = createAttrString(svg_ast.attr);
  const elements = svg_ast.body
    .map((i) => {
      return `<${i.tag} ${createAttrString(i.attr)}></${i.tag}>`;
    })
    .join("\n\t");

  return `<svg ${svg_attr}>${elements}</svg>`;
}
