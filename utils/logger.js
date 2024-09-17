import morgan from 'morgan';
import winston from 'winston';
import path from 'path';

// Configuración de Winston para registrar en un archivo y en la consola
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Logs de errores
    new winston.transports.File({ filename: 'logs/combined.log' }),               // Todos los logs
  ],
});

// Solo registrar en la consola si no es producción
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// Middleware de Morgan que usa Winston para registrar las solicitudes HTTP
const morganMiddleware = morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim()),  // Usar Winston como stream de Morgan
  },
});

export default morganMiddleware;
