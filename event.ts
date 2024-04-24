import EventEmitter from "events";
import path from "path";
import fs from "node:fs"
import fspromise from "node:fs/promises"
import { json } from "stream/consumers";
import moment from "moment";
import { readFile } from "fs";
import MyEvent from "./new";
import { fstat } from "fs";


const event = new MyEvent()
// event("rat", 4)

// console.log(event);


// event.on("click", (res) => {
//     console.log(res);  
// })

// const items = {
//     name: "jfkl",
//     qty: 88
// }


// event.emit("click", items)


// const dataDrive = (...arg: any) => {
//     if(arg.length < 2) return undefined;

//     return Math.max(...arg)
// }

// console.log(dataDrive(0, 1, 6));

// let pathNotice = path.join(__dirname,"event", "studentNotice.json")

// const myEvent = new MyEvent;

// myEvent.on("name", (res) => {
//     console.log(res);
// })

// myEvent.on("changescore", (res) =>{
// fs.wri
// }
// )

// let story = path.join(__dirname, "store", "studentEntry.json")
// let storeEntry = path.join(__dirname, "store")

// let Entries = {
//     businessName: "",
//     dataRecorded: "",
//     CEO: "",
//     Address: "",
//     Contact: "",
//     email: "",
//     Facebook: "",
//     Data: "",
//     category: ""
// };

// const createItems = (name: string, category: string, qty: number) => {
//     let items = {
//         name,
//         qty,
//         time: moment(Date.now()).format("llll"),
//         category,
//     }

//     if(!fs.existsSync(storeEntry)) {
//         fs.mkdirSync(storeEntry);

//         let arr:{}[] = [];
//         arr.push(Entries);
    
//         fs.writeFile(storeEntry, JSON.stringify(arr), () => {
//             console.log("done");            
//         })
//     } else {
//         fs.readFile(storeEntry, (err: any, data: any) => {
//             if(err) throw err;
//             let story = JSON.parse(data);
//             story.data.push(items)
            
//             console.log(story);
//             fs.writeFile(storeEntry, JSON.stringify(story), () => {
//                 console.log("created again");
                
//             })
//         })
//     }
// }


// createItems("pop", "candy", 7)