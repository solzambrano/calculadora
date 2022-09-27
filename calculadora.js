let butons = document.getElementsByTagName("button");
let operations = [];
let show = "";
let number = "";
let entrada= document.getElementById("entrada");

recognize = (e) => {
  if(e.target.value=="CE"){
    entrada.value = "";
    operations=[];
    number="";
  }
   if(e.target.value=="C"){
   show= entrada.value;
   entrada.value=show.slice(0,-1);
   console.log(entrada.value);
   if(entrada.value==""){
    number="";
   }
   operations=[];
  }
  if (e.target.value.match("(?=[-+*/()%^π=])")) {
    entrada.value = "";
    operations.push(Number(number));
    operations.push(e.target.value);
    number = "";
    console.log(operations);
    if (e.target.value == "=") {
      resolve(operations);
      entrada.value = resolve(operations);
      console.log(entrada.value)
    }
  } else if (e.target.value.match("^[0-9]+$")) {
    number += e.target.value;
    console.log(number);
    entrada.value = number;
  } else console.log(operations);
};
resolve = (op) => {
  if (op.length <=4) {
    switch (op[1]) {
      case "+":
        return op[0] + op[2];
      case "-":
        return op[0] - op[2];
      case "*":
        return op[0] * op[2];
      case "/":
        return op[0] / op[2];
    }
  }
};

for (let i = 0; i < butons.length; i++) {
  butons[i].addEventListener("click", recognize);
}

// ========================
// CLASES
// ========================
// */

// class Cliente{
//     constructor(nombre, telefono, calle, compra) {
//         this.nombre = nombre;
//         this.telefono = telefono;
//         this.calle  = calle;
//         this.compra = compra;
//     }
// }

// let numeroImg = 0;

// class Producto {
// 	constructor(id,nombre,tipo,precio, imagen){
// 		this.id = id
// 		this.nombre = nombre;
// 		this.tipo = tipo;
// 		this.precio = precio;
// 		this.imagen = "assets/imagen" + (numeroImg++) + ".jpg"
// 	}
// }

// /*
// ========================
// VARIABLES
// ========================
// */

// let compras = [];
// let productoTipo;
// let productos = {
// 	lamparas: [ new Producto(1,"Lampara Colgante","Lamparas",500), new Producto(2,"Lampara de escritorio","Lamparas", 1500), new Producto(3,"Lampara larga","Lamparas", 800)],
// 	adornos: [ new Producto(4,"Cuadro","Adornos",500), new Producto(5,"Llavero colgante","Adornos", 1500), new Producto(6,"Florero","Adornos", 800)],
// 	luces: [ new Producto(7,"Blancas","Luces",500), new Producto(8,"Led","Luces", 1500), new Producto(9,"Calidas","Luces", 800)]
// }

// let botones = document.getElementsByClassName("botonProducto")

// for(const boton of botones){
// 	boton.onclick = () => {mostrarProductos(productos[boton.value.toString()])}
// }

// let botonesCompra;

// /*
// ========================
// FUNCIONES
// ========================
// */

// function mostrarProductos(productos, inicio = false){
// 	//let productosHTML = document.getElementById("productos");

// 	let i = 1;
// 	let catalogo =""

// 	for(const producto of productos ){
// 		catalogo +=`<div class="card" style="width: 18rem;">
// 						<img src="${producto.imagen}" class="card-img-top" alt="..." style="height: 18rem;">
// 					  	<div class="card-body">
// 						    <h5 class="card-title">${i++}. ${producto.nombre}</h5>
// 						    <span class="d-block m-2">Precio: $ ${producto.precio}</span>
// 						    <button type="button" value = ${producto.id} class="btn btn-primary botonCompra">Comprar</button>
// 		  				</div>
// 		  			</div>`
// 	}

// 	if(!inicio){
// 		$('#productos').empty()
// 	}

// 	$('#productos').append(`<h3>${productos[0].tipo}:</h3>
// 								<div class="row justify-content-evenly" id="catalogo" >
// 									${catalogo}
// 								</div>`)
// 	console.log("QUE LLEGA???")
// 	console.log(productos);
// 	productoTipo = productos[0].tipo.toString().toLowerCase()
// 	$('.botonCompra').click( () => cargarCompra($('.botonCompra').val().toString()));

// }

// function cargarCompra(id){
// 	let producto = productos[productoTipo]

// 	producto = producto.find(e => e.id === parseInt(id,10) )
// 	compras.push(producto)
// 	console.log(compras)
// 	implementarCompra(compras)

// 	localStorage.setItem("compras", JSON.stringify(compras));
// }

// function mostrarError(){

// 	$('#productos').append(`<li class="list-group-item bg-danger ">No se encontro el producto</li>`)

// }

// function implementarCompra(compras){
// 	let comprasHtml = `<h4>Compras:</h4>`;
// 	let i = 1;
// 	let total = 0;

// 	for(const compra of compras){
// 		comprasHtml += `<span class="m-3">${i++} - ${compra.tipo} ${compra.nombre}</span> <span>/</span>`
// 		total += compra.precio;
// 	}

// 	comprasHtml += `<span class="d-block">Monto total: $ ${total}</span>
// 	<button type="button" id="resetCompras" class="btn btn-outline-primary  mt-3	 botonProducto h-50">Limpiar</button>`

// 	$('#compras').empty();
// 	$('#compras').append(comprasHtml);

// 	let botonReset = document.getElementById("resetCompras");
// 	botonReset.onclick = () => resetearCompras()
// }

// function resetearCompras(){
// 	localStorage.removeItem("compras");
// 	$('#compras').empty();
// 	inicializarCompras()
// }

// function inicializarCompras(){
// 	compras = JSON.parse(localStorage.getItem("compras"));
// 	console.log(compras)

// 	if (compras){
// 		implementarCompra(compras);
// 	} else {
// 		let comprasHtml = document.getElementById("compras");
// 		comprasHtml.innerHTML = `<h4>Compras: Ninguna</h4>`
// 		compras=[]
// 	}
// }

// const searchProduct = (nombre) => {
// 	$('#productos').hide();
// 	$('#productos').empty();

// 	if(nombre === "") {$('#productos').append("<h3>No se encontraron productos relacionados...</h3>")}
// 	else {
// 		let arrayProductos=[];

// 		for(const tipo in productos){

// 			for(let producto of productos[tipo]){
// 				if(producto.nombre.toLowerCase().indexOf(nombre) > -1){ (arrayProductos.push(producto))
// 					console.log("tipo: " + tipo)
// 					console.log(producto.nombre.toLowerCase)
// 				console.log("CUMPLE!!")
// 				}
// 			}
// 		}

// 		arrayProductos.length > 0
// 			?
// 				(mostrarProductos(arrayProductos,inicio = true))
// 			:
// 				$('#productos').append("<h3>No se encontraron productos relacionados...</h3>")

// 	}

// 	$('#productos').show();
// }

// /*
// ========================
// Programa
// ========================
// */

// $( document ).ready(() => {
// 	inicializarCompras()
// 	mostrarProductos(productos["luces"], inicio = true)
// 	$("#busqueda").click(() => searchProduct($('#nombreBuscado').val()))

// })
