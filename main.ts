import path from "path";
import fs from "node:fs"


let user = path.join(__dirname, "data2", "user.txt")
let count = path.join(__dirname, "data2", "count.txt")
let fsCountCopy = path.join(__dirname, "data2", "fsCountCopy.txt")
let pipe = path.join(__dirname, "data2", "pipe.txt")


 let mypath = path.join(__dirname, "data2", "data.txt")
let path1 = path.join(__dirname, "data2", "data1.txt",)


// let x = fs.writeFile(mypath, "Hello i am dora", () => {
//     console.log("done");
    
// })

// let read = fs.createReadStream(mypath, {encoding: "utf-8", highWaterMark: 2})
// let write = fs.createWriteStream(path1)

// read.on("data", (chunk)=> {
//     console.log(chunk);

//     write.write(chunk)
    
// })

// const countWrite = (x: number) => {
//     fs.open(count, "w", (err: any, data: any) => {
//         if(err) throw err;

//         for(let i = 0; i < x; i++){
//             fs.write(data, ` ${i} `, () => {})
//         }

//         console.log("done writing");
        
//     })
// }
// countWrite(1000000)

// fs.readFile(count, "utf-8", (err: any, data: any) => {
//     if(err) throw err;
//     console.time("fs copy")

//     fs.writeFile(fsCountCopy, data, () => {
//         console.log("complete copy"); 
//         console.timeEnd("fs copy");
//     })
//     // console.log(data);
// })

// let readData = fs.createReadStream(count)
// let writeData = fs.createWriteStream(fsCountCopy)


// let writeDtapipe = fs.createWriteStream(pipe)



// console.time("stream copy");
// readData.on("data", (chunk) => {
//     // console.log(chunk);
    
//     writeData.write(chunk)
// })
// console.timeEnd("stream copy");



// console.clear();

// console.time("duplex copy");
// fs.createReadStream(count).pipe(fs.createWriteStream(pipe));
// console.timeEnd("duplex copy");
import { clear } from "console";

let myUser: any = [];

if(!fs.existsSync("user")) 
    fs.mkdir("user", () => {
        console.log("done");
    })

    let myPath = path.join(__dirname, "user", "user.json");

   
        Array.from({length: 1000}, () => {
            let id = 0
            return myUser.push({
                id: Math.floor(Math.random() * 50),
                name: `${ Math.floor(Math.random() * 1000)}`,
                matNo: Math.floor(Math.random() * 1000)
            })
        })

//         fs.writeFile(myPath, JSON.stringify(myUser), () => {
//             console.log("user copied");
            
//         })
// }

let read = fs.createReadStream(myPath, {encoding: "utf-8"})





clear();


import http from "node:http"
import { IncomingMessage, ServerResponse } from "http";

console.log(myUser);


const port: number = 2211
const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
        res.writeHead(200, {"content-Type": "application/json"})



         const data =
         [
            {"id": 1, name: "Fedora", matNo: Math.floor(Math.random() * 100)}
        ]

        let readpath = path.join(__dirname, "user", "user.json")

        // fs.readFile(readpath, "utf-8", (err: any, data: any) => {
        //     if(err) throw err;
        //     let readData = JSON.parse(JSON.stringify(data))

        //     res.write(readData)
        //     res.end();
        // })
        let read = fs.createReadStream(myPath, {encoding: "utf-8"})
        // let write = fs.createWriteStream(writepath)


        // read.on("data", (chunck: string | Buffer) => {
        //     res.write(JSON.parse(JSON.stringify(chunck)))
        //     res.end()
        //  })
        
        res.writeHead(200);
        let readHTMLpath = path.join(__dirname, "index", "index.html")    
        
        fs.readFile(readHTMLpath, (err: any, data: any) => {
            if(err) throw err;
            res.write(data)
            res.end();
        })
    }
);


server.listen(port, () => {
    console.log(`server is listening: ${port}`);
})

