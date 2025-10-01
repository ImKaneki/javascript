let datosAlumno={
    "nombre":"antonio",
    "apellido":"pampañaupa"

}
//agregar edad y sexo

datosAlumno.edad = 20;
datosAlumno.sexo = "masculino";

//actualizar el apellido

datosAlumno.apellido = "Pérez";

// eliminar sexo 

delete datosAlumno.sexo;

console.log(datosAlumno);

let alumnos=[
   {"nombre":"ruth","edad":19,"CUI":23445876},
   {"nombre":"flor","edad":18,"CUI":34256784},
   {"nombre":"ashly","edad":19,"CUI":34567789}
]
//deseo mostrar una lista solo de los menores a 19
let listaMenores=alumnos.filter(al=>al.edad<20)
console.log(listaMenores)
//actualizar la lista de  objetos y agregarle el genero femenino a todos
listaMenores.forEach(alumna=> {
  alumna.genero = 'femenino';
});
console.log(listaMenores);