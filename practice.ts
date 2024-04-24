import {log, time, timeEnd} from "console"

// const mapping = (a: number[])=>{
// return a.map((el=>{
//     return el * 2;
// }))
// };
// console.log(mapping([1,3,4,5,6]));



// const test = (a: number, b:number) => {
//     return Math.floor(Math.random()* (a - b + 1) + b)
// };

// console.log(test(10,5));
 
// class myClass {
//    private name: string; 
//     age: number;

//     constructor (name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     set changeName(value: string){
//         this.name = value
//       }

// }

// let myclass = new myClass ("boy", 10);
// let class = new myClass("Dora", 10);
// console.log(class);
// console.log(class.changeName = "good");


        // console.clear()
// class mySchool {
//     car: string;
//     money: number;

//     constructor (car: string, money: number) {
//         this.car = car;
//         this.money = money
//     }
//     carname (a: number){
//         return `${this.car[a]}`;
//     }

// }

// let myschool = new mySchool ("toyota", 10000);
// console.log(myschool);
// console.log(myschool.carname(3));

// class myStudent {
//     name: string;
//     age: number;
//     school: string;
//     gender: string;

//     constructor (name: string ,age: number, school: string, gender: string){
//         this.name = name;
//         this.age = age;
//         this.school = school;
//         this.gender = gender;
//     }
//     studentname(a: number) {
//         return `${this.name[a]}`;
//     }
// }

// let mystudent = new myStudent ("Fedora", 18, "fine", "male")
// console.log(mystudent);
// console.log(mystudent.studentname(2));


// class mySystem {
//     name: string;
//     age: number;
//     school: string;
//     gender: string;

//     constructor (name: string, age: number, school: string, gender: string) {
//         this.name = name,
//         this.age = age,
//         this.school = school,
//         this.gender = gender
//     }
//     systemName(){
//         return`${this.gender}`;
//     }
//     nameM
// }

// let mysystem = new mySystem ("Dora", 14, "male", "good")
// console.log(mysystem.systemName());

// console.clear();

// class myStr {
//     name: string;
//     brand: string;
//     amount: number;
//     color: string;
//     constructor (name: string, brand: string, amount: number, color: string){
//         this.name = name,
//         this.brand = brand,
//         this.amount = amount,
//         this.color = color,
//     }
   
// }
// let mystr = new myStr ("ford", "ferarri", 10000, "black")
// console.log(mystr);



// class Uni {
//     unisch: string;
//     unidept: string[];

//     constructor (name: string, department: string[],) {
//         this.unisch = name,
//         this.unidept = department
//     }
//     addunidetp(a: string){
//         return this.unidept.push(a.charAt(0).toUpperCase() + a.slice(1)
//         .toLowerCase())
//     }

//     deleteunidept(deleteName: string){
//         let index = this.unidept.indexOf(deleteName);
//         return this.unidept.splice(index, 1)
//     }
// }

// let uni = new Uni ("Delsu", ["Medcine", "Masscom", "Farming"]);
// uni.addunidetp("english");
// uni.addunidetp("chemistry");
// uni.addunidetp("biology");
// uni.addunidetp("LITERATURE");
// // uni.deleteunidept("masscom");
// // console.log(uni);


// class Employee {
//     name: string;
//     salary: number;

//     constructor(name:string, salary:number){
//         this.name = name,
//         this.salary = salary
//     }
//     calcsal(){
//         return this.salary * 12
//     }
// }

// let newemployee = new Employee ("Joy", 500);
// // console.log(newemployee.calcsal());


// class Manager extends Employee {
//     department: string;

//    constructor (department: string, name: string, salary: number){
//     super(name,salary,)
//     this.department = department
//    }

//    calcsal(): number {
//        return this.salary + this.salary * 0.1
//    }
// }

// const manager = new Manager ('manager-department','manager',500)
// // console.log(manager.calcsal());

// class Clean extends Employee {
//     department: string

//     constructor(department: string, name: string, salary: number){
//         super(name, salary)
//         this.department = department
//     }
//     calcsal(){
//         return this.salary + this.salary / 2
//     }
// }

// let clean = new Clean ("maneger-department", "manager", 500);
// console.log(clean.calcsal());

// console.clear()

// let cool = (a:number, b: number) => {
//     return a * b
// }
// console.log(cool(2,3));


