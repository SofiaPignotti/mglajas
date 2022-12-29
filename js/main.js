alert("Bienvenidos a MglajasMAT")

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

if ((nombre == "") && (apellido == "")) {
    alert("Necesitas rellenar el campo de nombre y apellido para continuar la operacion")
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
}

alert("Te damos la bienvenida " + " " + nombre + " " + apellido + " " + "a nuestra empresa de Materiales")

// let saludo = prompt("Selecciona clase de Material.\n " + "\nPor Ejemplo '1' para Lajas " + "\n\n1-Lajas" + "\n2-Adoquines" + "\n3-Baldosas" + "\n4-Pegamentos")
// let lajas = 1;
// let adoquines = 2;
// let baldosas = 3;
// let pegamentos = 4;


// while ((parseInt(saludo) !== Lajas) && (parseInt(saludo) !== Adoquines) && (parseInt(saludo) !== Baldosas) && (parseInt(saludo) !== Pegamentos)) {
//     saludo = prompt("Selecciona clase de Material.\n " + "\nPor Ejemplo '1' para Lajas " + "\n\n1-Lajas" + "\n2-Adoquines" + "\n3-Baldosas" + "\n4-Pegamentos")
// }

// let OpcionLajas 

// if (saludo == 1) {

//     let matizada = 1;
//     let popeling = 2;
//     let murete = 3;
//     let travertino = 4;
   



//     let opcionLajas = prompt("Elige la laja que desee.\n " + "\n1-Matizada" + "\n2-Popeling" + "\n3-Murete" + "\n4-Travertino" );

//     while ((parseInt(opcionLajas) !== Matizada) && (parseInt(opcionLajas) !== Popeling) && (parseInt(opcionLajas) !== Murete) && (parseInt(opcionLajas) !== Travertino)) {
//         opcionLajas = prompt("Elige la laja que desee.\n " + "\n1-Matizada" + "\n2-Popeling" + "\n3-Murete" + "\n4-Travertino");
//     }



//     if (opcionLajas == 1) {
//         alert("Opcion Matizada'");


//         alert("Costo por M2 $5000 pesos");


//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");

//         while ((parseInt(cantidadM2) <= 0)) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 5000;

//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }

//     }


//     if (opcionLajas == 2) {
//         alert("Opcion Popeling'");

//         alert ("Costo por M2 $7000 pesos");

//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         while (parseInt(cantidadM2) <= 0) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 7000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }

//     if (opcionLajas == 3) {
//         alert("Opcion Murete'");

//         alert("Costo por M2 $4000 pesos");

//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         while (parseInt(cantidadM2) <= 0) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 4000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
//     if (opcionLajas == 4) {
//         alert("Opcion Travertino'")

//         alert("Costo por M2 $4000 pesos");

//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         while (parseInt(cantidadM2) <= 0) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 800;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
// }


// if (saludo == 2) {

//     let decor = 1;
//     let holanda = 2;
//     let uni = 3;
//     let cribado = 4;
   



//     let opcionAdoquines = prompt("Elige el modelo que desee.\n " + "\n1-Decor" + "\n2-Holanda" + "\n3-Uni" + "\n4-Cribado" );

//     while ((parseInt(opcionAdoquines) !== Decor) && (parseInt(opcionAdoquines) !== Holanda) && (parseInt(opcionAdoquines) !== Uni) && (parseInt(opcionAdoquines) !== Cribado)) {
//         opcionAdoquines = prompt("Elige el modelo que desee.\n " + "\n1-Decor" + "\n2-Holanda" + "\n3-Uni" + "\n4-Cribado");
//     }



//     if (opcionAdoquines == 1) {
//         alert("Opcion Decor'");


//         alert("Costo por M2 $5000 pesos");


//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");

//         while ((parseInt(cantidadM2) <= 0)) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 5000;

//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }

//     }


//     if (opcionAdoquines == 2) {
//         alert("Opcion Holanda'");

//         alert ("Costo por M2 $7000 pesos");

//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         while (parseInt(cantidadM2) <= 0) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 7000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }

//     if (opcionAdoquines == 3) {
//         alert("Opcion Uni'");

//         alert("Costo por M2 $4000 pesos");

//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         while (parseInt(cantidadM2) <= 0) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 4000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
//     if (opcionAdoquines == 4) {
//         alert("Opcion Cribado'")

//         alert("Costo por M2 $4000 pesos");

//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         while (parseInt(cantidadM2) <= 0) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 800;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
// }
// if (saludo == 3) {

//     let sanLuis = 1;
//     let toba = 2;
//     let pizzara = 3;
//     let disco = 4;
   



//     let opcionBaldosas = prompt("Elige la Baldosa que desee.\n " + "\n1-San Luis" + "\n2-Toba" + "\n3-Pizzara" + "\n4-Disco" );

//     while ((parseInt(opcionBaldosas) !== SanLuis) && (parseInt(opcionBaldosas) !== Toba) && (parseInt(opcionBaldosas) !== Pizzara) && (parseInt(opcionBaldosas) !== Disco)) {
//         opcionBaldosas = prompt("Elige la baldosa que desee.\n " + "\n1-San Luis" + "\n2-Toba" + "\n3-Pizarra" + "\n4-Disco");
//     }



//     if (opcionBaldosas == 1) {
//         alert("Opcion San Luis'");


