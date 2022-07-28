import {compose, pipe} from 'lodash/fp';

let input = "  JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

// trim string 
const trim = str => str.trim();
// place string in div
// const wrapInDiv = str => `<div>${str}</div>`;

// normal
const wrap = (type, str) => `<${type}>${str}</${type}>`;
// currying
const wrap2 = type => str => `<${type}>${str}</${type}>`;

const toLowerCase = str => str.toLowerCase();

// trim iniput -> wrap in div
// const result = wrapInDiv(trim(input));

// Lodash
// compose is a higher order function - wraps the 3 functions into a bigger function
// creating a pipeline of FUNCTIONS from left to right
const transform = pipe(trim, toLowerCase, wrap("div"));
transform(input); 