// const see1 = (a: number, b: number): number => {
//     return Math.floor(Math.random()* (a - b + 1) + b);
// }
// console.log(see1(15,10));


// console.clear();

//        super(name, age, gender);
//        this.complexsion = complexsion
//        this.clothColor = clothColor
//        }

//         FlogCane(){
//         return `My name is ${this.name} and i am ${this.age}, i am a ${this.gender}
//         i am ${this.complexsion} in complexsion. I have a ${this.clothColor} shirt.`
//         }
// }

// let myflog = new MyFlog("Emma", "dark", "boy", 7, "red");
// let mycane = new Mycane("Emma", 7, "boy");
// console.log(myflog.FlogCane());



// console.log(mycane.FlogCane())

// class Animal{
//     constructor(public name: string){}
//     public speak(): void{
//         console.log(`${this.name} says hello`)
//     }
// }

// class Dog extends Animal{
//     constructor(public name: string){super(name)}
//     public speak():void{
//         console.log(`Woof!


// const funct = (a: number[]) => {
//     for (let i = 0; i < a.length; i++) {
//        console.log (a[i]);
// }
// };

// const funct2 = (a: number) => {
//     for (let i = 1; i <= a; i++) {
//        console.log (i);
// }
// };

// funct([1,2,3,5]);
// funct2(4);


// console.clear();



// const functRev = (a: string): any => {
//     let fun: string[] = a.split ("");
//     let rev: string[] = fun.reverse()

//     return rev.join("")
// }

// console.log(functRev("fedora"));



// const funrev = (b: string): any => {
//     let reve: string[] = b.split("")
//     let tel: string[] = reve.reverse()

//     return tel.join ("").toUpperCase() 
// };

// console.log(funrev("emma"));


// const  myFunct = (c: string): any => {
//     let my: string[] = c.split("");
//     let funct: string[] = my.reverse();

//     return funct.join("");
// };

// console.log(myFunct("damien"));



// const comstant = (e: string): any => {
//     let come: string[] = e.split("");
//     let one: string[] = come.reverse()

//     return one.join('')
// };

// console.log(comstant("yi yi"));


// const expert = (f: string): any => {
//     let pert: string[] = f.split("");
//     let pact: string[] = pert.reverse();

//     return pact.join("");
// };


// console.log(expert("daddy"));

// const sorry = (z: string): any => {
//     let clean: string[] = z.split("");
//     let lean: string[] = clean.reverse();

//     return lean.join("");
// };

// console.log(sorry("everest"));


// const robo = (s: string): any => {
//     let bobo: string[] = s.split("");
//     let obob: string[] = bobo.reverse();

//     return obob.join("")
// };

// console.log(robo("praise"));


// const revFunct1 = (a: string): string => {
//     let result: string = "";

//     for (let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result;
// };

// console.log(revFunct1("string"));

// const revFuncte = (a: string): string => {
//     let result: string = "";

//     for (let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }

//     return result;
// };

// console.log(revFuncte("amen"));

// const reve = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result;
// };
// console.log(reve("pork"));

// const firm = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result
// };

// console.log(firm("meat"));

// const away = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result
// };

// console.log(away("message"));

// const bird = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result
// };

// console.log(bird("onlyoneof"));

// const pic = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result
// };

// console.log(pic("catch"));

// const meat = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }

//     return result
// };

// console.log(meat("anything"));

// const con = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result
// };
// console.log(con("speach"));

// const first = (a: string): string => {
//     let result: string = "";

//     for(let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }

//     return result
// };

// console.log(first("place"));


// const second = (a: string): string => {
//     let result: string ="";

//     for(let i of a) {
//         result = i + result
//     }

//     if (a.toLowerCase() === result) {
//          return `True`;
         
//     } else {
//        return `False`
       
//     }
// };

// console.log(second("rever"));
// console.log(second("reverse"));


// const third = (a: string): string => {
//     let result: string = "";

//     for(let i of a) {
//         result = i + result
//     }

//     if (a.toUpperCase() === result) {
//         return `OK`
//     } else {
//         return`Null`
//     }
// };

// console.log(third("rain"));
// console.log(third("pain"));

// const fourth = (a: number) => {
//     let result: string = '';

//     for(let i of a.toString()){
//         result = i + result
//     }

