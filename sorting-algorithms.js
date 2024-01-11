let nombres = [
    "John",
    "Catalina",
    "Nicolas",
    "Carlos Javier",
    "Carlos Eduardo",
    "Sebastian",
    "Damian",
    "Luis"
];

let numeros = [9, 3, 1, 5, 12, 33, 2, 21, 7];

let students = [
    { id: 5, name: 'John'},
    { id: 8, name: 'Catalina'},
    { id: 2, name: 'Nicolas'},
    { id: 4, name: 'Carlos Javier'},
    { id: 6, name: 'Carlos Eduardo'},
    { id: 3, name: 'Sebastian'},
    { id: 7, name: 'Damian'},
    { id: 1, name: 'Luis'},
]

function bubbleSort(arr = []){
    const len = arr.length;
    for(let i = 0; i < len - 1; i++){ // las veces que se va a repetir
        for(let j = 0; j < len - 1; j++){ // comparando los elementos
            if(arr[j] > arr[j+1]){
                // variable auxiliares
                const temp = arr[j]; // 21
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

function bubbleSortObject(arr = []){
    const len = arr.length;
    for(let i = 0; i < len - 1; i++){ // las veces que se va a repetir
        for(let j = 0; j < len - 1; j++){ // comparando los elementos
            if(arr[j].id > arr[j+1]['id']){
                // variable auxiliares
                const temp = arr[j]; // 21
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

function selectionSort(arr = []){
    const len = arr.length;

    for(let i = 0; i < len - 1; i++){

        let min = i; // 0
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min !== i){
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr
}

function selectionSortObject(arr = []){
    const len = arr.length;

    for(let i = 0; i < len - 1; i++){

        let min = i; // 0
        for(let j = i + 1; j < len; j++){
            if(arr[j].name < arr[min]['name']){
                min = j
            }
        }

        if(min !== i){
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr
}



/* 
console.log("Pedro" < "Luis")
console.log("Maria" < "Mario")
console.log("Maria" < "Marco") 
*/
let result = null;
console.time()
result = bubbleSort([...nombres]);
console.log(nombres)
console.log(result)
console.timeEnd()

console.time()
result = bubbleSort([...numeros]);
console.log(numeros);
console.log(result);
console.timeEnd()

console.time()
result = selectionSort([...numeros])
console.log(numeros)
console.log(result)
console.timeEnd()



console.time()
result = bubbleSortObject([...students])
console.log(students)
console.log(result)
console.timeEnd()

console.time()
result = selectionSortObject([...students])
console.log(students)
console.log(result)
console.timeEnd()