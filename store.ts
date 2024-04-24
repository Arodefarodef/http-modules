import fs from "node:fs"
import path from "node:path"
import https from "node:https"

import http, { IncomingMessage, ServerResponse } from "node:http"


const port: number = 4455;

const URL: string = "https://fakestoreapi.com/products"

const server: http.Server< 
typeof http.IncomingMessage,
typeof http.ServerResponse>
 = http.createServer
 ((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200)

    const storeData = path.join(__dirname, "store", "store.json")
    

    if(req.url === "/api/capture" && req.method === "GET") {
        
    https.get(URL, (data) => {
        let body = ""

        data.on("data", (chunk) => {
            body += chunk.toString();
        })

        data.on("end", () => {
            
            fs.writeFile(storeData, JSON.stringify(JSON.parse(body)), () => {
                res.end("good")
            })
        })
    })

    }

    // read data from local strorage
//     if(req.url === "api/store" && req.method === "GET") {
//         const read = fs.createReadStream(storeData);

//         read.on("data", (chunk) => {
//             res.end(chunk)
//         })
//     } else {
//         res.end("copied");
//     }
//  })


//  read single data from local storage
 
 if(req.url === "/api/store/" && req.method === "GET") {
    const read = fs.createReadStream(storeData);

    read.on("data", (chunk) => {
        res.end(chunk)
    })
 } else {
    const URLData: string = req.url!;
    let num: any = parseInt(URLData?.split("store")[1]?.split("/")[1]);
    const read = fs.createReadStream(storeData);

    read.on("data", (chunk) =>{
        const readData = JSON.parse(chunk.toString());
        console.log(num);
        const findData = readData?.find((el: any) => {
            return el.id === parseInt(num)
        })
        res.end(JSON.stringify(findData))
        
    })

 }
  
})


 server.listen(port, () => {
    console.log("done");
    
 })