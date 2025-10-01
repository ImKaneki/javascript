//crear una lista de objetos de 5 vehiculos que tengan informacion como marca , año de fabricacion,precio,numero de placa
let vehiculos = [
  { marca: "Toyota", modelo: "Corolla", anio: 2018, precio: 12000, placa: "ABC123" },
  { marca: "Honda", modelo: "Civic", anio: 2020, precio: 15000, placa: "XYZ789" },
  { marca: "Ford", modelo: "Focus", anio: 2019, precio: 13000, placa: "JKL456" },
  { marca: "Chevrolet", modelo: "Onix", anio: 2021, precio: 16000, placa: "MNO321" },
  { marca: "Nissan", modelo: "Versa", anio: 2017, precio: 11000, placa: "PQR654" }
];

//crea funciones para cada uno de estas acciones
//actualizar el valor de una de sus caracteristicas
const actualizar = (placa, prop, val) => vehiculos.find(v => v.placa === placa)[prop] = val;
//agregar un nuevo vehiculo
const agregar = v => vehiculos.push(v);
//eliminar un nuevo vehiculo
const eliminar = placa => vehiculos = vehiculos.filter(v => v.placa !== placa);
//poder filtrar los vehiculos por su año de fabricacion
const filtrarAnio = anio => vehiculos.filter(v => v.anio === anio);
//poder filtrar un solo vehiculo por su numero de placa
const buscarPlaca = placa => vehiculos.find(v => v.placa === placa);

console.log("Inicial:", vehiculos);
actualizar("XYZ789", "precio", 14000);
agregar({ marca: "Kia", modelo: "Rio", anio: 2022, precio: 17000, placa: "AAA111" });
eliminar("JKL456");
console.log("Filtrar 2020:", filtrarAnio(2020));
console.log("Buscar MNO321:", buscarPlaca("MNO321"));
console.log("Final:", vehiculos);

