const pizzas = [
    {
        id: 1,
        nombre: "napolitana",
        ingredientes: "hola",
        precio: 2200,
    }
,
    {
        id: 2,
        nombre: "fugazzeta",
        ingredientes: "hola",
        precio: 2800,
    }
,
    {
        id: 3,
        nombre: "marinara",
        ingredientes: "hola",
        precio: 3000,
    }
,
    {
        id: 4,
        nombre: "muzarella",
        ingredientes: "hola",
        precio: 2000,
    }
,
    {
        id: 5,
        nombre: "cuatro queso",
        ingredientes: "hola",
        precio: 3100,
    }
,   
    {
        id: 6,
        nombre: "champiñones",
        ingredientes: "hola",
        precio: 2550,
    }
]
    
console.log(pizzas);

function verPizzasIdImpar() {
    const pizzasImpares = pizzas.filter(pizzas => pizzas.id % 2 !== 0);
    console.log(pizzasImpares);
    }
verPizzasIdImpar();

function verSiHayPizzasBaratas() {
    const pizzasBaratas = pizzas.some(pizzas => pizzas.precio < 600);
    if (pizzasBaratas == false) {
        console.log("¡Lo lamentamos! no hay ninguna pizza a menos de $600");
    }
}

verSiHayPizzasBaratas();

function verNombresDeTodasLasPizzas() {
    for ( i = 0; i < pizzas.length; i++) {
        const pizzas2 = pizzas[i];
        const preciosDePizzas = pizzas2.precio;
        const nombresDePizzas = pizzas2.nombre;
        console.log(nombresDePizzas, preciosDePizzas);
    }
}
verNombresDeTodasLasPizzas();