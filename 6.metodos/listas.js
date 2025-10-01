let lista=[]
lista[0]="manzana"
lista[1]="pera"
console.log(lista.length) 
console.log(lista) 

//1. crear una lista vacia y agregar de manera automatica los numeros pares que existen entre 0 y 20

let numerosPares = [];
for (let i = 2; i <= 20; i += 2) {
    numerosPares[numerosPares.length] = i;
}
console.log(numerosPares);

let amigos=["e","i","o"]
amigos.unshift("a")
amigos.push("u")
console.log(amigos) 


let frutas=["manzana","piña","sandia","pera","platano","cereza"]
let cereza=frutas.pop()
frutas.shift()
frutas

let vocals=[`a`,`e`,`e`,`i`,`o`,`u`]
vocals.splice(2,2)
vocals

let amigosPrimaria=[`alfredo`,`luis`,`edgar`]
let amigosSecundaria=[`edison`,`reymi`,`miguel`]
let amigosSuperior=[`josue`,`marlon`,`handy`]
let friends=amigosPrimaria.concat(amigosSecundaria,amigosSuperior)
friends

const miFuncion=a=>{}
let numeros=[1,2,3,4,5,6]
numeros.forEach(n=>{console.log(n*1)})


let number=[1,2,3,4,5,6]
let newNumber=number.map(n=>{return n+1})
console.log(newNumber) 

let fruits=[`pera`,`higo`,`tomate`]
let estaPera=fruits.includes(`pera`)
console.log(estaPera)
let estaNaranja=fruits.includes(`naranja`)
console.log(estaNaranja)


let listNumber=[10,11,3,20,5]
//obtener en una lista los numeros mayores a 10
let mayorDiez=listNumber.filter(n=>{return n>10})
console.log(mayorDiez)

//de una lista numero del 1 a 10 usando filter elimiar el numero 1

let unoAlDiez=[1,2,3,4,5,6,7,8,9,10]
let listaSinUno=unoAlDiez.filter(n=>{return n!=1})
console.log(listaSinUno)