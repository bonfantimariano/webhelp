
# Introducción
MD Developers recibió el encargo de preparar un prototipo para mostrar un listado de naves starwars solo para usuarios registrados. El prototipo gustó mucho y fue aprobado por el comité de la empresa como proyecto para 2019.

Tu equipo acaba de recibir el encargo de adaptar este prototipo y convertirlo en un producto real.
Tienes potestad para cambiar lo que quieras pero se deben cumplir unos mínimos.

### Requisitos mínimos

* El listado de naves solo puede ser visible para usuarios registrados.
* El listado de naves debe ser consumido desde el api proporcionada por nuestro proveedor: https://swapi.co
* Se deben poder registrar nuevos usuarios. No es necesario implementar la parte de servidor.

### Tareas

El equipo tiene una capacidad de 45 puntos por sprint y a ti te ha tocado realizar **15 puntos**
Elige las tareas que creas que mejor se adaptan a tus conocimientos. Justifica por que las has elegido 


- Creación de una ficha de detalle de la nave:
  - Se quiere crear una ficha que se abra al hacer click sobre una de las naves que aparecen. Se debe implementar un botón de volver al listado. **5 puntos**
- Modernización del site. Cambia los estilos que creas pertinentes. El único criterio es que a  dirección le gustaría que se pareciera lo máximo posible a la web de Massimo Dutti. **5 puntos**
- Correcciones:
  - Listado naves: Actualmente puedes hacer click al botón “ver más” de forma infinita, se debe arreglar.
  - Listado naves: Hay imágenes que no existen, en ese caso se debe mostrar un texto o imagen informando que no está disponible.
- Cuando entras por primera vez te debe redirigir a la página de naves.
- Implementar una caché del lado de cliente para proteger la api:
  - Implementa un sistema de caché que evite realizar la misma petición contra el servidor durante 5 minutos.
  - Para resolver este punto puedes hacerlo mediante localStorage **5 Puntos**
- Implementar un menú para los usuarios registrados:
   - Este menú debe permitir cambiar de página. Crea una página de prueba para comprobar que funcione. **5 Puntos**
- Actualización a Angular 7: Aunque esto se realizaría en una fase 2, se ha pedido actualizar a la versión 7 de Angular.  La tarea consistirá en, manteniendo la funcionalidad, adaptar el código a Angular 7. Para esta tarea hay total libertad de empezar de 0 pero se deben mantener las funcionalidades mínimas descritas en el apartado “Requisitos mínimos”. **15 puntos**
- Tests unitarios: Aplica test unitarios al componente starship.service y starship-list.component **5 Puntos**

### Tarea seleccionada
 
-->  Actualización a Angular 7: Elegi esta tarea por que me gusta comenzar las cosas de 0 y me siento mucho mas comodo con las nuevas versiones de angular. Tambien por que tenia un valor de 15 puntos.

# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio público. Preferiblemente en github.
  --> https://github.com/bonfantimariano/webhelp.git
- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. No tengas miedo por subir cosas a medias o sin finalizar. Nos interesa ver cómo te desenvuelves y cómo trabajas. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.


### Instalación

Download or clone the project source code from https://github.com/bonfantimariano/webhelp.git

* Para instalar backend:
    * Install NodeJS and NPM from  https://nodejs.org/en/download/.
    * Install MongoDB Community Server from  https://www.mongodb.com/download-center.
    * Run MongoDB, instructions are available on the install page for each OS at https://docs.mongodb.com/manual/administration/install-community/
    * Install all required npm packages by running npm install from the command line in the project root folder (where the package.json is located). <pre><code> npm install </code></pre>

* Para ejecutar backend:
    * Start the api by running npm start from the command line in the project root folder, you should see the message Server listening on port 4000. <pre><code> npm start </code></pre>

* Para instalar frontend:
    * Install Agular <pre><code> npm install -g @angular/cli </code></pre>
    * Install all required npm packages by running npm install from the command line in the project root folder (where the package.json is located). <pre><code> npm install </code></pre> 
* Para ejecutar frontend:
    * Start the api by running npm start from the command line in the project root folder, you should see the message Server listening on port 4200. <pre><code> npm start </code></pre> 