//         alert("Costo por M2 $5000 pesos");


//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");

//         while ((parseInt(cantidadM2) <= 0)) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 5000;

//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }

//     }


//     if (opcionBaldosas == 2) {
//         alert("Opcion Toba'");

//         alert("Costo por M2 $7000 pesos");


//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");

//         while ((parseInt(cantidadM2) <= 0)) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 7000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }

//     if (opcionBaldosas == 3) {
//         alert("Opcion Pizzara'");

//         alert("Costo por M2 $8000 pesos");


//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");

//         while ((parseInt(cantidadM2) <= 0)) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 8000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
//     if (opcionBaldosas == 4) {
//         alert("Opcion Disco'")

//         alert("Costo por M2 $4000 pesos");


//         let cantidadM2 = prompt("indica la cantidad de M2 que deseas");

//         while ((parseInt(cantidadM2) <= 0)) {
//             alert("tienes que elegir al menos 1 M2 para seguir la compra. Gracias");
//             cantidadM2 = prompt("indica la cantidad de M2 que deseas");
//         }
//         let suma = parseInt(cantidadM2) * 800;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
// }
// if (saludo == 4) {

//     let adesilex = 1;
//     let ultralite = 2;
//     let keraflex = 3;
//     let keraset = 4;
   



//     let opcionPegamentos = prompt("Elige el Pegamento que desee.\n " + "\n1-Adesilex" + "\n2-Ultralite" + "\n3-Keraflex" + "\n4-Keraset" );

//     while ((parseInt(opcionAdoquines) !== Adesilex) && (parseInt(opcionAdoquines) !== Ultralite) && (parseInt(opcionAdoquines) !== Keraflex) && (parseInt(opcionAdoquines) !== Keraset)) {
//         opcionAdoquines = prompt("Elige el Pegamento que desee.\n " + "\n1-Adesilex" + "\n2-Ultralite" + "\n3-Keraflex" + "\n4-Keraset");
//     }



//     if (opcionAdoquines == 1) {
//         alert("Opcion Adesilex'");


//         alert("Costo por bolsa $5000 pesos");


//         let cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");

//         while ((parseInt(cantidadBolsas) <= 0)) {
//             alert("tienes que elegir al menos 1 Bolsa para seguir la compra. Gracias");
//             cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");
//         }
//         let suma = parseInt(cantidadBolsas) * 5000;

//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }

//     }


//     if (opcionAdoquines == 2) {
//         alert("Opcion Ultralite'");

//         alert("Costo por bolsa $7000 pesos");


//         let cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");

//         while ((parseInt(cantidadBolsas) <= 0)) {
//             alert("tienes que elegir al menos 1 Bolsa para seguir la compra. Gracias");
//             cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");
//         }
//         let suma = parseInt(cantidadBolsas) * 7000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }

//     if (opcionAdoquines == 3) {
//         alert("Opcion Keraflex'");

//         alert("Costo por bolsa $4000 pesos");


//         let cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");

//         while ((parseInt(cantidadBolsas) <= 0)) {
//             alert("tienes que elegir al menos 1 Bolsa para seguir la compra. Gracias");
//             cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");
//         }
//         let suma = parseInt(cantidadBolsas) * 4000;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
//     if (opcionAdoquines == 4) {
//         alert("Opcion Keraset'")

//         alert("Costo por bolsa $4000 pesos");


//         let cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");

//         while ((parseInt(cantidadBolsas) <= 0)) {
//             alert("tienes que elegir al menos 1 Bolsa para seguir la compra. Gracias");
//             cantidadBolsas = prompt("indica la cantidad de Bolsas que deseas");
//         }
//         let suma = parseInt(cantidadBolsas) * 800;
//         alert(" El monto a pagar es " + suma);

//         let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



//         if (pago < suma) {
//             alert("Tu Saldo es insuficiente para la compra")
//         }

//         if (pago >= suma) {

//             alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
//         }
//     }
// }


// Pre entrega 2

lajas = [
    {id: 1, nombre:"Travertino", tipo:"murete", precio:"35"},
    {id: 2, nombre:"Popeling", tipo:"laja", precio:"20"},
    {id: 3, nombre:"Matizada", tipo:"laja", precio:"25"},
    {id: 4, nombre:"Baldosas", tipo:"blanggino", precio:"40"},
    {id: 5, nombre:"Adoquines", tipo:"ladrillos", precio:"50"},
]
//Busqueda de producto por id
let buscarProducto = document.getElementById("buscar-producto");
buscarProducto.addEventListener("click", () => {
  let prodId = prompt("Ingrese ID del producto");
  buscador(prodId);
});

let buscador = (prodId) => {
  let item = lajas.find((laja) => laja.id == prodId);
  if (item && item.id) {
    alert("El producto buscado es: " + item.nombre + " y su precio es= $" + item.precio);
  } else {
    alert("El producto buscado no existo");
  }
};
//ordenar de A a Z
let ordenMenor = document.getElementById("orden-menor");
ordenMenor.addEventListener("click", () => {
  const consulta = lajas.sort((a, b) => {
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
      return -1;
    }
    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  console.log(consulta);
});

//ordenar de Z a A
let ordenMayor = document.getElementById("orden-mayor");
ordenMayor.addEventListener("click", () => {
  const consulta = lajas.sort((a, b) => {
    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
      return -1;
    }
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(consulta);
});