//     return Math.sign(a) * parseInt(result)
// };
// console.log(fourth(-109));




// const sixth = (a: number) => {
//     let result: string = "";

//     for(let i of a.toString()) {
//         result = i + result
//     }
//     return Math.sign(a) * parseInt(result)
// };

// console.log(sixth(-345));



// const seventh = (a: number) => {
//     let result: string = "";

//     for(let i of a.toString()) {
//         result = i + result
//     }
//     return Math.sign(a) * parseInt(result)
// };

// console.log(seventh(1234567891));

//Fedora =====> arodef
// const revStr = (a: string): string => {
//     //Array Method
//     let result: string = "";

//     let strRev = a.split("").reverse();

//     return strRev.join("");
// };

// console.log(revStr("Fedora"));


// const revStr1 = (a: string): any => {
//     //Array Method
//    let strValue: string[] = a.split("")
//    let result: string = "";

//    for(let i of a) {
//     let popOff: string | undefined = strValue.pop()
//     result = result.concat(popOff!); 
//    }

//    return result;
// };

// console.log(revStr("Fedoraiop"));


// const revStr2 = (a: string): any => {
//     //Array Method
//     let result: string = "";
    
//     for(let i of a) {
//         result = i + result
//     }
    
//     return result;
// };

// console.clear();
// console.log(revStr2("Fedorah"));


// const fifth = (a: number) => {
//     let result: string = "";

//     for(let i of a.toString()) {
//         result = i + result 
//     }
//     return Math.sign(a) * parseInt(result)
// };

// // console.log(fifth(354));


// const capitalized = (str: string): string => {
//     let result: string = "";

//     let wrd = str.slice(0, 1).toUpperCase().concat(str.slice(1));

//     return wrd
// }

// console.log(capitalized("codelab skillhub"));


// const capitalizedText = (str: string): any => {
//     let result: string[] = [];

//    let wrd: string[] = str.split(" ");

//    for(let i of wrd){
//     result.push(i.charAt(0).toUpperCase().concat(i.slice(1)));
    
//    }

//     return result.join(" ");
// };

// const vowelLetter = (a: 


// const vowelLetter2 = (a: string): number => {
//     let counter: number = 0;

//     let valve: number = a.match(/[aeiou]/g)!?.length;
    
    
//     return valve !== undefined ? valve : 0;
//  }

// console.log(vowelLetter2("codelab skillhub"));


// const vowelLetter3 = (a: string): boolean => {
//     let valve: number = a.match(/[aeiou]/g)!?.length;

//     if (valve === undefined) return false;


//     return true;
//  }

// console.log(vowelLetter3("HTML"));


// const vowelLetter4 = (a: string): boolean => {
//     let valve: number = a.match(/[aeiou]/g)!?.length;
   

//     if (valve === undefined) return false;

//     return true;
//  }

// // console.log(vowelLetter3("apple"));


// const vowelLetter5 = (str: string): boolean => {
//     let vlw: string[] = ["a", "e", "i", "o", "u"];
//     let splitWord  = str.split(" ");
//     console.log(splitWord);

//     for(let i of splitWord) {
//         if(vlw.includes(i.charAt(0))) {
//             return true;
//         }
//     }

//     return false
    
// };

// console.log(vowelLetter5("my name is fedora"));



// const classes = (a: string): string => {
//     let strValue: string = a.split(" ")[1].split("")[0]
    
//     let value = parseInt(strValue);
//     value++

//     return a.replace(`${strValue}`, `${value}`);
    
// };
// const classes1 = (a: string): string => {
//     let value: string = (a.match(/\d+/)![0]);
//     let counter: number = parseInt(value);
//     counter++;
   
   
//     return a.replace(`${value}`, `${counter}`);
// };

// console.log(classes1("jss 200A"));


//Chunking algorithm

// const chunkData = (arr: number[], numb: number): Array<Array<number>> => {
//     let result: Array<Array<number>> = [];
//     let index: number = 0;

//     while(index < arr.length){
//         result.push(arr.slice(index, numb + index));
//         index += numb
//     }

    

//     return result
// }

// console.log(chunkData([4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6], 4));



// const fn = (numb: number): void => {
//    for(let i = 0; i < numb; i++){
//     let value: string = "*";
//     for(let x = 0; x < numb; x++){
//         if(x < i){
//             value += "*"
//         } else {
//             value += " ";
//         }
//     }
//     console.log(value);
//    }  
// };


