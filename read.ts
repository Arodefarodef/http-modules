import http from "node:http"
import https from "node:https"
import path from "node:path";
import fs from "node:fs";
import { log } from "node:console";
import { v4 as uuid } from "uuid";

const port: number = 4455;

const app: http.Server<
typeof http.IncomingMessage,
typeof http.ServerResponse> = http.createServer((
    req: http.IncomingMessage,
    res: http.ServerResponse
) => {
    res.writeHead(200);

    let file = path.join(__dirname ,"student" , "student.json")

    let read = fs.createReadStream(file,{encoding: "utf-8"})

    if(req.url === "/api/read" && req.method === "GET") {
        read.on("data", (chunk) => {
            res.end(JSON.parse(JSON.stringify(chunk)))
        })
    } else if (req.url === "/api/post" && req.method === "POST"){
        let body = "";

        req.on("data", (chunk) => {
         body += chunk
        })

        req.on("end", () => {
            const { name,image } = JSON.parse(body);
            read.on("data", (chunk) => {
                const result = JSON.parse(JSON.parse(JSON.stringify(chunk)));
                const { data } = result

                const obj = {
                    id: uuid(),
                    name,
                    image,
                    data: Date.now()
                }

                data.push(obj);
                console.log(result);
                const write = fs.createWriteStream(file)
                write.write(JSON.stringify(result), () => {
                    res.end("done")
                })                
            })
        })
    }
    })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`
)})

console.clear();