import fs from "node:fs"
import path from "node:path"
import https from "node:https"

import http, { IncomingMessage, ServerResponse } from "node:http"
import { Stream } from "node:stream";


// const port: number = 1234;

// const server: http.Server< 
// typeof http.IncomingMessage,
// typeof http.ServerResponse>
//  = http.createServer
//  ((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(200)

//     const filepath = path.join(__dirname, "html", "index.html");

//     // fs.readFile(filepath, (err: any, data: any) => {
//     //     if (err) throw err;

//     //     res.end(data)
//     // });


//     const read = fs.createReadStream(filepath);

//     read.on("data", (chunk) => {
//         res.end(chunk);
//     })
//  }
// );  


// server.listen(port, () => {
//     console.log("server connected");i
    
// })
console.clear();

const port: number = 1234;

const server: http.Server< 
typeof http.IncomingMessage,
typeof http.ServerResponse>
 = http.createServer
 ((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200)

    http.get(
        {
            host: "api.github.com",
            path: "/users/petxcode",
            method: "GET",
            headers: {
                "user-agent": "node.js",
            },
        },
        (data) => {
            let body = "";

            data.on("data", (chunk) => {
                body += chunk.tostring();
            });

            data.on("end", () => {
                let pathFile = path.join(__dirname, "git", "dora.json");

                fs.writeFile(pathFile, JSON.stringify(JSON.parse(body)), () => {
                    let result: any = JSON.parse(body);

                    const img = new Stream.Transform();

                    https.get(result.avatar_url, (data) => {
                        data.on("data", (chunk) => {
                            img.push(chunk)
                        });

                        data.on("end", () => {
                            console.log(img);
                            let pathFile = path.join(__dirname, "git", "dora.jpg");

                            fs.writeFile(pathFile, img.read(), () => {
                                res.end("done")
                            })
                            
                        })
                    })
                })
            })
        }
    )

 }
);  


server.listen(port, () => {
    console.log("server connected");
    
})