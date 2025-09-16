# TALLERES DE REPOSO DE JAVASCRIPT
>[!WARNING] observacion: Quokka se debe ejecutar en cada archivo.
>[!TIP] Quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder ver las consola en vivo

## 1. TIPOS DE DATOS.
en javascript se clasifican en dos grandes grupos
>[!TIP] Javacript tiene funciones predeterminadas por ejemplo para mostrar un mensaje por consola console.log(),
para poder verificar que tipo de dato estamos manejando en javascript tambien tenemos una funcion por defecto llamada
typeof
### ORIMITIVOS
son datos que siempre existiran.
1. NUMERICOS.
  - enteros positivos
  - enteros negativos
  - decimal positvo
  - decimal negativo
  - NaN (not a number)
2. TEXTO
  - caracteres
  - caracteres especiales
  - string
3. BOOLEANOS
  - true   - 1
  - false  - 0
### ESTRUCTURADOS 
1. ARRAY (LISTA)
   - array de tipo numerico.
   - array de tipo string.
   - array de tipo mixto.
2. OBJETOS (DICCIONARIO)
   son similares a las listas con la unica diferencia que en vez de tener valor e indice sus elementos trabajan
   con clave:valor
   - como esta estructurado en un objeto de javascript.
## 2. VARIABLES (enlaces, binding).
es la tecnica que se usa para poder apuntar a una dirección en memoria y al valor o datos relacionados o que se
encuentre almacenado en ese momento.
tenemos dos pasos para crear una variable 
1. primero declarar la variable/constante.
2. segundo inicializar la variable/constante.
*OBSERVACION* para crear una variable primero tenemos que crear el enlace luego darle el nombre de la variable
/constante: Keyword,let,var,Keyword - const.
*RECOMENDACIONES*
- let usar cuando el valor tendraque variar.
- const usar cuando el valor sera el mismo siempre.
- var evitar usar.
let,var ambos nos permiten crear variable su unica diferencia es el alcance ambito o scope(averigaur)
## 3. OPERADORES.
su clasificacion general se divide en tres.
1. OPERADORES UNARIOS.
   Los operadores unarios son aquellos que estan ubicados a la izquierda del valor y que retornan un nuevo valor.
   - operacion de negacion
2. OPERADORES BINARIOS.
   los operadores binarios son aquellos que estan en medio de dos valores y retornan un unico valor.
   - operaciones aritmeticos.
   - operadores de compracion.
   - operadores logicos.
3. OPERADORES TERNARIOS.
   los operadores ternarios son aquellos que evaluan tres valores y que retornan un solo valor.
   - operador condicional.
## 4. CONTROLES DE FLUJO.
nuestros progrmas en javascript contienen mas de una sentencia y las sentencias son ejecutadas una a una como si
fuera una historia, de arriba havia abajo como un camino recto.
javascript nos permite crear caminos alternativos en nuestros programas dependiendo de una decision a esto se le 
conoce como caminos o ejecucion condicional, que ejecutara una sentencia u otras teniendo encuenta la condicion
asi podemos crear multiples caminos u opciones en nuestro programas.
si tenemos una condicion verdadera se ejecutara una sentencia si tenemos una condicion false se ejecutara otra
sentencia totalmente distinta.
*OBSERVACION* la ejecucion condicional rompe el flujo normal de un programa.
### 1.CONTROLES DE DECISION(IF-ELSE)
tarea con sus ejemplos
### 2.BLUCLES(FOR)
### 3.BLUCLES(WHILE)

## 5.FUNCIONES.
la funciones en javascrip son bloques de codigo que se ejecutan de manera independiente, podemos decir tambien que 
son programas que toman datos como entra y retornan otros datos como salida.
las funcione son fundamentales para el correcto ordenamiento denuestro codigo ademas que nos permkiten separar de una
manera mas ordenada muestra logica y evitar repartir el codigo muchas veces.
### TIPOS DE FUNCIONES:
#### 1. FUNCIONES POR DECLARACION
este tipo de funcion es la mas conocida y mas usada su estructura es la siguiente:

