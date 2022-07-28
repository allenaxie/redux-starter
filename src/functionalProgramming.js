import {compose, pipe} from 'lodash/fp';
// import { Map } from 'immutable';
import {produce} from 'immer';

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
const transform = pipe(trim, toLowerCase, wrap2("div"));
transform(input); 


const person = {
    name: "John",
    address: {
        country: "USA",
        state: "California",
        city: "San Francisco",
    },
    car: {
        brand: "Honda",
        model: "civic"
    }
};

// Shallow copy
// const updated = {
//     ...person, 
//     name:"Bob",
// };
// this will update BOTH person and updated objects
// because shallow copies only holds a reference to the original object
// updated.address.city = "New York"

// DEEP copy
// const updated = {
//     ...person,
//     address: {
//         ...person.address,
//         city: "New York",
//     },
//     name: "Allen"
// }
// console.log(person);
// console.log(updated);

const numbers = [1,2,3];

// Adding
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index), // copy elements from index 0 to index of 2
    4, // add 4
    ...numbers.slice(index) // copy from 2 till end of array
]

// add element to end
const add2 = [...numbers, 5]; // [1,2,3,5]
// console.log(add2);
// add element to front
const add3 = [5,...numbers]; // [5,1,2,3]
// console.log(add3);

// console.log(added);

// Removing
const filtered = numbers.filter((n) => n !== 2);
// console.log(filtered); // [1,3]

// Updating
// if n equals 2, return 20, else return n
const updated = numbers.map((n) => n === 2 ? 20 : n);
// console.log(updated); // [1,20,3]



// Immutable.js
// let book = Map({title: "Harry Potter"});
// console.log(book.get("title"));
// console.log(book.toJS());

// Immer
let book = { title: "Harry Potter"};

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);