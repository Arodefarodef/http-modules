console.clear();

class Nodes {
    public value: number
    public next: Nodes | null

    constructor(value: number){
        this.value = value
        this.next = null
    }
}

class Queue {
    public first: Nodes | null
    public last: Nodes | null
    public length: number

    constructor(){ 
        this.first = null
        this.last = null
        this.length = 0
    }

    push(value: number){
        let nodes = new Nodes(value)
        if(!this.first){
            this.first = nodes
            this.last = nodes
        } else { 
            this.last!.next = nodes
            this.last = nodes
        }
        return this.length++;
    }

    pop(){
        if(!this.first) return false;

        let prev = this.first

        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.length--;
        return prev.value
    }

    printList(){
            let arr: number[] = [];
            let current = this.first;
        
            while(current) {
                
                arr.push(current.value);
                current = current.next;
            }
            return arr;
          }
}

let stack = new Queue
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(10)
stack.push(40)
stack.push(46)
stack.pop()
stack.pop()
stack.pop()




console.log(stack);
console.log(stack.printList());
