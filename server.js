import mongoose from 'mongoose';   // Mongoose para la conexión a MongoDB
import app from './app.js';        // La aplicación Express configurada
import config from './config/config.js';  // Configuración de variables de entorno

// Conectar a la base de datos MongoDB
mongoose.set('strictQuery', true);

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos MongoDB');
    
    // Iniciar el servidor
    app.listen(config.port, () => {
      console.log(`Servidor escuchando en el puerto ${config.port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);  // Salir del proceso si hay un error crítico
  });

// Manejo de errores no controlados
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Opcionalmente, cerrar la conexión a la base de datos y el servidor de manera segura
  mongoose.disconnect(() => {
    process.exit(1);
  });
});
