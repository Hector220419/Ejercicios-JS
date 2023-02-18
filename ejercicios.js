// Escribir una función que regrese la cantidad de valores true que hay en un array

/* Ejemplo
countTrue([true,false,false,true,false]) -> 2
countTrue([false,false,false,false]) -> 0
countTrue([]) -> 0
*/

function countTrue(e){
    let contador = 0;
    e.forEach(element => {
        if(element == true){
            contador += 1;
        }
    });
    console.log(contador);
}
countTrue([true,false,false,true,false]);

// Escribir una función para encontrar el mayor común divisor de 2 numeros positivos enteros. (Usar recursion)

const mcdRecursividad = (a, b) => {
    if (b == 0) return a;
    return mcdRecursividad(b, a % b);
};
console.log(mcdRecursividad(50,25));

// Encontrar los primeros n elementos de la serie fibonacci. Usar recursión.

/* Ejemplo
(5) -> 5 elementos fibonacci
69 -> 69
*/
function getFibonacci(number) {
    if (number == 0) return 0;
    else if (number == 1) return 1;
    else return getFibonacci(number-1) + getFibonacci(number-2);
}
console.log(getFibonacci(5));

/* Reto 3
Crear el sistema de calendario para verificar si el día actual, junto a la hora es considerada día y horario laboral estándar.
- 9 am - 6 pm es horario laboral
- new Date().getDay() resulta en el día de la semana del 0 - 6

Función businessHours
Parámetros
- hour -> Hora actual
Return
- True/False si la hora actual es horario laboral
Función businessDay
Parámetros
- day
Return
- True/False si el día actual es laboral
Verificación de la resolución de ambas funciones debe mostrar un mensaje
*/