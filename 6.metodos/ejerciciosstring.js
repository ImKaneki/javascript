/*
1. crear, un programa haciendo uso de una funcion debera recibir un texto y la vocal a buscar y retorna la cantidad de veces que se encuentra dicha vocal.
hacer uso de los metodos para string
*/
function countVocals(texto,vocal){
    let newText=texto.toLowerCase()
    let cantidadVocals=0
    for(let i=0;i<newText.length;i++){
        if (texto[1]==vocal){
            //cantidadVocales=cantidadVocales+1
            cantidadVocals+=1
            //cantidadVocales++
        }
    }
    return cantidadVocals
}
let miTexto="mi mama me ama yo amo a mi mama"
let searchVocales="0"
console.log(countVocals(miTexto,searchVocales))

let otroTexto="hola como estas"
let vo="o"
const contarVocales=(txt,v)=>{
    return txt.toLowerCase().split(v.toLowerCase()).length+1
}
console.log(contarVocales(otroTexto,vo))


/**
 * 2. crear un programa que haciendo uso de una funcion pueda recibir una lista de amigos y que retorne otra lista pero con los nombres en mayuscula 
 */
function textoMayuscula(lista){
    let nuevaLista=[]
    for(let i=0;i<lista.length;i++){
        nuevaLista[i]=lista[i].toUpperCase()
    }
    return nuevaLista
}
let amigos=["josema","dara","ruth"]
console.log(textoMayuscula(amigos))