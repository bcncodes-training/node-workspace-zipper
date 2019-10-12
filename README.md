#### Ejercicio entregable
---

__Entregable__

Sigue los siguientes pasos:
1. clona el repositorio a tu directorio de trabajo local
```script
git clone https://github.com/bcncodes-training/node-workspace-zipper.git
```
2. haz el _checkout_ de la rama asignada:
```script
git checkout "pair"+numero
```
3. genera los documentos demandados:
  - fichero con el módulo que genera el zipper --- `zipper.js`
  - fichero __readme.md__ con las instrucciones de uso del módulo

  > Ejecucion:
  node --experimental-modules zipper.mjs


4. sube los cambios:
```script
  git add .
  git commit -m 'msg'
  git push nombre_rama
 ```
 
 5. Crea un `pull request` con el nombre de los integrantes de cada equipo.
 
 
__Ejercicio__

Genera una utilidad para recorrer el árbol de directorios de trabajo (aka __workspace__) y comprimirlos dentro de un fichero __tar.gz__. 

__Recursos__

[__Tar__](https://es.wikipedia.org/wiki/Tar) es un programa usado para almacenar archivos y directorios en un solo archivo, __no para comprimirlos__. Dentro de los entornos Unix es un comando que se ejecuta desde un terminal. Para trabajar con archivos `tar` en Node.js podemos usar el package de npm [tar-node](https://www.npmjs.com/package/tar) que imita el comportamiento del comando en Unix.

Para comprimir el fichero `tar` generado usaremos el módulo [__zlib__](https://nodejs.org/api/zlib.html) que provee Node.js. Este módulo
ofrece el formato de compresión y descompresión __gzip__.

Para recorrer el árbol de directorios y obtener información, utiliza los métodos que proporciona el módulo __`fs`__ de node.js.

__Tareas__

Crea un módulo (preferiblemente MJS) que haga las siguientes tareas:
1. Recorre el árbol de directorios
2. Si encuentra un archivo lo añade a un array de ficheros para comprimir.
3. Si encuentra un directorio comprueba que no sea el directorio `node_modules`. 
4. Si lo es busca el siguiente elemento dentro del árbol
5. Si no es `node_modules` lee los elementos del directorio, los añade al array.
6. El proceso se ejecuta recursivamente hasta que no queda ningún elemento por leer dentro del directorio.
7. Una vez completadas las tareas se comprime el fichero `tar` a `tar.gz`.

Ejemplo:

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
    |-- node_modules
    |-- images
        |-- imagen1.jpg
    |-- main.js
    |-- package.json
```

__Bonus Track__

Generar el método para descompromir el fichero y recrear el árbol de directorios.

// Necesario instalar
npm i tar
