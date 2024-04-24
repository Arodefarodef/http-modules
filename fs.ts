import { log, timeEnd, time } from "node:console";
import fs, {mkdirSync, writeFile} from "node:fs";
import path from "node:path";
import fspromise from "node:fs/promises"
import { json } from "stream/consumers";
import moment from "moment";

// fs.readFile("./index.html", "utf-8", (err: any, data:string) => {
//     if (err){
//         throw err;
//     } else {
//         console.log("reading async: ", data);
//     }
// });

// const data = fs.readFileSync("./index.html", "utf-8");

// // console.log("reading: ", data);

// let pathData = path.join(__dirname, "number.txt");
// fs.writeFile(pathData, "This is my path", () => {
//     for(let i = 0; i < 10; i++){
//         console.log(i);
//     }
// });

// console.clear();



// const myFile = path.join(__dirname, "data", "data.txt");
// const myFile1 = path.join(__dirname, "data", "data.txt");

// const writeToFile = (numb: number) => {
//     console.time("started")
//     fs.open(myFile, "w", (err: any, data: any) => {
//         if (err){
//             throw err;
//         } else {
//             for (let i = 0; i <= numb; i++){
//                 fs.write(data, `${i}`, () => {});
//             };
//         }

//         console.timeEnd("started")
//     })
// };

// writeToFile(19)

// const writeToPromise = async (numb: number) => {
//     console.time("started");
    
    
//     const promiseData = await fspromise.open(myFile, "w")
    
//     for(let i = 0; i <= numb; i++){
//         await promiseData.write(` ${i} `);
//     }
//     console.timeEnd("started")
    
// }

// console.clear();

// writeToPromise(50000);

// const student = {
//     id: 1,
//     name: "Fedora",
//     registerTime: Date.now()
// }


// const stuFile = path.join(__dirname, "schoolfile", "student.json");

// fs.writeFile(stuFile, JSON.stringify(student), () => {
//     console.log("done");
    
// })
// interface iProps {
//     name: string;
//     id: number;
//     resgisterTime: number;
// }

// fs.readFile(stuFile,  (error: any, res: iProps | any) => {
//     if(error) {
//         console.log(error);  
//     } else {
//         let data = JSON.parse(res);
//         data.push(student);

//         fs.writeFile(stuFile, JSON.stringify(data), () => {
//             console.log(data);
//         })
//     }
// });


// fs.unlink(myFile1, () => {
//     console.log("file deleted");
// });l000000000000000

// let entry = path.join(__dirname, "student", "studentEntry.json");
// let dir = path.join(__dirname, "student")


// let student1 = {
//     name: "praise",
//     score: 55,
//     time: moment(Date.now())
// }


// let updateId = "";
// let updatedScore = 0


// const studentCreation = (name: string, score: number) => {
//     if(!fs.existsSync(dir)){
//         fs.mkdir(dir, () => {
//             console.log("folder created");
            
//         })
//         let arr:{}[] = [];
//         arr.push(student1);
    
//         fs.writeFile(entry, JSON.stringify(arr), () => {
//             console.log("done");
//         })
//     } else {
//         fs.readFile(entry, (err: any,res: any) => {
//             if(err) throw err;
    
//             let data = JSON.parse(res);
//             if (updateId !== "" && updatedScore !== 0) {
//                 let updateEntry = data.find((el: any) => {
//                     return el.Id === updateId;
//                 });
//                 updateEntry.score = updatedScore;
    
//                 let fetchOut = data.filter((el: any) => {
//                     return el.Id !== updateId
//                 });
//                 fetchOut.push(updateEntry);
//                 fs.writeFile(entry, JSON.stringify(fetchOut), () => {
//                     console.log("done");
//                 });
//             } else {
    
//                 let checked = data.some((el: any) => {
//                   return el.id !== updateId;
//                 });
//                 if (!checked){
//                     console.log(`${student1.name} already exists`);
//                 }else{
//                     data.push(student1);
//                     fs.writeFile(entry, JSON.stringify(data), () => {
//                         console.log("yes");
//                     }); 
//                 }
//             }
//         });
//     };
// }

// const addSchool = () => {
//     fs.readFile(entry, (err, data: any) => {
//         if(err) throw Error;

//         let myData = JSON.parse(data);

//         const read = myData.map((el: any) => {
//             return {...el, school: "CodeLab"}
//         })
//         fs.writeFile(entry, JSON.stringify(read), () => {
//             console.log("through");
//         })
//     })
// };

// studentCreation("Fedora", 78)
// addSchool()


