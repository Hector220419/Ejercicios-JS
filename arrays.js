const arr = ['a','b','c','d'];

const bucle1 = (arr) => {
    for(let i = 0; i <= 3; i++){
        console.log('El arreglo es: ' + arr[i]);
        console.log(i);
    }
}

bucle1(arr);

//////////////////////// EJEMPLOS ////////////
const arr1 = [1,2,3,4,5];
const arr2 = [1, -563, 999, 0 , -1, -999];

// Encontrar el numero mas grande
// Encontrar el numero mas pequeño
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];

const smallNum = (arr) => {
    var value = arr[0];
    for(var i = 0; i <= arr.length ; i++){
        if(arr[i] <= value){
        value = arr[i];
        }
    }
    console.log('El numero mas pequeño es: ' + value);
}
smallNum(arr1);

const bigNum = (arr) => {
    var value = arr[0];
    for(var i = 0; i <= arr.length ; i++){
        if(arr[i] >= value){
        value = arr[i];
        }
    }
    console.log('El numero mas grande es: '+ value);
}
bigNum(arr1);

const smallBigNum = (arr) => {
    var valueMin = arr[0];
    var valueMax = arr[0];
    var arr;
    for(var i = 0; i <= arr.length ; i++){
        if(arr[i] <= valueMin){
        valueMin = arr[i];
        }
        if(arr[i] >= valueMax){
            valueMax = arr[i];
        }
    }
    arr = [valueMax,valueMin];
    console.log(arr);
}
smallBigNum(arr1);

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "25.5 ohms"
// Ohms >= 1

const sumResistance = (arr) => {
    let value = 0;
    for(let i = 0; i < arr.length; i++){
        value += arr[i];
    }
    console.log('El valor de la suma es de: ' + value);
}
sumResistance(arr1);

// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];

const numDiv = (num) => {
    let div = 0;
    div = num/2;
    const array = [div,div];
    console.log(array);
}
numDiv(50);
console.log('//////////////////////////////');

// indexOf nos indica en que indice o posicion del array esta el dato que buscamos
const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];

// console.log(names.indexOf('Griselo')); regresa  la posicion

// Pop elimina el ultimo elemento
// console.log(names.pop());
// console.log(names);

// Push agregar un elemento al final del array
// Return es la nueva longitud
// console.log(names.push('Sergio'));
// console.log(names);

// Shift elimina el primer elemento y recorre el resto una posicion hacia atras
// names.shift();
// console.log(names);

// https://www.w3schools.com/js/js_number_methods.asp

// Splice elimina elementos y si es necesario podemos ingresar nuevos en el arreglo
// console.log(names);
// names.splice(1, 0, 'Hugo', 'Carlos');
// console.log(names);

// Slice
console.log(names);
const arrnames2 = names.slice(2,4);
console.log(arrnames2); // shift afecta al array original, y slice crea un array nuevo, no?

// Unshift
// names.unshift('Hugo');
// console.log(names);

// delete

// delete names[0];
// console.log(names);

// Splice elimina elementos y si es necesario podemos ingresar nuevos en el arreglo
// console.log(names);
// names.splice(1, 0, 'Hugo', 'Carlos');
// console.log(names);

// Slice corta el array de (index inicial, index final) y crea uno nuevo con ese rango
// console.log(names);
// const arr2 = names.slice(2, 4);
// console.log(arr2);


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

const arrDiv = [1,2,3,4,5,22,6];

const promAntipode = arr =>  {
    let slice1;
    let slice2;
    // Dividir el arreglo verificando que sean en partes iguales
    if(arr.length % 2 != 0){
        let cut = (arr.length - 1)/2;
        slice1 = arr.slice(0,cut);
        slice2 = arr.slice(cut+1,arr.length);  
    }else if(arr.length % 2 == 0){
        let cut = (arr.length)/2;
        slice1 = arr.slice(0,cut);
        slice2 = arr.slice(cut,arr.length);  
    }
    let promedio = [];
    slice2.reverse();
    for (let index = 0; index < slice1.length; index++) {
       promedio[index] = (slice1[index] + slice2[index])/2; 
    }
    // Final value
    console.log(promedio);
}