// const fn1 = (numbi: number): void => {
//     let path: number = 2 * numbi - 1
//     let mid: number = Math.floor(path / 2);

//     for(let i = 0; i < numbi; i++) {
//         let value: string = "";
//         for(let x = 0; x < path; x++) {
//             if(x >= mid - i && x <= mid + i){
//                 value += "*";
//             } else {
//                 value += " ";
//             }
//         }
//         console.log(value);
//     }
    
// };
// fn(4)
// console.log();
// fn1(10);


const fn = (a: number[], b: number): boolean => {
        if(a.length % 2 !== 0) {
                return false;
        } else { 
                let split = a.slice(0, 2)
                console.log(split);
                console.log(a.slice(2, 4));
                console.log(a.slice(4, 6));
                console.log(a.slice(6, 8)); 

                let startPoint = 0;
                let endPoint: number = 0;

                let store: any = [];
                while(endPoint < a.length) {
                        startPoint = endPoint
                        endPoint += 2 
                        store.push(a.slice(startPoint, endPoint));
                        console.log(startPoint, endPoint);      
                }
                for(let i of store) {
                        if(i.reduce((ab: number, ba: number) => ab + ba) !== b)
                        return false
                }
                return true;
        }
};

// console.clear();
// console.log(fn([2, 2, 1, 3, 3, 1, 3, 1], 4));

// Data Structure
//data structure makes code easy to access and retrive the data.
//scale for coding is called: Big O notation. This is used to know if you
//are writing a good or a bad code. Things to look out for when using Big O
//notation.

const sumUpCount = (numb: number): number => {
        let result: number = 0;
        for(let i = 0; i <= numb; i++){
                result = result + i;
        }
        return result;
};


const sumMeUp = (numb: number): number => {
        return(numb * (numb + 1)) / 2
};

     
const sumMeUp1 = (numb: number): number => {
      let result: number[] = [];
      for(let i = 1; i <= numb; i++){
        result.push(i);
      }
      return result.reduce((a: number, b: number) => a + b);
};


//O(n)
// const tryAdd = (arr: number[]): number[] => {
//         let arrNew: number[] = []
// }


// console.log(sumMeUp(5));
// console.log(sumMeUp1(5));
// console.log(sumUpCount(5));


// const maxcheck = (numb: number): void => {
//         for(let i = 0; i <= Math.max(10, numb); i++){
//                 console.log(i);
//         }
// };`  
// const mincheck = (numb: number): void => {
//         for(let i = 0; i <= Math.min(10, numb); i++){
//                 console.log(i);
//         }
// };
// maxcheck(20);
// mincheck(4);
// console.clear();

// time("maxCheck");
// maxcheck(20);=
// timeEnd("mincheck");


// time("start maxCheck");
// mincheck(20);
// timeEnd("start maxcheck");

// class point {
//         x: number;
//         y: number;
//         z: number


//         constructor(x: number, y: number, z: number){
//                 this.x = x
//                 this.y = y
//                 this.z = z
//         }

//         static distance (A: point, B: point, C: point) {
//                 let dx = B.x  - A.x - C.x;
//                 let dy = B.y - A.y - C.y;
//                 let dz = B.z - A.z - C.z;

//                 return parseFloat
//                 (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)).toFixed(2))
//         }
// };

// const  pointA = new point(4, 3, 5);
// const  pointB = new point(1, 4, 3);
// const  pointC = new point(8, 4, 4);

// console.log(point.distance(pointA, pointB, pointC));




// const str=(str:string):string=>{
// let result:string=" "
// let word: string.toUppercase().concat(str.slice(1,0))

// }



const rev = (str: string): string => {
    let result: string = ""
    
    for(let i = 0; i < str.length; i++){
        result = str[i] + result;
    }
    
    return result;
};

console.log(rev("james"));


//TIME COMPLEXITY IN RELATIONS TO ARRAY AND OBJECTS
//For Array{} Access O(1), Remove O(1), search O(n)
//For Objects[] Access O(1), Remove O(1), search O(n)

interface iProps {
        name: string;
        score: number;
        age?: number
}

let obj: iProps = {
        name: "dora",
        score: 50,
}

console.log(obj.age = 12); 

//

 



















