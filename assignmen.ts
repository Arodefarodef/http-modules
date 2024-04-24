// import promptsync from "prompt-sync";

// const prompt = promptsync();

// setInterval(() => {
//    console.log(".");
        
//  }, 1000);



// let colorBall: string[] = ["red", "blue", "yellow","black"];
// let Ball = Math.floor(Math.random()* (a + b - 1) + b)

// const collBall = (a: number, b: number) => {

// }


// class assignment {
//     a: string;
//     constructor(a: string) {
//       this.a = a;
//     }
  
//     student(): any[] {
//       let rep = (a: number, b: number) => {
//         return Math.floor(Math.random() * (a - b + 1) + b);
//       };
//       return Array.from({ length: rep(5, 4) }, () => {
//         let score: number = rep(95, 45);
//         let sets: string[] = [
//           "setOne",
//           "setTwo",
//           "setThree",
//           "setFour",
//           "setFive",
//           "setSix",
//         ];
//         return {
//           set: sets[Math.floor(Math.random() + sets.length)],
//           score: score,
//         };
//       });
//     }
//     students = this.student();
//     smartest(): any[] {
//       let students = this.student();
//       return students.filter((el) => {
//         return (
//           el.score ===
//           Math.max(
//             ...students.map((el) => {
//               return el.score;
//             })
//           )
//         );
//       });
//     }
  
//     average() {
//       console.log(this.students);
      
//       return parseFloat(
//         this.students
//           .map((el) => {
//             return el.score;
//           })
//           .reduce((a, b) => {
//             return a + b;
//           })
//           .toFixed(2)
//       )/ this.students.length;
//     }
  
//     totalSet() {
//       return this.students.length;
//     }
//  Multiplication = (a: number) => {
//   for (let i = 1; i <= 12; i++) {
//     for (let j = 1; j<= 12; j++) {
//           if(j === a){
//            console.log(`${j} x ${i} = ${i * j}`);
//           }
//           }
//        }; 
// };
//  Addition = (a: number) => {
//     for (let i = 1; i <= 12; i++) {
//         for (let j = 1; j<= 12; j++) {
//           if(j === a){
//            console.log(`${j} + ${i} = ${i + j}`);
//           }
//           }
//        }; 
// };
//  Subtraction = (a: number) => {
//     for (let i = 1; i <= 12; i++) {
//         for (let j = 1; j<= 12; j++) {
//           if(j === a){
//            console.log(`${j} - ${i} = ${j - i}`);
//           }
//           }
//        }; 
// };
//  Division = (a: number) => {
//     for (let i = 1; i <= 12; i++) {
//         for (let j = 1; j<= 12; j++) {
//           if(j === a){
//            console.log(`${j} / ${i} = ${j / i}`);
//           }
//           }
//        }; 
// };


// colorBall = () => {
//     let color: string[] = ["Red", "Blue", "Black", "Indigo","Peach"];
//     let ball = Math.floor(Math.random() * (2 - 0 + 1) + 0);

//     let Balls: string = prompt("This is my choice: ");
//     while (color[ball] !== Balls) {
//         Balls = prompt("This is my choice: ");
//     };
//     if(color[ball] === Balls) {
//         return "correct";
//     } else {
//         return "Incorrect"
//     }
// };

// Wait = () => {
//     let waterIntake: number = 60;
//     let extraWater: any =prompt ("what is your water intake: ");
// while(true) {
//     if(extraWater > extraWater){
//         return "congratulation"
//     } else if(extraWater !== extraWater) {
//         let extraWaterr = waterIntake - extraWater
//         return `you have ${extraWaterr} cl`
//     } else {
//         let extraWaterre = extraWater - waterIntake 
//         return `exceeded amount of ${waterIntake} by ${extraWaterre}`
//     }
//     };
// }

// point = (): any =>  {
//     x: number;
//     y: number;
//     z: number

//     static distance (A: Point, B: Point, C: Point) {
//             let dx = B.x  - A.x - C.x;
//             let dy = B.y - A.y - C.y;
//             let dz = B.z - A.z - C.z;

//             return parseFloat
//             (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)).toFixed(2))
//     }
// };

//     const  pointA = new Point(3, 4, 2);
//     const  pointB = new Point(1, 5, 6);
//     const  pointC = new Point(7, 8, 0);

// };


// let inSchool = new assignment("clasess");
// inSchool.point();


// class point {
//             x: number;
//             y: number;
//             z: number
    
//             static distance (A: point, B: point, C: point) {
//                     let dx = B.x  - A.x - C.x;
//                     let dy = B.y - A.y - C.y;
//                     let dz = B.z - A.z - C.z;
    
//                     return parseFloat
//                     (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)).toFixed(2))
//             }
//     };
    
    // const  pointA = new point();
    // const  pointB = new point();
    // const  pointC = new point();
    
    // console.log(point.distance(pointA, pointB, pointC));
    
    // const water = (): any => {
    //     let waterIntake: number = 60;
    //     let extraWater: any =prompt ("what is your water intake: ");
    
    // if(waterIntake === extraWater){
    //     return "congratulation"
    // } else (waterIntake > extraWater); {
    //     return "You have exceeded the expected amount for the day"
    // } 
    // };
    // console.log(water()); 
    
    // let waterIntake: number = 60;
    //     let extraWater: any = prompt("what is your water intake: ")
    
    //     if(extraWater > waterIntake) {
    //         return "You have taken the expected ammount"
    //     } else if (extraWater < waterIntake) {
    //         let extraWater2 = waterIntake - extraWater
    //         return `you ${extraWater2}cl to reach ${waterIntake}`
    //     } else {
    //         let extraWater3 = extraWater - waterIntake 
    //         return `Maximum water level of ${waterIntake} has been exceeded by${extraWater3} `
    //     }
    // }