//Crear funcion para calcular el factorial de un número con método de recursión

function factorial(num) {
    if (num === 0 || num === 1 ) {
        return 1;
    } if  (num < 0 ) {
        return console.error("no se aceptan negativos");

    } else {
        return num * factorial(num - 1);
    }

}; 

module.exports = factorial