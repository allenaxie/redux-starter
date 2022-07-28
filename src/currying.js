// normal function with 2 arguments
// function add (a,b) {
//     return a + b;
// }

// Currying
function add (a) {
    return function (b) {
        return a + b;
    }
}
// arrow function version
const add2 = a => b => a + b;
// separate parameters with parenthesis
add(a)(b);
