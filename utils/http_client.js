import axios from 'axios';

const httpClient = axios.create({
  timeout: 5000,  // Tiempo límite de espera para las solicitudes
});

export default httpClient;