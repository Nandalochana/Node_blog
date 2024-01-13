//const name = 'mario';
//console.log(name);

const xyz = require("./export");

console.log(xyz);

const value = (my_value) =>{

    console.log(`hello, ${my_value}`);
}

value('danushka');
value('kamal');


console.log(globalThis)

// globalThis.setTimeout(() => {
//     console.log('time-out')
// }, 3000);


// globalThis.setInterval(() => {
//     console.log('time-interval')
// }, 100);