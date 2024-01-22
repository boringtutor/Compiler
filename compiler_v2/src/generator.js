const template = (code) => {
  return `export default function main(){
    return(
        ${code}
    )   
}
main();
`;
};

export function generator(javascript_ast) {
  const code = javascript_ast.join("");
  return template(code);
}
