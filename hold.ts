import fs from "node:fs"
import path from "node:path"
import http, { IncomingMessage, ServerResponse } from "node:http"


const port: number = 2233;

const server: http.Server< 
typeof http.IncomingMessage,
typeof http.ServerResponse>
 = http.createServer
 ((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200)


    const filepath = path.join(__dirname, "index", "index.html")

    const read = fs.createReadStream(filepath)

    read.on("data", (chunk) => {
        res.end(chunk)
    })
 })    



server.listen(port, () => {
    console.log("done");
    
 })