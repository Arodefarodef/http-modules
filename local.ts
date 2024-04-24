const Funct = (a: string) => {
    return a;
};
console.log(Funct("Hello world"));

class Hello {
    password: string
    constructor(password: string) {
        this.password = password
    };
    myHello (a: number){
       if (a > this.password.length) {
         console.log(this.password.toUpperCase());
       } else if (a === 0) {
        console.log(this.password.toLowerCase());
       } else {
        console.log(this.password.replace(this.password[a], this.password[a].toUpperCase()));
       }
    };
};

// let hello = new Hello ("Fedora");
// console.log(hello.myHello(2));


class clear {
    name: string;
    age:number
    color: string

    constructor(name: string, age: number, color: string) {
        this.name = name
        this.age = age
        this.color = color
    }
     
    flear () {
        return this.name
    }

    liar () {
        return this.age
    }

    trut () {
        this.color
    }
};

  




export {Funct, Hello, clear}


