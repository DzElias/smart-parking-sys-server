import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import vehicleRoutes from './routes/vehicle_routes.js';
import { errorHandler } from './middlewares/error_handler.js';
import logger from './utils/logger.js';  // Importa el logger

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger); // Usar el logger con morgan y winston

// Rutas
app.use('/api/vehicles', vehicleRoutes);

// Manejo de errores
app.use(errorHandler);

export default app;
