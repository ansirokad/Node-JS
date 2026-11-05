// ES5

// const data = require("./exeternal.js");
// // console.log(data);
// console.log(data.fname);
// console.log(data.lname);

// ~~~~~~~~ All Data ~~~~~~~~~~
// const data = require("./exeternal");
// console.log(data);


// ~~~~~~~~ Single Data ~~~~~~~~
// const username = require("./exeternal");
// console.log(username);



// ============================================= 

// ES6

// import data from "./exeternal.js"
// console.log(data);

// import {fname,lname} from "./exeternal.js"
// console.log(fname);
// console.log(lname);


// === single data ===
// import username from "./exeternal.js";
// console.log(username)


// === All data ===

import {username,password} from "./exeternal.js";
console.log(username);
console.log(password);