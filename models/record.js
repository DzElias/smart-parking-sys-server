import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true, unique: true },
  entryTime: { type: Date, default: Date.now },
  paid: { type: Boolean, default: false },
  exitTime: { type: Date },
});

export default mongoose.model('Vehicle', vehicleSchema);