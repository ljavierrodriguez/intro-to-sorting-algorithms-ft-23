let numeros = [1, 2, 3];
let nombres = ["Hugo", "Paco", "Luis"];
let alumnos = [{ id: 1, name: 'Hugo' }, { id: 2, name: 'Paco' }, { id: 3, name: 'Luis' }]


console.log(numeros[2])

let frutas = [];

frutas[0] = "Banana";
frutas[1] = "Pera";
frutas[2] = "Manzana";

console.log(frutas)

console.log(frutas[3])

frutas[10] = "Kiwi"

console.log(frutas)
console.log(frutas.length)

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
let datos = [];
for(let num = 0; num < 10; num++){
    datos[num] = num + 1;
}

console.log(datos)