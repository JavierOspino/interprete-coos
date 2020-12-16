# Interprete 'COOS'
Interprete 'COOS' para la materia de compiladores, :

dentro del archivo `pruebas.txt` , hay bloques de codigo compilables.

- **En el interprete :**

    1. Se evita que se declaren funciones con el mismo nombre, 
    2. Se valida que no se declaren variables repetidas,
    3. Solo es posible usar variables declaradas,   
    4. Se pueden crear n funciones y estas se comparten variables entre todas las funciones,    
    5. No se puede crear una funcion dentro de otra,
    6. Se pueden crear ciclos tales como while, for, do-while,
    7. Se pueden crear sentencias If, If-Else, Print,
    8. Estos ultimos son solo para las validaciones del parser.
    
- **Sintaxis Basica :**
    
    1. Funcion     -> ``` #Fnctn => [name](){sentencias};```
    2. Declaración -> ``` #Dcl => [variable];```
    3. Asignación  -> ``` variable => value ;```
    4. Imprimir    ->  ```#Prnt => (sentencia);```
    5. While       -> ``` #Whle => (condicion) {sentencias};```
    6. For         -> ``` #For => [Asignacion] (Condicion; variable++) { sentencias };```
    7. Do-While    -> ``` #Do => {sentencias} #Whle => (condicion) {sentencias};```
    8. If          -> ``` #iF => (condicion){sentencias};```
    9. If-Else     -> ``` #iF => (condicion){sentencias}#Else => {Sentencias};```
