const listaProductos = document.getElementById("produ");
const botonComprar = document.getElementById("comprar");
const cantidad = document.getElementById("input");
const enviarForm = document.getElementById("enviar");
let compraTotal: number;

let productos: string[] = ["Pan", "Galletitas", "Azucar", "Aceite"];
let stock: number[] = [50, 40, 32, 52];
let precio: number[] = [200, 180, 110, 280];

let cargarProductos = () => {
  for (let i = 0; i < stock.length; i++) {
    let ulprodu = document.createElement("li");
    ulprodu.classList.add("Nombre_Producto");
    ulprodu.id = `producto-${i}`;
    let prodName = document.createElement("p");
    prodName.innerHTML = productos[i];
    let prodPrice = document.createElement("p");
    prodPrice.innerHTML = `$${precio[i]}`;
    let amountSelect = document.createElement("input");
    amountSelect.id = `amountSelect-${i}`;
    amountSelect.type = "number";
    amountSelect.max = String(stock[i]);
    amountSelect.min = "0";
    ulprodu.appendChild(prodName);
    ulprodu.appendChild(prodPrice);
    ulprodu.appendChild(amountSelect);
    listaProductos?.appendChild(ulprodu);
    let btAgregar = document.createElement("p");
    btAgregar.innerHTML = `$${precio[i]}`;
    ulprodu.appendChild(prodName);
    ulprodu.appendChild(prodPrice);

    compraTotal = Number(prodPrice.value) * Number(amountSelect.value);
  }
};
window.onload = cargarProductos();

let comprar = () => {
  let valorTotal = 0;
  for (let i = 0; i < stock.length; i++) {
    let selectorCantidad = document.getElementById(`amountSelect-${i}`);
    let cantidadSeleccionada = Number(selectorCantidad.value);
    if (cantidadSeleccionada > 0) {
      console.log(
        `Compraste ${cantidadSeleccionada} unidades de ${productos[i]}`
      );
      valorTotal += precio[i] * cantidadSeleccionada;
    }
  }
  if (valorTotal > 0) {
    console.log(`El costo total de su compra es $${valorTotal}`);
  } else {
    console.log(`Debe seleccionar al menos un producto`);
  }
};

let enviarFormulario = () => {
  alert("Sus datos fueron enviados exitosamente");
};

botonComprar?.addEventListener("click", comprar);
enviarForm?.addEventListener("click", enviarFormulario);
