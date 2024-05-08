//prueba factorial 
const factorial = require("../factorial");

test('Calcular el factorial de un numero con recursividad', () => {
    expect(factorial(number)).toBe()

});

//caso de error

test('No se aceptan numeros negativos', () => {
    expect(() => {
        factorial(-1)
    }).toThrow('No se pudo ejecutar este factorial ')
}) 



