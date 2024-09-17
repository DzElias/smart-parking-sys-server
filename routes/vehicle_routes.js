import { Router } from 'express';
import * as vehicleController from '../controllers/vehicle_controller.js';

const router = Router();

router.post('/entry', vehicleController.vehicleEntry);  // Ruta para registrar entrada
router.post('/pay', vehicleController.payParking);      // Ruta para procesar pago
router.post('/exit', vehicleController.vehicleExit);    // Ruta para verificar salida y abrir barrera

export default router;