let storeEntry = path.join(__dirname, "store", "store.json");
let storeDir = path.join (__dirname, "store")

let resultData: any = {
    businessName: "kudi",
    dataRecorded: "",
    CEO: "Zara",
    adress: "AWodi-Ora Estata",
    contact: "",
    email: "",
    faceBook: "",
    data: [],
    notice: []

}


class myClass  {
    createItems = (name: string, category: string, qty: number) => {
        let res = (a: number, b: number) => {
            return Math.floor(Math.random() * (a - b + 1) + b)
        }
        let items = {
            id: res,
            name,
            qty,
            time: moment(Date.now()).format("llll"),
            category,
        }
        if(!fs.existsSync(storeDir)){
            fs.mkdirSync(storeDir);


            resultData.data.push(items);
    
            fs.writeFile(storeEntry, JSON.stringify(resultData), () => {
                console.log("file created");
            })
        } else {
            fs.readFile(storeEntry, (err: any, data: any) => {
                if(err) throw err;
    
                let store = JSON.parse(data);
                store.data.push(items);
    
                console.log(store);
    
                fs.writeFile(storeEntry, JSON.stringify(store), () => {
                    console.log("created again");
                });
            });
        }
    };


     addQty = (name: string, qty: number, category: string) => {
        let res = (a: number, b: number) => {
            return Math.floor(Math.random() * (a - b + 1) + b)
        }
    
        let items = {
            id: res,
            name,
            qty,
            time: moment(Date.now()).format("llll"),
            category,
        }
        fs.readFile(storeEntry, (err: any, res: any) => {
            if (err) throw err;
            let data: any = JSON.parse(res);
            console.log(data);
            let result = data.data.push(items)
    
            fs.writeFile(storeEntry, JSON.stringify(data), () => {
                console.log();
                
            })
        })
    }

    addItems = (name: string, qty: number) => {
        fs.readFile(storeEntry, (err: any, res: any) => {
            if(err) throw err;
            let data = JSON.parse(res);
            let result = data.data.find((el: any) => {
                return el.name === name;
            })
            
            result.qty = result.qty + qty
    
            fs.writeFile(storeEntry, JSON.stringify(data), () => {
                console.log(`${name} has been added`);
                
            })
        })
    }
    
}


let MyClass = new myClass()
// MyClass.addQty("malt", 6,"drinks")
MyClass.addItems("malt", 2)
// MyClass.createItems("sprite", "drinks", 2)
// console.log(MyClass);







// const createItems = (name: string, category: string, qty: number) => {
//     let res = (a: number, b: number) => {
//         return Math.floor(Math.random() * (a - b + 1) + b)
//     }
//     let items = {
//         id: res,
//         name,
//         qty,
//         time: moment(Date.now()).format("llll"),
//         category,
//     }
//     if(!fs.existsSync(storeDir)){
//         fs.mkdirSync(storeDir);

//         resultData.data.push(items);

//         fs.writeFile(storeEntry, JSON.stringify(resultData), () => {
//             console.log("file created");
//         })
//     } else {
//         fs.readFile(storeEntry, (err: any, data: any) => {
//             if(err) throw err;

//             let store = JSON.parse(data);
//             store.data.push(items);

//             console.log(store);

//             fs.writeFile(storeEntry, JSON.stringify(store), () => {
//                 console.log("created again");
//             });
//         });
//     }
// };

// const addItems = (name: string, qty: number, category: string) => {
//     let res = (a: number, b: number) => {
//         return Math.floor(Math.random() * (a - b + 1) + b)
//     }

//     let items = {
//         id: res,
//         name,
//         qty,
//         time: moment(Date.now()).format("llll"),
//         category,
//     }
//     fs.readFile(storeEntry, (err: any, res: any) => {
//         if (err) throw err;
//         let data: any = JSON.parse(res);
//         console.log(data);
//         let result = data.data.push(items)

//         fs.writeFile(storeEntry, JSON.stringify(data), () => {
//             console.log("created");
            
//         })
//     })
// }

// createItems("secret bites", "biscuit", 10)
// addItems("Mary-land", 9, "cookies")


// console.clear();


// const addQty = (name: string, qty: number) => {
//     fs.readFile(storeEntry, (err: any, res: any) => {
//         if(err) throw err;
//         let data = JSON.parse(res);
//         let result = data.data.find((el: any) => {
//             return el.name === name;
//         })
//         result.qty = result.qty + qty

//         fs.writeFile(storeEntry, JSON.stringify(data), () => {
//             console.log(`${name} has been added`);
            
//         })
//     })
// }

// addQty("Fox-collection", 1)