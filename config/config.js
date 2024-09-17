import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/smart_parking',
  env: process.env.NODE_ENV || 'development',
  cameraIp: process.env.CAMERA_IP || '192.168.1.100',  // IP de la cámara Dahua
  cameraUser: process.env.CAMERA_USER || 'admin',      // Usuario de la cámara
  cameraPass: process.env.CAMERA_PASS || 'password',   // Contraseña de la cámara
};