### TAREA:
### FUNCIONES POR EXPRESION:
Una función por expresión es una función que se define como una expresión y se asigna a una variable. Se utiliza la palabra clave function seguida de los parámetros y el cuerpo de la función.
const suma = function(a, b) {
  return a + b;
};

console.log(suma(2, 3)); // Salida: 5
### FUNCIONES DE FECHA (ARROW FUNCTION)
Las funciones de flecha son una forma más concisa de definir funciones en JavaScript. Utilizan la sintaxis => para separar los parámetros del cuerpo de la función.
const suma = (a, b) => {
  return a + b;
};

console.log(suma(2, 3)); // Salida: 5
Si la función solo tiene una línea de código, puedes omitir las llaves y la palabra clave return:
const suma = (a, b) => a + b;

console.log(suma(2, 3)); // Salida: 5
Las funciones de flecha también tienen algunas diferencias en cuanto al contexto de this, que puede ser beneficioso en ciertas situaciones.
## 6. METODOS PAARA TRABAJAR CON DATOS ESTRUCTURADOS
los metodos son funciones que dan funcionalidades extras a los tipos de datos en los cuales se aplican, un metodo es antesedido
por un tipo de dato y un punto.
*ejemplo*
el ejemplo mas claro de un metodo es el .lengt - este metodo nos permite o nos retorna la cantidad de caracteres de un string
o la cantidad de elementos de una lista.
js
"hola".length //4
[2,5,4,6,7].length //5

>[!TIP] los metodos en su mayoria solo se aplican a tipo de datos string, listas y objetos, en su gran parte son aplicadospara listas.
### 6.1 METODOS PARA STRING - CADENAS DE TEXTO
#### LENGTH
devuelve la longitud de una cadena
js
let mensaje="hola como estas"
console.log(mensaje.lenght)
//retorna -> 15

#### TOLOWERCASE
devuelve una cadena en minuscula
js
let texto="hola"
console.log(texto.tolowercase())
// retorna -> hola

#### TOUPPERCASE
devuelve una  cadena en mayusculas
js
let texto="hola"
console.log(texto.toUpperCase())
// retorna -> HOLA

#### CONCAT 
combina el texto de dos o mas cadenas
js
let nombre="kcapa"
let saludo="hola"
//let concatenado=nombre+saludo
console.log(saludo.concat(nombre))

let cad1="oh "
let cad2="me "
let cad3="vengo"
console.log(cad1.concat(cad2,cad3))
//retorna -> oh me vengo

### TRIM
este metodo elimina los espacios que existen al inicio o final de una cadena o texto.
js
let texto="   hola"
let nuevotexto=texto.trim() //hola
let otrotexto="hola   "
let nuevoOtrotexto=otrotexto.trim()//hola

#### SLICE - CORTE
este metodo nos permite extraer partes de una cadena, especificando sus indices, donde
comenzar y hasta donde mostrar.
js
let parrafo="hola soy percy"
//solo quiero que me muestre percy
let nombre=parrafo.slice(9)//percy
let soy=parrafo.slice(5,8)//soy

#### SPLIT
este metodo retorna una lista basandose en un separador que se le indique.
js
let parrafo="solo se que nada se"
parrafo.split("")//["solo","se","que","nada","se"]
let url="google.com/search?=gatitos"
url.split("=")//["google.com/search?","gatitos"]
console.log(gatito[1])//gatitos
let listaFrutas="manzana,tomate,pera,naranja"
listaFrutas.split(",")

### 6.2 METODOS PARA LISTA - ARRAYS
### ACCEDER
### MODIFICAR
### CREAR 
### INSERTAR
### ELIMINAR
### ORDENAR 
### 6.2 METODOS PARA OBJETOS.
## 7. DOM