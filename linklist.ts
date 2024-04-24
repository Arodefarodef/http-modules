// class noded {
//     public data: number;
//     public next: noded | null

//     constructor(data: number){
//         this.data = data;
//         this.next = null;
//     }
// }

// class linked {
//     public head: noded | null;
//     public tail: noded | null;
//     public length: number;

//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0
//     }

//     push(data: number){
//         let node = new noded(data);


//         if(!this.head) {
//             this.head = node;
//             this.tail = this.head;
//         } else {
//             this.tail!.next = node;
//             this.tail = node;
//         }

//         this.length++;
//         return this  
//     }

//     pop(){
//         if(!this.head)
//         return undefined;


//         let current: noded = this.head;
//         let newTail: noded = current;

//         while(current.next){
//             newTail = current;
//             current = current.next
//         }

//         this.tail = newTail;
//         this.tail.next = null;

//         this.length--;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }
//     shift(){
//         if(!this.head) return undefined;

//         let current = this.head
//         this.head = current.next;


//         this.length--;
//         if(this.length === 0){
//             this.tail = null
//         }
//         return current;
//     }


//     unshift(valve: number){
//         let node = new noded(valve)

//         if(!this.head) {
//             this.head = node;
//             this.tail = this.head;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }

//         this.length ++;
//         return this
//     }

// }

// let Linked = new linked();

// Linked.shift()
// Linked.unshift(6)
// Linked.push(9)
// Linked.push(8)
// Linked.push(3)
// Linked.pop()

// console.log(Linked);

// class Nodes {
//     public value: number;
//     public next: Nodes | null;

//     constructor(value: number){
//         this.value = value;
//         this.next = null;
//     }
// }

// class link {
//     public head: Nodes | null;
//     public tail: Nodes | null;
//     public length: number

//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }


//      removeFromBack() {
//         if(!this.head) return undefined;

//         let current: any = this.head;
//         let newTail = current

//         while(current.next) {
//             newTail = current;
//             current = current.next
//         }

//         this.tail = newTail;
//         this.tail!.next = null;

//         this.length++;
//         if(this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }

//         return current
//     }

//     removeFromFront() {
//         if(!this.head) return undefined;

//         let current = this.head;
//         this.head = current.next;

//         this.length--;

//         if(this.length === 0) {
//             this.tail = null;
//         }
//         return current
//     }

//     addFromFront (value: number) {
//         let node = new Nodes(value);
//         if(!this.head) {
//             this.head = node;
//             this.tail = this.head
//         } else {
//             node.next = this.head
//             this.head = node
//         }

//         this.length++;
//         return this;
//     }

//     addFromBack(data: number){
//         let node = new Nodes(data)

//         if(!this.head) {
//             this.head = node;
//             this.tail = this.head;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }

//         this.length ++;
//         return this 
//     }

//     changeValue(index: number, value: number){
//         if(index < 0 || index > this.length) 
//         return undefined

//         let data = this.getFromIndex(index);

//         data.value = value;

//         return data;
//     }


//     getFromIndex(index: number){
//         if(index < 0 || index > this.length) 
//         return undefined

//         let count: number = 0;
//         let current: any = this.head;

//         while(count !== index){
//             current = current.next;
//             count++
//         }

//         return current
//     } 

//     insertDataInBetween(index: number, value: number) {
//         if(index < 0 || index > this.length) 
//         return false

//         if(index === 0) return !!this.addFromBack(value);
//         if(index === this.length) return !!this.addFromBack(value);

//         let node = new Nodes(value);

//         let prev = this.getFromIndex(index - 1);
//         let temp = prev.next;

//         prev.next = node;
//         node.next = temp;

//         this.length++;
//         return true;
//     }

//     removeDataInBetween(index: number) {
//         if(index < 0 || index > this.length) 
//         return false

//         // if(index === 0) return !!this.removeDataFromBack(value);
//         // if(index === this.length) return !!this.removeDataFromBack();


//         let prev = this.getFromIndex(index - 1);
//         let temp = prev.next;

//         prev.next = temp.next;
        
//         this.length--;
//         return true;
//     }

//     startFromBack(){
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;

//         let next: Nodes | null;
//         let prev: Nodes | null = null;

//         for(let i = 0; i < this.length; i++){
//             next = node!.next;
//             node!.next = prev;

//             prev = node;
//             node = next;
//         }

//         return this;    }

//   printList(){
//     let arr: number[] = [];
//     let current = this.head;

//     while(current) {
//         arr.push(current.value);
//         current = current.next;
//     }
//     return arr;
//   }
// }

// let Link = new link()

// console.clear();


// Link.addFromBack(4)
// Link.addFromBack(5)
// Link.addFromBack(8)
// Link.addFromBack(9)
// Link.addFromBack(2)
// Link.addFromBack(7)
// Link.addFromFront(7)
// Link.addFromFront(6)
// Link.addFromFront(9)
// Link.addFromFront(10)
// Link.addFromFront(90)
// // Link.removeFromFront()
// // Link.removeFromFront()
// // Link.removeFromFront()
// // Link.removeFromBack()
// // Link.removeFromBack()
// // Link.removeFromBack()

// Link.insertDataInBetween(3, 97)
// Link.removeDataInBetween(4)
// Link.changeValue(6, 5)
// Link.getFromIndex(5)
// console.log(Link.printList());

