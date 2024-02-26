const express = require('express'); // importar paquete Express
const mysql = require('mysql');// importar paquete MySql

const server = express();// Se crea objeto instancia para utilizar sus Funciones
const port = 3000; // Puerto del WebServer

// rutas
// Metodo get: Método HTTP que se utiliza para requerir (leer) recursos del servidor

server.get ('/saludo', (req, res) => {
// Respondo con el método "send" (envia texto plano) al cliente que hace un peticion por GET a la ruta "/saludo"
res.send('Hi World');
});

// levanta servidor (empieza a escuchar peticiones)
server.listen(port, () => {
    console.log("Servidor corriendo por el puerto: " + port);
  });

  // ruta que devuelve un mensaje de ok y ko de la conexion a MySQL
server.get('/conexion', (req, res) => {
    try {
      const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'MyDBB'
      });
      connection.connect((err) => {
        if (err) {
          res.send('Error en la conexion MySQL');
        } else {
          res.send('Conexión correcta!');
        }
      });
    } catch (error) {
      res.send("Error en la conexión con el server MySQL");
    }
  });