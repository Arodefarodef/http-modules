// import promptsync from "prompt-sync";

// const prompt = promptsync();
// let name: string = prompt("what is your name");
// console.log();

// console.log(`Hello ${name}... Good to have you today`);

// let a = prompt("pass in your first number: ");
// let b = prompt("pass in your second number: ");

// const addup = (a: number, b: number) => {
//     return a + b;
// };

// console.log(addup(parseInt(a), parseInt(b)));

// const even = (input: number, divisor: number) => {  
//  for (let i = 0; i <= input; i++) {
//     if (i % divisor === 0) {
//         console.log(i);
//     }   
// }
// };

// let a = parseInt(prompt("pass in your printed value"));
// let b = parseInt(prompt("pass in your divisor"));
// even (a, b);


// console.clear();


// for (let i = 1; i < 100; i++){
//     // console.log(i);
//     if (i === 7) {
//         console.log("skipped");
//         break;
//     } else {
//         console.log(i);
//     }
// }

// console.clear();


// let guessNumber: number = 0
// let luckyNumber: number = 6;

// let a: number = 0;
// while  (luckyNumber !== guessNumber){
//   guessNumber = parseInt(prompt("What is on my mind"));
// }

// const rand = (max: number, min: number) => {
//     return Math.floor(Math.random() * (max - min + 1)+ min);
// };

// const box: string[] = ["Red", "Yellow", "Blue"];
// const choice: number = rand (2, 0);
// console.log("reading",  box[choice]);
// let myChioce: string = prompt("This is my choice: ");

// while(true){
//     let comp = box[rand(2, 0)];
//     console.log(comp);
//     myChioce = prompt("This is my choice: ")
//     myChioce = prompt("Try again: ");

//     if (box[choice] === myChioce) {
//         console.log("correct");
// } else {
//     console.log("wrong");
// }
// };

// interface defined {
//     name: string
// } 
// Math.random
// let res = (a:number,b:number): number  =>{
//         return Math.floor(Math.random() * (a - b + 1) + b);
//     };
// const students = (a: string[]) => {
//     return res()
// }
// console.log(students(['terry','mike']));


// class Animal {
//     name: string

//     constructor(name: string){
//         this.name = name;
//     }

//     voice() {
//         console.log("Print Tribe"); 
//     }
// };

// class Cat extends Animal {
//     constructor (name: string){
//         super(name);
//     }

//     voice(){
//         console.log(`Meow Meow`);
        
//     }
// };

// class Dog extends Animal {
//     constructor (name: string){
//         super(name);
//     }

//     voice (){
//         console.log(`Woof Woof`);
        
//     }
// };

// let dog = new Dog ('Tom');
// let cat = new Cat ('Garfield');

// const getvoice = (animal: Animal) => {
//     return animal.voice();
// };

// getvoice(dog);
// getvoice(cat);

// // console.clear();

// class car {
//     name: string

//     constructor(name: string) {
//         this.name = name;
//     }
//     getSpeed() {
//         console.log("speed");
//     }
// }


// class volve extends car {
//     constructor(name: string) {
//         super(name)
//     }
//     getSpeed(): void {
//         console.log("100m/s");
//     }
// }

// class Benz extends car {
//     constructor(name: string) {
//        super(name)
//     }
//     getSpeed() {
//         console.log(`The speed of ${this.name} is 200m/s`);
//     }
// }

// let benz = new Benz("benz");
// let volvE = new volve("volvo");

// const getcarspeed = (car: car) => {
//     return car.getSpeed();
// };


// class Point {
//     x: number;
//     y: number;

//     constructor(x:number, y:number){
//         this.x = x;
//         this.y = y
//     }

//     static distance (A: Point, B: Point){
//         let dx = B.x  - A.x;
//         let dy = B.y - A.y;
//         return parseFloat 
//         (Math.sqrt(Math.pow(dx, 2 ) + Math.pow(dy , 2)).toFixed(2));
//     }
// }

