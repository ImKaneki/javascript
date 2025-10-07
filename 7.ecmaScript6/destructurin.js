let numeros=[3,4,7,8,5,4]
let [a,b]=numeros

let [,c,,d]=numeros

let [h,...rest]=numeros

rest
let alumno={
    "nombre":"ronny",
    "edad":20
}
alumno["dni"]=23456789
//spread opation...
let actualizaAlumno={"id":1,...alumno,"t_sangre":"b+"}
let {nombre,t_sangre}=actualizaAlumno
nombre
t_sangre

//agregar con el operador spread las letras faltantes de las vocales

let vocales=[`a`,`e`]
let completaVocales=[...vocales,`i`,`o`,`u`]
completaVocales

let texto="hola como estan alumnos"
let nuevaLista=[...texto]
nuevaLista