import path from "path"
// process.on("beforeExit", () => {
//     console.log("Let's Go");
// });

//Help to catch and handle errors
// process.on("uncaughtException", () => {
//     console.log("quit this process");
// });


// process.on("unhandledRejection", () => {
//     console.log("quit this process");
// });

import os from "node:os";
import { log } from "console";

console.log(os.platform());
console.log(os.release());
console.log(os.availableParallelism());
console.log(os.cpus());

let val = parseInt(os.cpus()[0].model.split("-")[1].split(" ")
[0][0]);

if (val === 3){
    console.log("This is a third Gen pc");
} else if(val === 5){
    console.log("This is a fifth Gen pc");
} else if(val === 7){
    console.log("This is a seventh Gen pc");
} else if(val === 9){
    console.log("This is a ninth Gen pc");
} else {
    console.log("unavailable Gen");
};

console.log(os.hostname());


// let checkCPU: number = os.cpus().length
// let checki: any = parseInt(os.cpus()[0].model.split("-")[0].split(" ")[2].split
// (" ")[1])

// if (checkCPU < 4 && checki < 5){
//     console.log("Your pc can't run this Game");
// } else {
//     console.log("Your pc can run this Game");
// };
// console.clear();
console.log(os.arch());
console.log(os.freemem());

let mem: number = os.freemem() / (1024 * 1024 * 1024)
let totalmem: number = os.totalmem() / (1024 * 1024 * 1024)
console.log(`${parseFloat(totalmem.toFixed(2))}GB`);

// console.log(os.networkInterfaces());

// console.log(os.userInfo());

// console.clear();
// let myPath = "C:\\Users\\PC\\Desktop\\New folder\\node.ts"
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.join(myPath));

// let index = path.extname("./index.html")

// let pathdir = path.join(__dirname, "index.html")
// console.log(path.basename(pathdir));







