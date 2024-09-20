import * as vehicleService from '../services/vehicle_service.js';
import * as cameraService from '../services/camera_service.js';

// Manejar la entrada del vehículo
export const vehicleEntry = async (req, res) => {
  try {
    const { license_plate, timestamp } = req.body;
    const vehicle = await vehicleService.registerVehicleEntry(license_plate, timestamp);
    res.status(201).json({ message: 'Vehicle registered successfully', vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Manejar el pago del estacionamiento
export const payParking = async (req, res) => {
  try {
    const { license_plate } = req.body;
    const result = await vehicleService.processPayment(license_plate);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Manejar la salida del vehículo y abrir la barrera
export const vehicleExit = async (req, res) => {
  try {
    const { license_plate, timestamp } = req.body;
    const vehicle = await vehicleService.checkExitAuthorization(license_plate, timestamp);

    if (vehicle.paid) {
      await cameraService.openBarrier(); // Enviar señal para abrir la barrera
      res.status(200).json({ message: 'Vehicle authorized to exit, opening barrier' });
    } else {
      res.status(403).json({ message: 'Payment not completed, vehicle cannot exit' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
