# Taller de Repaso de Javascript
>[!WARNING] observaciion : quokka se deve ejecutar en cada archivo
>[!TIP] Quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder ver la consola en vivo



## 1. tipos de datos
en javascript se clasifican en dos grandes grupos 
> [!TIP] Javascript tiene funiones predeterminadas por ejemplo para mostrar un mensaje por consola , para poder verificar
> que tipo de dato estamos manejando en javascript tambien tenemos una funcion por defecto llamada `typeof()`.
### Primitivos
son datos que siempre existiran
1. numericos
   - enteros positivos
   - enteros negativos
   - decimal positivo
   - decimal negativo
2. texto 
   - caracteres                 - 10001001  -  97 - A
   - caracteres especiales      - 01001001 010100101  - 256 - @
   - string 
3. booleanos 
   - true  - 1
   - false - 0
## Estructurados 
1. Array (Lista)
   - array de tipo numerico
   - array de tipo string
   - array de tipo mixto
 2. Objetos (diccionario)
3. ## 2. variables (enlaces,binding)
   es la tecnica que se usa para poder apuntar a una direccion en memoria y al valor o dato relacionado o que se encuentre almacenado
   en ese momento
4. son similares a las listas con la unica diferencia que en vez de tener valor e indice trabjan con clave:
   - como esta estructutado en un objeto de javascript
  tenemos dos pasos para crear la variable 
  1. primero declarar la variable/constante
  2. segundo inicializar la variable/constante
  3. **observacion** para crear una variable primerotenemos que crear el enlace luego darle el nombre de la variable/constante
  4. para las variables tenemos las palabras reservadas `keyboard` - `let` , `var`.
  5. para las constantes tenemos la palabra reservada `keyboard`- `constant`
   **recomendaciones**
   - `let` usar cuando el valor tendra que variar
   - `const` usar cuando el valor sera el mismo siempre
   - `var` evitar usar
  `let` - `var` ambos nos permite crear variables su unica diferencia es el alcanze o `scope`(averiguar)
## 3. operadores 
su clasificacion general se divide en tres
1. operadores primarios
   los opereadores unarios son aquelos que tienen el operador a la izquierda del valor y que dan como resultado otro valor 
   y que retornan un nuevo valor 
   - operador de negacion
2. operadores binarios
   son quellos que estan en medio de dos valores y que retornan un unico valor 
   - operadores aritmeticos
   - operadores de comparacion
   - operadores logicos
3. operadores terciarios
   los operadores terciarios son quellos que evaluan tres valores y dan como resultados un solo valor 
   - operador condicional
## 4. controles de flujo 
nuestros pogramas en javascript contienen mas de una sentencia y las sentencias son ejecutadas una a una como si fuer una historia, de
arriba hacia abajo como un camino recto.
### 1. control de desicion (if-else)
javascript nos permite crear caminos alternativos en nuestros programas dependiendo de una descision a esto se le conoce como caminos
o ejecucion condicional , que ejecutara un sentencia u otra teniendo en cuenta la condicion asi podemos crear multiples caminos u opciones 
en nuestro programas.
si tenemos una condicion verdadera se ejecutara una sentencia si tenemos una condicion false se ejecutara otra sentencia totalmente distinta.
**Observacion** la ejecucion condicional rompe el flujo normal de un programa.
### 2. bucles (for)
### 3. bucles (while)
## 5. funciones
## 6. metodos para trabajar con datos estructurados
### acceder
### modifica
### crear
### insertar
### eliminar
### ordenar
