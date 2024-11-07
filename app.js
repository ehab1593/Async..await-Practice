const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

//Assigning a function with resolved values of the three functions from library.js

async function makeBeans() {
let type = await shopForBeans();
let isSoft = await soakTheBeans(type);
let dinner = await cookTheBeans(isSoft);
console.log(dinner);
}

makeBeans();
