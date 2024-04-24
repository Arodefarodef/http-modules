// import {} from "./deeper"

// import {Name, testfunction,  testfunction11} from "./deeper";

// testfunction();
// testfunction11();
// let X = "Fedora";
// let Y = "Dora";

// let MyName = new Name ("Dora");
// console.log(MyName.readName());


// console.log(module.exports);

// import {mySchool} from "./deeper";

// let myschool = new mySchool ("Flogged")
// console.log(myschool.myName());


// let x = "Good";
// let y = "Bad";

// console.log(x);

// const myClassCall = (cb: any) => {
//     return setTimeout(() => {
//         return cb(null, "this is a data")
//     }, 0);
// };

// myClassCall((err: Error, data: string) => {
//     if(err) {
//         console.log(err); 
//     }
//     else {
//         console.log(`${data} from ${name}`);  
//     }
// });

// //promise 

// const myPromise = new Promise ((resolve, reject) => {
//     if(true) {
//         const data = {message: "success", data: "dora"}
//         resolve("success");
//     } else {
//         reject("Failed")
//     }
// });

// interface Props {
//     message: string
//     data: string
// }

// myPromise.then(
//     (res: any) => {
//         console.log(`${res.message} from ${name}`);
//     }
// )
// .catch(err => console.error(err))
// .finally(() => {
//     console.log("clean up");
    
// });

// let name: string = "dora"

// const APIcall = (time: number) => {
//     return setTimeout(() => {
//         console.log(`reached DB ${time / 1000} sec`);
        
//     }, time)
// };



// const arrOfCalls = [
//     APIcall(1000),
//     APIcall(500),
//     APIcall(2000),
//     APIcall(700)
// ];
    
// const finalCall = Promise.all([
//     APIcall(1000),
//     APIcall(500),
//     APIcall(2000),
//     APIcall(700)
// ]);

// finalCall.then((res) => {
//     console.log(res);
// });

// setInterval(() => {
//     console.log(".");
    
// }, 1000);


const authFunction = () => {
    let email: string = "fedora@test.com"
    let password: string = "fedora@test.com"

    return new Promise ((resolve, reject) => {
        if (email === "fedora@test.com"){
            if (password === "fedora@test.com") {
                const data = {
                    message:"success",
                    status: 201,
                    data: {
                        email,
                        name: email.split("@")[0].charAt(0).toUpperCase() +
                        email.split("@")[0].slice(1),
                    }
                }
                resolve("processing");
            } else {
                reject ("email is incorrect")
            } 
    } else {
        reject ("email is incorrect")
    }
});
} 

const landingPage = (auth: any) => {
    console.log(`Welcome to the landing page ${auth.data.name}`);
};

// authFunction()
// .then((res: any) => {
//     console.log("processing Request...");
//     setTimeout(() => {
//         landingPage(res);
//     }, 4000);
// })
// .catch((err) => console.error(err));


const testAsync = async() => {
    try {
        const res = await authFunction();
        console.log("processing login...");
        setTimeout(() => {
            landingPage(res);
        }, 4000)
    } catch (error) {
        console.error(error);
    }
};


// const Reverse = (a: string) => {
//     return a.split('').reverse().join('')
// };
// console.log(Reverse("fedora"));


const revFunct = (str: string): string => {
    let rev: string[] = str.split("");
    let reve: string[] = rev.reverse();

    return reve.join("");
};

console.log(revFunct("alexander"));


// const revFunct1 = (a: string): string => {
//     let result: string = "";

//     for (let i = 0; i < a.length; i++) {
//         result = a[i] + result
//     }
//     return result;
// };


const revFunct1 = (a: string): string => {
    let result: string = "";

    for (let i of a) {
        // console.log(i);
        result = i + result 
    }
    return result;
};

//palindrium Test
const revFunct2 = (a: string): string => {
    let result: string = "";

    for (let i of a) {
        // console.log(i);
        result = i + result 
    }
    if (a.toLowerCase() === result) {
        return `True`
    } else {
        return `False`
    }
};

console.log(revFunct1("david"));
console.log(revFunct2("Madam"));

const rever = (b: number) => {
    let result: string = "";
    
    
    for(let i of b.toString()) {
        result = i + result
    }
    return Math.sign(b) * parseInt(result);
};

// console.log(rever(-57));

//FizzBuzz Test
// const print = () => {
//     for(let i = 0; i <= 100; i++) {
//         if (i % 15 === 0) {
//             console.log("FizzBuzz"); 
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i % 3 === 0){
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
// };
                        
//Tenary 
// const print = () => {
// for(let i = 0; i <= 100; i++) {
// {
// i % 15 === 0 ?console.log("FizzBuzz"):
// i % 5 === 0 ?console.log("Buzz"):
// i % 3 === 0 ?console.log("Fizz"):
// console.log(i);
// }
// }};


// {cond ? "" : ""}
// print();

// console.clear();

//Frequency Test
const anagram1 = (a: string): any => {
    let obj: any = {};
    let maxAnagram: string = "";
    let maxNum:number = 0;

    // for (let i = 0; i < a.length; i++) {
    //     if(obj[a[i]]) {
    //         obj[a[i]] = obj[a[i]] + 1 ;
    //     }else {
    //         obj[a[i]] = 1;
    //     }
    // }
    for (let i of a) {
        obj[i] = ++obj || 1;
    }
    for(let [value, key] of Object.entries(obj)) {
        let values: any = value;
        let keys: any = key

        if (keys > maxNum) {
            maxAnagram = value
            maxNum = keys
        }
    }
return `The most frequent alphabet is '${maxAnagram}' and it occured '${maxNum} times'`;
};

// console.log(anagram1("alexander"));
 
console.clear();


//Anagram test
const charAna = (str: string): any => {
    let obj: any = {};
    let main: string = str.toLowerCase().replace(/[\W]/g, "")

    for(let i of main) {
        if(obj[i]){
            obj[i]++;
        } else {
            obj[i] = 1
        }
    }

    return obj;
};

const anagram = (a: string, b: string): any => {
    let charA: any = charAna(a);
    let charB: any = charAna(b);

    if(Object.keys(charA).length !== Object.keys(charB).length) 
    return false;

    for (let i in charA) {
        if (charA[i] !== charB[i]) 
        return false;
    }

    return {charA, charB};
}
// console.log(charAna("dororo Orochiho"));
// console.log(anagram("Silent", "Listen"));
// console.log(anagram("RAIL! SAFETY!", "fairy tales"));
// console.log(anagram("hi there", "by there"));

//Heading Test
const headTest = (str: string): string => {
    let result: string[] = [];
    let result11: string = "";

    let word: string[] = str.split(" ")
    
    for(let i of word) {
        result.push(i[0].toUpperCase().concat(i.slice(1)));
        result11 = i[0].toUpperCase().concat(i.slice(1), " " + result11 + '') 
    }

    
    console.log(result11.trim());
    
    return result.join(" ");
}

console.log(headTest("this is the best day ever"));     



