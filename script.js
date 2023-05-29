const pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: "hola",
        precio: 2200,
        src: "https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/1200x630cq70/photo.jpg"
    }
,
    {
        id: 2,
        nombre: "Fugazzeta",
        ingredientes: "hola",
        precio: 2800,
        src: "https://resizer.glanacion.com/resizer/TZzg6LYEvQpEof1TshBXqEspVYE=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/X6FSNA3BJBF7XB36HEECQGYS7Y.jpg"
    }
,
    {
        id: 3,
        nombre: "Marinara",
        ingredientes: "hola",
        precio: 3000,
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
,
    {
        id: 4,
        nombre: "Muzarella",
        ingredientes: "hola",
        precio: 2000,
        src: "https://d2r9epyceweg5n.cloudfront.net/stores/001/192/386/products/gallery-full-pizza-muzzarella21-c64b9b12ed31e2324915893415562393-1024-1024.jpg"
    }
,
    {
        id: 5,
        nombre: "Cuatro quesos",
        ingredientes: "hola",
        precio: 3100,
        src: "https://assets.unileversolutions.com/recipes-v2/216503.jpg"
    }
,   
    {
        id: 6,
        nombre: "Champiñones",
        ingredientes: "hola",
        precio: 2550,
        src: "https://i.blogs.es/40c9b7/pizza-casera-champinon/840_560.jpg"
    }
]

localStorage.setItem("pizzas", JSON.stringify(pizzas));

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





const devolverValoresPizza = () => {
    const idIngresado = document.getElementById("input").value;
    for (i = 0; i < pizzas.length; i++) {
        if (pizzas[i].id == idIngresado) {
        const objetoEncontrado = pizzas[i];
        console.log(objetoEncontrado);

        let nuevoElementoImagen = document.getElementById('imagen');
        let imagen = nuevoElementoImagen.src;
        nuevoElementoImagen.src = objetoEncontrado.src;

        document.getElementById("imagen").innerHTML = nuevoElementoImagen;
        document.getElementById("precio").innerHTML = objetoEncontrado.precio;
        document.getElementById("nombre").innerHTML = objetoEncontrado.nombre;
        }

        else if (idIngresado > pizzas.length) {
            alert("No existen pizzas con ese ID")
            idIngresado = "";
        }
    }
}









