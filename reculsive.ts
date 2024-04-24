const count  = (x:number) => {
   for (let i = x; i > 0; i-- ) {
    console.log(i);
    
    console.log("done");
    
   }

}

// console.log(count(10))
// 

const reCount = (x: number):number => {
    if(x === 1) return 1

    console.log(x);

    return reCount(x - 1)
    
}

// console.log(reCount(5));




// const swap = () => {
//     let arr = [1,2]

//     let swap = arr[0]
//      arr[0] = arr[1]
//      arr[1] = swap

//      return arr
// }

// console.log(swap());


// const wasp = () => {
//     let arr = [3, 4]

//     let wasp = arr[0]

//     arr[0] = arr[1]
//     arr[1] = wasp

//     return arr
// }

// console.log(wasp());

// let Swap = (arr: number) => {
//     let mySwap = [0]

//     arr[0] = arr[1]
//     arr[1] = mySwap

//     return arr
// }

// const arr = [5, 6]

// console.log(Swap(arr));

const swap = (arr: number[]) => {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {  
            console.log(arr, arr[j], arr[j + 1]);
            
                    if(arr[j] > arr [j + 1]){
                        let mySwap = arr[j]
            
                        arr[j] = arr[j + 1]
                        arr[j + 1] = mySwap
                    }
                }
        }
        return arr
        
    }

// const arr = [1, 5, 0, 4, 7]
// console.log(swap(arr));



const reSwap = (arr: Array<number>): Array<number> => {
    const swape = (arr: number[], idx: number, idx2: number) => {
        return ([arr[idx], arr[idx2]] = [arr[idx2], arr[idx]])
    } 

    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]) {
                swape(arr, j, j + 1)
            }
        }
    }
    
    return arr
}

// const arr = [1, 5, 0, 4, 7, 10, 99, 54, 3, 15, 2]
// console.log(reSwap(arr));

const selection = (arr: number[]) => {
    for(let i = arr.length - 1; i > 0; i--) {
        let lowest = i;
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[lowest]) {
                lowest = j
                }
            }
            // console.log(arr[lowest]);
            
                let mySwap = arr[i];
                arr[i] = arr[lowest] ;
                arr[lowest] = mySwap;
        }
        return arr
        
    }
    // const arr = [1, 3, 0, 4, 9, 7, 10, 8]
    // console.log(selection(arr));



    const reSelect = (arr: Array<number>): Array<number> => {
        const swape = (arr: number[], idx: number, idx2: number) => {
            return ([arr[idx], arr[idx2]] = [arr[idx2], arr[idx]])
        } 
    
        for(let i = arr.length - 1; i > 0; i--) {
            let lowest = i
            for(let j = 0; j < i; j++){
                if(arr[j] > arr[lowest]) {
                    lowest = j
                }
            }

            swape(arr, i, lowest)
        }
        
        return arr
    }

    const arr = [1, 3, 0, 4, 9, 7, 10, 8]
    console.log(reSelect(arr));


// console.clear();
// const swap = (arr: number[]) => {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr);
        
//         if(arr[i] > arr [i + 1]){
//             let mySwap = arr[i]

//             arr[i] = arr[i + 1]
//             arr[i + 1] = mySwap
//         }
//         return arr
        
//     }
// }

// const arr = [1, 5, 0, 4, 7]

// console.log(swap(arr));