// const  pointA = new Point(4,3);
// const  pointB = new Point(1,2);

// console.log(Point.distance(pointA, pointB));



// class school {
//     a: string

//     constructor(a: string){
//         this.a = a
//     }

//     showtotalscore(): any{
//         let res = (a: number, b: number) => {
//             return Math.floor(Math.random()* (a + b - 1) + b);
//         }
//         return Array.from({length: res(5, 2)}), () => {
//             let score: number = res(100, 50);
//             let sets: string[] = [
//                 'Set one',
//                 'Set two',
//                 'Set three',
//                 'Set four'
//             ];
//             return {
//                 Sets: sets[Math.floor(Math.random() * sets.length)],
//                 score: score,
// }
// }}};



// console.clear();


// class studentScore {
//     numScore: number
//     score: number[]

//     constructor(numScore: number){
//         this.numScore = numScore;
//         this.score = Array.from({length: numScore},() => 
//         Math.floor(Math.random() * 101));
//     }

//     showTotalScore(){
//         const totalscore: number = this.score.reduce((score) => 
//           score, 0);
//           console.log(`The total score of the class is: ${totalscore}`);
          
//     }
// }




// for (let i = 0; i < 2; i++){
// for (let j = 1; j < 13; j++){
//     if (i === j) {
//         console.log("equal");
//         break;
//     }else {
//         console.log(i, j);
//     }   
// }
// };





    // for (let i = 1; i <= 7; i++) {
    //     for (let j = 1; j<= 12; j++) {
    //             console.log(`${i} x ${j} = ${i * j}`);
    //    }
    // }; 


// console.clear();

//     class School {
//         a: string;
//         constructor(a: string) {
//           this.a = a;
//         }
      
//         student(): any[] {
//           let rep = (a: number, b: number) => {
//             return Math.floor(Math.random() * (a - b + 1) + b);
//           };
//           return Array.from({ length: rep(5, 4) }, () => {
//             let score: number = rep(95, 45);
//             let sets: string[] = [
//               "setOne",
//               "setTwo",
//               "setThree",
//               "setFour",
//               "setFive",
//               "setSix",
//             ];
//             return {
//               set: sets[Math.floor(Math.random() * sets.length)],
//               score: score,
//             };
//           });
//         }
//         students = this.student();
//         smarteststud(): any[] {
//           let students = this.student();
//           return students.filter((el) => {
//             return (
//               el.score ===
//               Math.max(
//                 ...students.map((el) => {
//                   return el.score;
//                 })
//               )
//             );
//           });
//         }
      
//         average() {
//           return parseFloat(
//             this.students
//               .map((el) => {
//                 return el.score;
//               })
//               .reduce((a, b) => {
//                 return a + b / this.students.length;
//               })
//               .toFixed(2)
//           );
//         }
      
//         totalSet() {
//           return this.students.length;
//         }
//       }
//       let inSchool = new School("clasess");
//       console.log(inSchool.student());

// class foll {
//     a: string

//     constructor(a: string){
//         this.a = a;
//     }
//     fool(): any[]{
//         let fool = (a: number, b: number) => {
//             return Math.floor(Math.random() * (a - b + 1) + b);
//         }
//         return Array.from({length rat(5, 4)}, () => {
            
//         })
//     }
// }


// export const testfunction = () => {
//   console.log("Awesome...!");
  
// }

// export const testfunction11 = () => {
//   console.log("Awesome Good boy...!");
  
// }
// export { testfunction, testfunction11};
// export default{ testfunction, testfunction11};



// export class Name {
   

//   constructor(public name: string) {
//     this.name
//   }

//   readName() {
//     return this.name
    
//   }
// }

// export let mySecret = "12345";


// export class mySchool {

//   constructor(public name: string){
//     this.name
//   }

  
//   myName() {
//     return this.name
//   }

// }


