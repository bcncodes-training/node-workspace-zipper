#### Ejercicio entregable
 
 
__Ejercicio__

Genera una utilidad para recorrer el árbol de directorios de trabajo (aka __workspace__) y comprimirlos dentro de un fichero __tar.gz__. 
 


Importación:

import { zip, unzip } from './zipper.mjs'

__Ejemplo comprimir:__

zip('../workspace');

__Ejemplo descomprimir:__

unzip();



__Input__
```
workspace
|-- ejercicio1
    |-- node_modules
    |-- images
        |-- imagen1.jpg
    |-- main.js
    |-- package.json
```
    
__Output__:
```
workspace.tar.gz
|-- ejercicio1
    |-- images
        |-- imagen1.jpg
    |-- main.js
    |-- package.json
```

 

