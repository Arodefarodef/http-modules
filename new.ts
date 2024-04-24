import EventEmitter from "events";
import fs from "node:fs"
import { json } from "node:stream/consumers";
import path from "path";

let pathEntry = path.join(__dirname, "path");
let pathFile = path.join(__dirname, "path", "pathFile.json");
let pathNotice = path.join(__dirname, "path", "pathNotice.json");


class MyEvent extends EventEmitter{
    displayName = (name: string) => {
        console.log("reading: ", name);
        this.emit("name", `my name is ${name}`)
    }

    createStudent(name: String, score: number){
        let student = {
            name,
            score,
        };
        if(!fs.existsSync(pathFile)){
            fs.mkdirSync(pathFile)

            fs.writeFile(pathEntry,JSON.stringify([student]), () => {
                console.log("success");
            })
        } else {
            fs.readFile(pathEntry, (err: any, res: any) => {
                if (err) throw err;
                let ReadData = JSON.parse(res);
                ReadData.push(student)

                console.log(ReadData);
                fs.writeFile(pathEntry, JSON.stringify(ReadData), () => {
                    console.log("Entered")
                })
                
            })
        }
    }
    updateScore(name: string, score: number){
        fs.readFile(pathEntry, (err: any, res: any) => {
            if(err) throw err;

            let readData = JSON.parse(res);
            let updated = readData.find((el: any) => {
                return el.name === name;
            })

            updated.score = score;

            this.emit("changeScore", updated);

            fs.writeFile(pathEntry, JSON.stringify(readData), () => {
                console.log("score");
            })
        })
    }
}




export default MyEvent;