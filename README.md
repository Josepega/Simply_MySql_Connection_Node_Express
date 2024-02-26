# simple_mysql_conection_node_express
## Ejemplo de conexión a MySQL mediante Express en NodeJS

### 1- Iniciar un proyecto en NodeJS
```
npm init
```
- Crea el archivo "package.json" que contiene toda la info de nuestro proyecto. Además incluye las dependencias necesarias.

### 2- Instalar las dependecias 
```
npm i express
```
```
npm i mysql
```
- Express: Servidor web completo (Peticiones, conexiones a database...)
https://expressjs.com/
- Mysql: Driver que nos permite la conexión al servidor de MySQL
https://npmjs.com/package/mysql

### 3- Desarrollo del servidor web (Express)
- Creamos el archivo (punto de entrada) "server.js". (leer comentacion en archivo)

### 4- Arrancar servidor web
```
nodemon server
```
- Para quitar la seguridad de Windows:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 5- Comprobar el servidor
- Desde el navegador, anadir la siguiente URL: http://localhost:3000/saludo (devuelve un codigo 200 ok)
- Para cualquier otra ruta, nos devolverá un código 404 not found

### 6- Crear base de datos y arrancar servidor MySQL
- Añadimos en el proyecto la carpeta "db" con el SQL que crea la base de datos "simple_mysql_conection_node_express"
- Se ejecuta el .sql desde MySQL Workbench
- Creamos una nueva ruta "/conexion" para gestionar con un mensaje de ok o ko la conexión a MySQL
