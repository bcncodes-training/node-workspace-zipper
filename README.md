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



/* Resultado Consola

PS C:\CIFO-MS3\workspace\node-workspace-zipper> node --experimental-modules zipper.mjs
(node:20948) ExperimentalWarning: The ESM module loader is experimental.
Archivo Comprimido: ..//30-09-2019.js
Archivo Comprimido: ..//await-chrismasjokes/launch.js
Archivo Comprimido: ..//BufferEj1/index.js
Archivo Comprimido: ..//comprameunmovilasync/main.js
Archivo Comprimido: ..//comprameunmovilasync/main2.js
Archivo Comprimido: ..//comprameunmovilasync/master.js
Archivo Comprimido: ..//comprameunmovilasync/nuevo.js
Archivo Comprimido: ..//conexion-mongo/index.js
Not attached: Current directory: node_modules in ..//conexion-mongo
Archivo Comprimido: ..//conexion-mongo/package-lock.json
Archivo Comprimido: ..//Ej1-mapReduce-Mongo/ej1MapReduce.js
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/COMMIT_EDITMSG
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/config
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/description
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/HEAD
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/applypatch-msg.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/commit-msg.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/fsmonitor-watchman.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/post-update.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/pre-applypatch.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/pre-commit.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/pre-push.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/pre-rebase.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/pre-receive.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/prepare-commit-msg.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/hooks/update.sample
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/index
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/info/exclude
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/logs/HEAD
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/logs/refs/heads/master
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/objects/5b/7d57e68707ddb3690117009a508d9aefd2fe8e
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/objects/ac/69fa0f8076b9c4789b5d141acae68b782ad75e
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/objects/ad/4eba8dd0e23406548db417d9ef08660bc6071d
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/objects/e0/f2a5180a15a293c568284da08f8255bbef5b77
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/objects/ef/ee604bd927ce5ab73f31e14eaaa50c09b8f665
Archivo Comprimido: ..//ej1restaurantes-mongo/.git/refs/heads/master
Archivo Comprimido: ..//ej1restaurantes-mongo/Mongo-queries-1.txt
Archivo Comprimido: ..//ej1restaurantes-mongo/Mongo-queries-2.js
Archivo Comprimido: ..//ej1restaurantes-mongo/Mongo-queries-2.txt
Archivo Comprimido: ..//ej1restaurantes-mongo/primer-dataset.json
Archivo Comprimido: ..//ej2-mongo/ejpoblacion.js
Archivo Comprimido: ..//ejasyncawait/main.js
Archivo Comprimido: ..//ejEmitterListener/counter.mjs
Archivo Comprimido: ..//ejEmitterListener/counterDesacoplado-Clase.zip
Archivo Comprimido: ..//ejEmitterListener/countermain.mjs
Archivo Comprimido: ..//ejEmitterListener/main.mjs
Archivo Comprimido: ..//ejEmitterListener/master.mjs
Not attached: Current directory: node_modules in ..//ejEmitterListener
Archivo Comprimido: ..//ejEmitterListener/package-lock.json
Archivo Comprimido: ..//ejEmitterListener/segundo.mjs
Archivo Comprimido: ..//ejerc6promesas/index.mjs
Archivo Comprimido: ..//ejerc6promesas/index2.mjs
Archivo Comprimido: ..//ejercicio1/.git/COMMIT_EDITMSG
Archivo Comprimido: ..//ejercicio1/.git/config
Archivo Comprimido: ..//ejercicio1/.git/description
Archivo Comprimido: ..//ejercicio1/.git/HEAD
Archivo Comprimido: ..//ejercicio1/.git/hooks/applypatch-msg.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/commit-msg.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/fsmonitor-watchman.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/post-update.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/pre-applypatch.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/pre-commit.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/pre-push.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/pre-rebase.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/pre-receive.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/prepare-commit-msg.sample
Archivo Comprimido: ..//ejercicio1/.git/hooks/update.sample
Archivo Comprimido: ..//ejercicio1/.git/index
Archivo Comprimido: ..//ejercicio1/.git/info/exclude
Archivo Comprimido: ..//ejercicio1/.git/logs/HEAD
Archivo Comprimido: ..//ejercicio1/.git/logs/refs/heads/feature
Archivo Comprimido: ..//ejercicio1/.git/logs/refs/heads/master
Archivo Comprimido: ..//ejercicio1/.git/logs/refs/remotes/origin/feature
Archivo Comprimido: ..//ejercicio1/.git/logs/refs/remotes/origin/master
Archivo Comprimido: ..//ejercicio1/.git/objects/03/088e709ee4d851e3b2f4492db47b66cb4ce77e
Archivo Comprimido: ..//ejercicio1/.git/objects/06/0640a7acadbc3c2dd973bd2a88fdbd95ad21c5
Archivo Comprimido: ..//ejercicio1/.git/objects/16/6c31070ae3e3a30b0f5ab3b4f862dda96c65db
Archivo Comprimido: ..//ejercicio1/.git/objects/27/849ff4707879064ca0461bba4241347c096d76
Archivo Comprimido: ..//ejercicio1/.git/objects/4e/6116424d0a0d9e601ea4ce691a5477d9088db2
Archivo Comprimido: ..//ejercicio1/.git/objects/b1/9cd329f8e5bf82d9eb8e9adab6b864af8f3270
Archivo Comprimido: ..//ejercicio1/.git/objects/b5/12c09d476623ff4bf8d0d63c29b784925dbdf8
Archivo Comprimido: ..//ejercicio1/.git/objects/be/c15a9d80143de4187a7add441148e7b7fa6ff7
Archivo Comprimido: ..//ejercicio1/.git/objects/e4/26dc9bdb214079af698ca130e9169bdb35d1ce
Archivo Comprimido: ..//ejercicio1/.git/objects/f2/accd791c34d65177dbaa2347a33774399c4358
Archivo Comprimido: ..//ejercicio1/.git/objects/fa/ba68bbc1125d6603facd5409f110b1af71f041
Archivo Comprimido: ..//ejercicio1/.git/objects/fb/c9316c0ff2435d8005824a0e40d4f9f182ce0a
Archivo Comprimido: ..//ejercicio1/.git/objects/fe/26d4f15766e5e44e7a4caa5ee2660c29119151
Archivo Comprimido: ..//ejercicio1/.git/objects/fe/c522d78ccf396ec668109f0d2580556a352234
Archivo Comprimido: ..//ejercicio1/.git/objects/ff/cceafcea283947d33f77020f50ab96686f7b75
Archivo Comprimido: ..//ejercicio1/.git/ORIG_HEAD
Archivo Comprimido: ..//ejercicio1/.git/refs/heads/feature
Archivo Comprimido: ..//ejercicio1/.git/refs/heads/master
Archivo Comprimido: ..//ejercicio1/.git/refs/remotes/origin/feature
Archivo Comprimido: ..//ejercicio1/.git/refs/remotes/origin/master
Archivo Comprimido: ..//ejercicio1/.gitignore
Archivo Comprimido: ..//ejercicio1/index.js
Not attached: Current directory: node_modules in ..//ejercicio1
Archivo Comprimido: ..//ejercicio1/package-lock.json
Archivo Comprimido: ..//ejercicio1/package.json
Archivo Comprimido: ..//Ejercicio11/main.mjs
Archivo Comprimido: ..//Ejercicio11/movieDetails.json
Archivo Comprimido: ..//Ejercicio11/process.mjs
Archivo Comprimido: ..//index.js
Archivo Comprimido: ..//mongo-ecommerce/.git/COMMIT_EDITMSG
Archivo Comprimido: ..//mongo-ecommerce/.git/config
Archivo Comprimido: ..//mongo-ecommerce/.git/description
Archivo Comprimido: ..//mongo-ecommerce/.git/HEAD
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/applypatch-msg.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/commit-msg.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/fsmonitor-watchman.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/post-update.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/pre-applypatch.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/pre-commit.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/pre-push.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/pre-rebase.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/pre-receive.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/prepare-commit-msg.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/hooks/update.sample
Archivo Comprimido: ..//mongo-ecommerce/.git/index
Archivo Comprimido: ..//mongo-ecommerce/.git/info/exclude
Archivo Comprimido: ..//mongo-ecommerce/.git/logs/HEAD
Archivo Comprimido: ..//mongo-ecommerce/.git/logs/refs/heads/master
Archivo Comprimido: ..//mongo-ecommerce/.git/logs/refs/heads/pair3
Archivo Comprimido: ..//mongo-ecommerce/.git/logs/refs/remotes/origin/HEAD
Archivo Comprimido: ..//mongo-ecommerce/.git/logs/refs/remotes/origin/pair3
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/04/dee298f8ab0e627849c47209872f6ba33adcab
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/0d/809c494cc1da8ff04e29108fcbe2896dc3d387
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/12/cd59a7aca5f82b2b2c9a94004c35ebbad0b5f5
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/16/02acd31040707830df8372fcb2a8b90e6b04bd
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/38/e138dbe3f19b514eec0476f855b32a5de2880d
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/41/e575aebbba7b8a27971a499545e3710fd2d2b1
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/46/2a231f1934f70cf84b5eeeaf4615de7aa4cb31
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/52/75e4490ae31ecf7738cd968915b8018d992690
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/6d/4a18c6bf781d66c31eb84aa12c4dee7d86a934
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/a0/3ba17e707dce2fa9729961fbfaf6868425071b
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/a5/bac5c0f2cc55f8d07da44b5e316611fd94c4bf
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/d7/4bbcd23afd28c915c8acb74cf94b3250d27c22
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/d8/55a99aff4b75c2ecdd153db361f2db8eda7247
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/da/24138a2547f96a1d5a09d08911407bc8007f8c
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/db/22000046a1e0ec98f88844e0be9c1977157e72
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/ec/85040b01ebe320e00789dd3fee7420c5175c96
Archivo Comprimido: ..//mongo-ecommerce/.git/objects/fd/2c35cf28ad682dbbe875081076970f85840c87
Archivo Comprimido: ..//mongo-ecommerce/.git/packed-refs
Archivo Comprimido: ..//mongo-ecommerce/.git/refs/heads/master
Archivo Comprimido: ..//mongo-ecommerce/.git/refs/heads/pair3
Archivo Comprimido: ..//mongo-ecommerce/.git/refs/remotes/origin/HEAD
Archivo Comprimido: ..//mongo-ecommerce/.git/refs/remotes/origin/pair3
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/carrito.bson
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/carrito.metadata.json
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/categorias.bson
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/categorias.metadata.json
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/productos.bson
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/productos.metadata.json
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/usuario.bson
Archivo Comprimido: ..//mongo-ecommerce/BBDD/Tienda_Jimena/usuario.metadata.json
Archivo Comprimido: ..//mongo-ecommerce/README.md
Archivo Comprimido: ..//mongo-mapreduce/.git/config
Archivo Comprimido: ..//mongo-mapreduce/.git/description
Archivo Comprimido: ..//mongo-mapreduce/.git/HEAD
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/applypatch-msg.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/commit-msg.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/fsmonitor-watchman.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/post-update.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/pre-applypatch.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/pre-commit.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/pre-push.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/pre-rebase.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/pre-receive.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/prepare-commit-msg.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/hooks/update.sample
Archivo Comprimido: ..//mongo-mapreduce/.git/index
Archivo Comprimido: ..//mongo-mapreduce/.git/info/exclude
Archivo Comprimido: ..//mongo-mapreduce/.git/logs/HEAD
Archivo Comprimido: ..//mongo-mapreduce/.git/logs/refs/heads/master
Archivo Comprimido: ..//mongo-mapreduce/.git/logs/refs/remotes/origin/HEAD
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/06/5b0318b66a0a2646e532701a33a78ceb83c14d
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/0b/73d206c7a7392af0ce42d06ccf931e23efa755
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/14/2896b3147a3623a3f92ad916af5d09d4d0c17b
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/14/4b5ce4f3151e7528009d7c68c30dcf51ebc2d3
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/22/e8846bd1dbc63b1f8029f42dbea2b25af5614c
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/37/769a666ac05ec8382f882ba7b3d9b61cf145f7
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/4f/4ffb742ea9f7e8a6844da58f60906e189f93b7
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/54/f9a48270ec52393039f1ce81a1d2ad82cd0012
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/64/41d860fae61cdd1b4deac89eb857e95f0bec98
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/7b/b55ef25ba413a53737fb58b132a2ec63d6d2bf
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/81/ce900ecd09539478441042fcf40d2c14b0a46f
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/bd/6882cf12298a5f23e8d2554bedf0abf7dc859c
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/e6/4c73738afd98b06443e710fac79fca860023f2
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/ea/6db64ece61bf219e95187d631ebcbbde58a5b5
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/f7/d0bc9c8178a1b6663d583c426019a57816b0d3
Archivo Comprimido: ..//mongo-mapreduce/.git/objects/fd/c17d9060e6723fc2bb8ed0bc73c0f961ff93f2
Archivo Comprimido: ..//mongo-mapreduce/.git/packed-refs
Archivo Comprimido: ..//mongo-mapreduce/.git/refs/heads/master
Archivo Comprimido: ..//mongo-mapreduce/.git/refs/remotes/origin/HEAD
Archivo Comprimido: ..//mongo-mapreduce/movieDetails.json
Archivo Comprimido: ..//mongo-mapreduce/people-bson.zip
Archivo Comprimido: ..//mongo-mapreduce/README.md
Archivo Comprimido: ..//mongo-mapreduce-master/movieDetails.json
Archivo Comprimido: ..//mongo-mapreduce-master/people-bson/people.bson.gz
Archivo Comprimido: ..//mongo-mapreduce-master/people-bson/people.metadata.json.gz
Archivo Comprimido: ..//mongo-mapreduce-master/people-bson.zip
Archivo Comprimido: ..//mongo-mapreduce-master/README-result.js
Archivo Comprimido: ..//mongo-mapreduce-master/README.md
Archivo Comprimido: ..//mongo-queries-2/Mongo-queries-2.js
Archivo Comprimido: ..//mongo-queries-2-master/mongo-queries-2-master/departamentos.js
Archivo Comprimido: ..//mongo-queries-2-master/mongo-queries-2-master/empleados.js
Archivo Comprimido: ..//mongo-queries-2-master/mongo-queries-2-master/Libreria.js
Archivo Comprimido: ..//mongo-queries-2-master/mongo-queries-2-master/posts.js
Archivo Comprimido: ..//mongo-queries-2-master/mongo-queries-2-master/readme.md
Archivo Comprimido: ..//mongo-queries-2-master/mongo-queries-2-master/trabaja.js
Archivo Comprimido: ..//mongo-queries-3/mongo-queries-3-master/airbnb.zip
Archivo Comprimido: ..//mongo-queries-3/mongo-queries-3-master/readme.md
Archivo Comprimido: ..//mongo-queries-3/mongo-queries-3-master/social.json
Archivo Comprimido: ..//mongo-queries-3-master/airbnb.json
Archivo Comprimido: ..//mongo-queries-3-master/airbnb.zip
Archivo Comprimido: ..//mongo-queries-3-master/readme.md
Archivo Comprimido: ..//mongo-queries-4/media.json
Archivo Comprimido: ..//mongo-queries-4/Mongo-queries-4.js
Archivo Comprimido: ..//mongo-queries-4/README.md
Archivo Comprimido: ..//mongo-queries-4-master/media.json
Archivo Comprimido: ..//mongo-queries-4-master/README.md
Archivo Comprimido: ..//node-intro-master/index-anterior.js
Archivo Comprimido: ..//node-intro-master/node-intro/.git/COMMIT_EDITMSG
Archivo Comprimido: ..//node-intro-master/node-intro/.git/config
Archivo Comprimido: ..//node-intro-master/node-intro/.git/description
Archivo Comprimido: ..//node-intro-master/node-intro/.git/HEAD
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/applypatch-msg.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/commit-msg.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/fsmonitor-watchman.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/post-update.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/pre-applypatch.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/pre-commit.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/pre-push.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/pre-rebase.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/pre-receive.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/prepare-commit-msg.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/hooks/update.sample
Archivo Comprimido: ..//node-intro-master/node-intro/.git/index
Archivo Comprimido: ..//node-intro-master/node-intro/.git/info/exclude
Archivo Comprimido: ..//node-intro-master/node-intro/.git/logs/HEAD
Archivo Comprimido: ..//node-intro-master/node-intro/.git/logs/refs/heads/master
Archivo Comprimido: ..//node-intro-master/node-intro/.git/logs/refs/heads/pair3
Archivo Comprimido: ..//node-intro-master/node-intro/.git/logs/refs/remotes/origin/HEAD
Archivo Comprimido: ..//node-intro-master/node-intro/.git/logs/refs/remotes/origin/pair3
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/06/39aec955d32c57f7548bd94cfab4243f726069
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/17/b7b321c5e27295449d289595f564eb23328317
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/1a/e87a7f6cefb0a5bd35959abf88c99846b052c6
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/26/fd1cbd6f6b6259c1fa29c3db322759f4aa22f8
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/2a/cd0115a774aaf10a4bad3c1e3aff75e3cdbdb9
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/2c/6f4cdeb2a1810078bfd1e2b1ee2cdbc59c7783
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/30/23beb14475a1a374479f3a554b3108b0e3b68a
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/34/470f9f9b0c1c0b98259e4d5b941faf679b66e7
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/35/907e29cb0551e6fe93289f849cbc94c962aae8
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/3d/014dff410550e7eba1a6e1b05ca86f423f4cc9
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/56/bc62b98273c6ff71e249ecac45b76cdf7dd940
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/57/f8b905bdf26f1530b496707013ead08336f0f5
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/5c/7b48bd11b5d3b470da723272e1162d5077f0d9
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/68/f20e536c0c324e55d51319ce1f642617fea2fb
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/72/5dfb8e10ac0993f78ad92fd978b8791a3d6e4b
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/76/bb216233c6e16768af6f0bce0e860da22a726d
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/76/ded4a8beb5829c1be56d13bff588fc5174e797
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/7c/880e7442e2e6a53eaf09fc74d062d89b73b00f
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/7f/1b7b082718c123bb045751253556287cf120ce
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/83/42a96c42fac028bab92b01206f1093822f4c52
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/8e/63b75462ab96bcffbc28fde8a7df04ecfc568b
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/91/9d3dae1e641976c2218916034a19a7fc831338
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/99/42300295b6e9388aa17997c4250f7657116716
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/9f/e04969877099fd4abb9758d4f216e27beca829
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/a1/411772dca983b15bcd90a42f09a54ab5e3f66a
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/a6/0270b10509639d94d9c41f4762041d3e33068e
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/b3/03fd0fc89c474fc8a3eb414d489903e615f05f
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/b5/2b1b3083047511f1e6e23ccb1496bec9bfdd98
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/bc/d848a8d98020fd64802eb37c88233cd4a606f4
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/c4/deda81cffe150f378f6fc8b3f1204fa0f16d68
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/cf/3b84f885757202d891fc3a00ca573eca55f7be
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/d8/6d3d66ca8cbc0b435f0d14d08b6d4f94f69195
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/d9/d1d2a66c17244b5b38595658646db3c3c02f2b
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/dc/63d7e36e55cd60b88984e4fc961b0341f1e9a9
Archivo Comprimido: ..//node-intro-master/node-intro/.git/objects/eb/152cd64b68104248ccca36a73a316d3c00df44
Archivo Comprimido: ..//node-intro-master/node-intro/.git/packed-refs
Archivo Comprimido: ..//node-intro-master/node-intro/.git/refs/heads/master
Archivo Comprimido: ..//node-intro-master/node-intro/.git/refs/heads/pair3
Archivo Comprimido: ..//node-intro-master/node-intro/.git/refs/remotes/origin/HEAD
Archivo Comprimido: ..//node-intro-master/node-intro/.git/refs/remotes/origin/pair3
Archivo Comprimido: ..//node-intro-master/node-intro/.gitignore
Archivo Comprimido: ..//node-intro-master/node-intro/README.md
Archivo Comprimido: ..//node-intro-master/node-intro/starter-code/index.js
Archivo Comprimido: ..//node-intro-master/node-intro/starter-code/package.json
Archivo Comprimido: ..//node-intro-master/node-intro/starter-code/test/test.js
Archivo Comprimido: ..//node-workspace-zipper/.git/COMMIT_EDITMSG
Archivo Comprimido: ..//node-workspace-zipper/.git/config
Archivo Comprimido: ..//node-workspace-zipper/.git/description
Archivo Comprimido: ..//node-workspace-zipper/.git/HEAD
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/applypatch-msg.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/commit-msg.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/fsmonitor-watchman.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/post-update.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/pre-applypatch.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/pre-commit.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/pre-push.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/pre-rebase.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/pre-receive.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/prepare-commit-msg.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/hooks/update.sample
Archivo Comprimido: ..//node-workspace-zipper/.git/index
Archivo Comprimido: ..//node-workspace-zipper/.git/info/exclude
Archivo Comprimido: ..//node-workspace-zipper/.git/logs/HEAD
Archivo Comprimido: ..//node-workspace-zipper/.git/logs/refs/heads/master
Archivo Comprimido: ..//node-workspace-zipper/.git/logs/refs/heads/pair3
Archivo Comprimido: ..//node-workspace-zipper/.git/logs/refs/remotes/origin/HEAD
Archivo Comprimido: ..//node-workspace-zipper/.git/logs/refs/remotes/origin/pair3
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/0b/825b53a6bf068c1f6c280fd427b95ecda82dbb
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/0c/76c19e94612b35ea6ab22d4b3b858c2a4fc82a
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/24/138d6a83f7c74565846ea10bf02f51333e970a
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/44/47d3dff17edea21113b36d774ee24822164ede
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/52/8a1e1c2dc566de36343ba5ba8766e4d808fb8c
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/58/5a8c7510313a56c3bc40dae60fda353148f25f
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/61/1662a920a6707b4bc8f4625cce522fba06de38
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/64/26038dc2a2bad4f5523aea6e6dd0623d1aedb2
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/67/c1e6d48fcc6a86516759727abdd513ffce203d
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/7b/5150382451068283c508f6cc64a9e8216f34cb
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/7b/799cd0df77805efd33b5ce575e5a7e8778ae3f
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/87/f75b867a91ab7391e5d8edf11a35601ac44c5e
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/99/f3de91cf41f304eb2cd2fa4cf93a5ff0bc483a
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/a4/1310ea7f94c275b6d528ce0096425a8a7517ba
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/bd/4f30e1a36aa05ea3087daa4b370aa6770c1257
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/bf/da75b27a872de6fdd77dba09fdc8e8bd7fd85c
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/c1/e9140f46c61b75cdb03172f37ccad660ddcef4
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/c2/05c52d5425e8e25b14134cb728425c59462ae8
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/c3/42cffc8d64e7825b8d5e2046c0f6d588facc5c
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/c4/d87767da180e7e1db8d43318f8f9c46e4be86d
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/d1/f1a5e9c4cde57426a876299c77692255b8998e
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/dc/5554f156d0c634da3635a3ce4557398ee11818
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/dd/525fb42d0621e29a51fafb166b6c3eec385eaa
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/e3/4903072db49a154a41196cb8a77d6d46e9268e
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/e4/a7d1405df3f11aeea1fee362b3027febd16612
Archivo Comprimido: ..//node-workspace-zipper/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391
Archivo Comprimido: ..//node-workspace-zipper/.git/packed-refs
Archivo Comprimido: ..//node-workspace-zipper/.git/refs/heads/master
Archivo Comprimido: ..//node-workspace-zipper/.git/refs/heads/pair3
Archivo Comprimido: ..//node-workspace-zipper/.git/refs/remotes/origin/HEAD
Archivo Comprimido: ..//node-workspace-zipper/.git/refs/remotes/origin/pair3
Archivo Comprimido: ..//node-workspace-zipper/.vscode/launch.json
Archivo Comprimido: ..//node-workspace-zipper/my-workSpace.tar
Not attached: Current directory: node_modules in ..//node-workspace-zipper
Archivo Comprimido: ..//node-workspace-zipper/package-lock.json
Archivo Comprimido: ..//node-workspace-zipper/README.md
Archivo Comprimido: ..//node-workspace-zipper/ws.gz
Archivo Comprimido: ..//node-workspace-zipper/zipper.mjs
Archivo Comprimido: ..//node-workspace-zipper/zipper.mjs.gz
Archivo Comprimido: ..//paginar/paginar.js
Archivo Comprimido: ..//PromiseAll/main.js
Archivo Comprimido: ..//PromiseAll/package-lock.json
Archivo Comprimido: ..//prueba-chalk/index.js
Not attached: Current directory: node_modules in ..//prueba-chalk
Archivo Comprimido: ..//prueba-chalk/package-lock.json
Archivo Comprimido: ..//prueba-chalk/package.json
Archivo Comprimido: ..//prueba-mongo/contactos.json
Archivo Comprimido: ..//prueba-mongo/datos-json.txt
Archivo Comprimido: ..//prueba-node/index.js
Not attached: Current directory: node_modules in ..//prueba-node
Archivo Comprimido: ..//prueba-node/package-lock.json
Archivo Comprimido: ..//prueba-node/package.json
Archivo Comprimido: ..//prueba-package/.git/COMMIT_EDITMSG
Archivo Comprimido: ..//prueba-package/.git/config
Archivo Comprimido: ..//prueba-package/.git/description
Archivo Comprimido: ..//prueba-package/.git/FETCH_HEAD
Archivo Comprimido: ..//prueba-package/.git/HEAD
Archivo Comprimido: ..//prueba-package/.git/hooks/applypatch-msg.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/commit-msg.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/fsmonitor-watchman.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/post-update.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/pre-applypatch.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/pre-commit.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/pre-push.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/pre-rebase.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/pre-receive.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/prepare-commit-msg.sample
Archivo Comprimido: ..//prueba-package/.git/hooks/update.sample
Archivo Comprimido: ..//prueba-package/.git/index
Archivo Comprimido: ..//prueba-package/.git/info/exclude
Archivo Comprimido: ..//prueba-package/.git/logs/HEAD
Archivo Comprimido: ..//prueba-package/.git/logs/refs/heads/master
Archivo Comprimido: ..//prueba-package/.git/logs/refs/remotes/origin/add-license-1
Archivo Comprimido: ..//prueba-package/.git/logs/refs/remotes/origin/master
Archivo Comprimido: ..//prueba-package/.git/objects/00/6e9f6364133e750bbba7dedefc2ca1bf6cac08
Archivo Comprimido: ..//prueba-package/.git/objects/08/db2d0c71c039ed388dd253bae036d1caf43de3
Archivo Comprimido: ..//prueba-package/.git/objects/14/86cf1d791327c7e9711a6720fd544395f49125
Archivo Comprimido: ..//prueba-package/.git/objects/17/2df35a3cc7c9a8ed163301f4a171ef7631d1bc
Archivo Comprimido: ..//prueba-package/.git/objects/19/f0a4602c6735ce2d961b7dd78b287b41b6e08f
Archivo Comprimido: ..//prueba-package/.git/objects/26/de98c8f6cbfaece4291e65d08cfdc5fe75c147
Archivo Comprimido: ..//prueba-package/.git/objects/4d/3759b063581b3670f24dbc66ac18c36d0b2bf4
Archivo Comprimido: ..//prueba-package/.git/objects/4f/d7c6bf46fd85f0b1dd8a20b8275e0924f349fc
Archivo Comprimido: ..//prueba-package/.git/objects/5b/955edce708b6d2ee914cbe5ced43b6e361917a
Archivo Comprimido: ..//prueba-package/.git/objects/5d/dcc13879d3ef101c1bbbafab3d1c7b044e7373
Archivo Comprimido: ..//prueba-package/.git/objects/60/2cec1ed05ebdb1046bdea00b1d7a20f23ca07e
Archivo Comprimido: ..//prueba-package/.git/objects/67/886596c6e3c644773872d654c4f0c0e4617a56
Archivo Comprimido: ..//prueba-package/.git/objects/6e/5edfd86b949daaa84d51eba49cc0588b7ca918
Archivo Comprimido: ..//prueba-package/.git/objects/72/9645c63f0a0645510b9aa7b9fc99530b308b17
Archivo Comprimido: ..//prueba-package/.git/objects/88/0a7ee9442bfbd9e6812418e25773e7c0e9945c
Archivo Comprimido: ..//prueba-package/.git/objects/89/9741876b79e1c02cbf8b49e6770a8354e2e0a3
Archivo Comprimido: ..//prueba-package/.git/objects/8a/e8479eaedbb5196bb5797edd27af8a61a17eab
Archivo Comprimido: ..//prueba-package/.git/objects/8d/487c7274196aa5bb454cbb8701e65f49bbf430
Archivo Comprimido: ..//prueba-package/.git/objects/95/d02f0a744f7eba91ca77546af135df91e9bce7
Archivo Comprimido: ..//prueba-package/.git/objects/9a/2c5edf0440f868a81658aa7ce1d6963182ddfc
Archivo Comprimido: ..//prueba-package/.git/objects/9a/31cebdd7813897dca81a5795279e57867aa9ec
Archivo Comprimido: ..//prueba-package/.git/objects/a7/9b4a474d6a2e53d7769c06e94e0d8fa8847344
Archivo Comprimido: ..//prueba-package/.git/objects/b0/c0d9e344e1b8d6becd77fda9ed780bd2f53246
Archivo Comprimido: ..//prueba-package/.git/objects/b3/0549e41dbd688833ea11a1e6aeb427d1feb284
Archivo Comprimido: ..//prueba-package/.git/objects/b5/12c09d476623ff4bf8d0d63c29b784925dbdf8
Archivo Comprimido: ..//prueba-package/.git/objects/b8/ac729294872168b96209f5f56763e01f37bdd2
Archivo Comprimido: ..//prueba-package/.git/objects/c1/93e9e9e832a57499419e346199305ee265280b
Archivo Comprimido: ..//prueba-package/.git/objects/c9/85d11894de8809dfb4a0f552f837eee54f9347
Archivo Comprimido: ..//prueba-package/.git/objects/d7/3cbf2f6e59198eb2d646b4d6f661d1124c810f
Archivo Comprimido: ..//prueba-package/.git/objects/e3/c66c348cc041c1a2f26a004051d83932df4755
Archivo Comprimido: ..//prueba-package/.git/objects/e4/b3cb37a3f9286b6deb2c086a840739c9a43bd1
Archivo Comprimido: ..//prueba-package/.git/objects/ea/352c622e2e411f4539fc5ec7e16316a44d4943
Archivo Comprimido: ..//prueba-package/.git/objects/f8/89c2b46494c77f565d8ecd03b214a6063b0daf
Archivo Comprimido: ..//prueba-package/.git/objects/ff/0ff6b192a540f9c632d8efeb3d9d1e81f198d5
Archivo Comprimido: ..//prueba-package/.git/ORIG_HEAD
Archivo Comprimido: ..//prueba-package/.git/refs/heads/master
Archivo Comprimido: ..//prueba-package/.git/refs/remotes/origin/add-license-1
Archivo Comprimido: ..//prueba-package/.git/refs/remotes/origin/master
Archivo Comprimido: ..//prueba-package/.git/refs/tags/v2.0.0
Archivo Comprimido: ..//prueba-package/.gitignore
Archivo Comprimido: ..//prueba-package/index.js
Archivo Comprimido: ..//prueba-package/package-lock.json
Archivo Comprimido: ..//prueba-package/package.json
Archivo Comprimido: ..//prueba-package/README.md
Archivo Comprimido: ..//RelojEvEmitter/counter.mjs
Archivo Comprimido: ..//RelojEvEmitter/countermain.mjs
Archivo Comprimido: ..//Streams/ejercicio12.mjs
Archivo Comprimido: ..//Streams/input.txt
Archivo Comprimido: ..//Streams/main.mjs
Archivo Comprimido: ..//test.js
internal/buffer.js:940
class FastBuffer extends Uint8Array {}
^

RangeError: Array buffer allocation failed
    at new ArrayBuffer (<anonymous>)
    at new Uint8Array (<anonymous>)
    at new FastBuffer (internal/buffer.js:940:1)
    at createUnsafeBuffer (buffer.js:121:12)
    at allocate (buffer.js:382:10)
    at Function.allocUnsafe (buffer.js:347:10)
    at Object.[onread] (C:\CIFO-MS3\workspace\node-workspace-zipper\node_modules\tar\lib\write-entry.js:280:20)
    at C:\CIFO-MS3\workspace\node-workspace-zipper\node_modules\tar\lib\write-entry.js:230:19
    at FSReqCallback.wrapper [as oncomplete] (fs.js:481:5)