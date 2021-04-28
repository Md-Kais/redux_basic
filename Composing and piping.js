
const { compose } = require("redux");
//lodash 

let input = " Javascript ";
let output = "<div>" + input.trim() + "</div>";
const trim = str => str.trim();
const wrap= type=>  str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transformDiv = compose(wrap("div"), toLowerCase, trim);
const transformSpan = compose(wrap("span"), toLowerCase, trim);

console.log(
    transformDiv(input),
    transformSpan(input)
);
