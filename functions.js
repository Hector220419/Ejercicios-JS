// Encontrar puntos totales en un juego de basketball 
// Hay valores de 2 puntos por canasta y 3 por canasta  // 

function basket(x,y){
    const res = 2*x + 3*y;
    console.log("El total de puntos es: "+ res);
    }
basket(2,5);

// Encontrar cuantas patas de animales hay en total 
// gallinas = 2 // vacas = 4 // cabras = 4  

function animales(g,v,c){
    const res = 2*g + 4*v + 4*c;
    console.log("El número de patas es: "+ res);
    }
animales(2,5,10);

// Encontrar cantidad de FPS dados minutos  
//1seg = 60 fps

const fps = (s) => console.log("[" + s + "]" + " segundos a FPS: " + (s*60*60));
fps(15);

// escribir una funcion que acepte un angulo en radianes y retorne un angulo en grados

const angle = (s) => console.log("[" + s + "]" + " radianes a grados: " + (s*180)/3.1416);
angle(1);

// Encontrar la poblacion de la tierra en 3 decadas a partir de cantidad de personas
// poblacion(3248, 6) -> 5408 
// poblacion(256, 2) -> 976
// poblacion(5240,3) -> 6320

function poblacion(pi,de){
    const k = 0.0849733194;
    const epsilon = 2.71828;
    const res = pi*Math.pow(epsilon,(k*de));
    console.log("La población inicial " + pi + " aumento a " + res + " en " + de + " décadas");
}
poblacion(5240,3);

// Conviertan un Array de caracteres en String
// ['z','a','b','d','i','e','l'] -> 'Zabdiel'

function transform(x){
    const myName = x.toString().replace(/,/g,"");
    console.log(myName);
}

transform(['H','E','C','T','O','R']);


// Dado el radio de un circulo y el area de un cuadrado regresar true / falso si la circunferencia del circulo es 
// mayor o menor que el perimetro del cuadrado
// biggerCircle(16, 625) -> True
// Pi = 3.14
function biggerCircle(r,a){
    const lado = Math.sqrt(a);
    const pcu = 4*lado;
    const pcir = 3.14*2*r;

    if(pcir>=pcu){
        console.log(true);
    }
    else if(pcir<pcu){
        console.log(false);
    }
    else{
        console.log("No está en las opciones");
    }
}

biggerCircle(16,625);