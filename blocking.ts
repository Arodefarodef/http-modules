// const heavyFunction = (a: number) => {
//     let start = new Date().getTime();
    
    
//     while(new Date().getTime() < start + a) {
//         console.log("Processing...");
        
//     };
//     // console.log(start);
    
//     setTimeout(() =>{
//         console.log("Processing...");
        
//     }, a);
    
// };

// console.log("task 1");
// console.log("task 2");
// heavyFunction(2000);
// console.log("task 3");
// console.log("task 4");


// console.log("ended...");

// const tasked = (cb: any) => {
//     return setTimeout(() => {
//         cb((err: Error, data: string) =>{
//             if(err) {
//                 throw err
//             } else {
//                 console.log("");
                
//             }
//         }) 
//     }, 0);
// };

// const newTasked = (cb: any) => {
//     return setTimeout(cb(null, "This is awesome"), 0);
// };

// newTasked((err: Error, data: string)=> {
//     if(err) {
//         throw err
//     } else {
//         return data;
        
//     }
// })



// const heavyFunction = (a: number) => {
//     let start = new Date().getTime();
    
    
//     while(new Date().getTime() < start + a) {
//         console.log("Processing...");
        
//     };
    // console.log(start);
    
    // setTimeout(() =>{
    //     console.log("Processing...");
        
    // }, a);
    
// };
// tasked(cb(null, "data"));
// console.log("ended...");

// console.log("tasked 1");
// console.log("tasked 2");
// heavyFunction(1000);
// console.log("tasked 3");
// console.log("tasked 4");
// let named = "Dora";



//blocking 
// const heavy = (a: number) => {
//     let start = new Date().getMonth();

//     while (new Date().getMonth()  > start + a); {
//         console.log("Good Girl");
        
//     }
//     // console.log(start);
// };

// console.log("tasked 1");
// console.log("tasked 2");
// heavy(1000);
// console.log("tasked 3");
// console.log("tasked 4");

// console.log("Bad");

// const Funct = (a: number) => {
//     let start = new Date().getTime();

//     while(new Date().getTime() < start + a); {
//         console.log("fine");
//     };
    // console.log(start);
    
    // setTimeout(() => {
    //     console.log("Not good");
    // }, a);
// }

// console.log("tasked 1");
// console.log("tasked 2");
// Funct(2000);
// console.log("tasked 3");
// console.log("tasked 4");
// console.log("Bad");

