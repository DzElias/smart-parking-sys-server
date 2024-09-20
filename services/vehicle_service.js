import Vehicle from '../models/record.js';

// Registrar la entrada del vehículo
export const registerVehicleEntry = async (licensePlate, timestamp) => {
  const vehicle = new Vehicle({ licensePlate, entryTime: timestamp });
  await vehicle.save();
  return vehicle;
};

// Procesar el pago del estacionamiento
export const processPayment = async (licensePlate) => {
  const vehicle = await Vehicle.findOne({ licensePlate: licensePlate, exitTime: null });

  if (!vehicle) throw new Error('Vehicle not found');

  vehicle.paid = true; // Marcar como pagado
  await vehicle.save();
  return { message: 'Payment successful, vehicle authorized to exit' };
};

// Verificar si el vehículo está autorizado para salir
export const checkExitAuthorization = async (licensePlate, timestamp) => {
  const vehicle = await Vehicle.findOne({ licensePlate: licensePlate, exitTime: null });
  if(vehicle && vehicle.paid == true) await Vehicle.updateOne({exitTime: null, licensePlate: licensePlate}, 
    {exitTime: Date.now()});
  if (!vehicle) throw new Error('Vehicle not found');
  
  return vehicle;
};
