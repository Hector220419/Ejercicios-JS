// forEach
// por cada elemento de un array/objeto/matriz realiza el bloque de código
// Comunmente utiliza funciones anónimas para su ejecución

const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];

// names.forEach((e) =>{
//     console.log(e);
// });

// names.forEach( e => console.log(e));

// names.forEach(function(e,index,arr){
//     console.log(e);
//     console.log(index);
//     console.log(arr);
// });

// map
// Conserva la integridad del array/objeto original y crea uno nuevo a partir de las instrucciones que le demos
// Map necesita un return y forEach no necesariamente

// const newNames = names.map(elemento => {
//     return elemento.toUpperCase();
// });

// console.log(newNames);

// No se debe practicar // 
// const newNames2 = names.forEach(elemento => {
//     return elemento.toUpperCase();
// });

// console.log(newNames);
// console.log(names);

// const carrito =[2000, 50, 500, 1500, 999.99];

// const carritoFiltrado = carrito.filter(elemento => {
//     return elemento <= 1500;
// });

// console.log(carritoFiltrado);

// Ejercicios

// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

// function secretName(arr){
//     const arrNew = arr.map(element => {
//         return element.charAt(0);
//     });

//     arrNew.sort((a, b) => {
//         if(a == b) {
//           return 0; 
//         }
//         if(a < b) {
//           return -1;
//         }
//         return 1;
//     });
//     console.log(arrNew.join(""));
// }
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']);

// // onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'
// function onlineStatus(arr){
//     let cont = 0;
//     const arrNew = arr.map(element =>{
//         return element;
//     });
//     console.log(arrNew[0] + ',' + arrNew[1] + ' and ' + (arrNew.length) + ' more online');
// }
// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]



// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]


// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]


// const numArr = [1,2,3,4,5];

// const findBiggest = (arr) => {

//     let biggest = arr[0];
//     let cont = 0;
//     while(cont < arr.length){
//         if(arr[cont] >= biggest){
//             biggest = arr[cont];
//         }
//         cont++;
//     }

//     return biggest;
// }

// console.log(findBiggest(numArr));

// // Smallest

// const findSmallest = (arr) => {
//     let cont = 0;
//     let smallest = arr[cont];

//     do{
//         if(arr[cont] <= smallest){
//             smallest = arr[cont];
//         }
//         cont++;
//     } while(cont < arr.length)

//     return smallest;
// }

// console.log(findSmallest(numArr));

const arrayM = [[2,0],[-1,3]];

const matrix3 = [[-1, 0, 7],[1, 5, 4],[3, -6, 0]];

let numArr = [
    [10, -20, 60],
    [8, 10, 52],
    [15, -5, 24],
    [-26, 28, 43],
    [12, 16, -51],
];

let sum = 0;

numArr.forEach(row =>{
    row.forEach(element => {
        sum += element;
    });
});

console.log(sum);
