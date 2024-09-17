import httpClient from '../utils/http_client.js';
import config from '../config/config.js';

// Función para abrir la barrera enviando una solicitud a la cámara Dahua
export const openBarrier = async () => {
  try {
    // const response = await httpClient.post(`http://${config.cameraIp}/cgi-bin/ioControl.cgi`, {
    //   action: 'triggerOutput',
    //   outputChannel: 1, // Canal de salida para abrir la barrera
    //   duration: 5000,   // Duración en milisegundos (5 segundos)
    // }, {
    //   auth: {
    //     username: config.cameraUser,
    //     password: config.cameraPass,
    //   }
    // });
    
    console.log('Barrera abierta:', true);
    return true;
  } catch (error) {
    console.error('Error al abrir la barrera:', error);
    throw new Error('Failed to open the barrier');
  }
};
