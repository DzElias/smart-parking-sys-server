# Sistema de Gestión de Estacionamiento Inteligente

Este es un sistema de gestión de estacionamiento inteligente que permite registrar la **entrada**, **pago** y **salida** de vehículos. Cada evento se almacena en MongoDB como un **nuevo registro**, lo que facilita la generación de reportes y estadísticas sobre el uso del estacionamiento. Además, el sistema tiene la capacidad de controlar una **barrera automática** conectada a una cámara Dahua (simulada por ahora).

## Características

- Registro de eventos de entrada, pago y salida como documentos individuales en MongoDB.
- Simulación de la apertura de la barrera cuando el vehículo está autorizado para salir.
- Manejo de errores centralizado.
- Sistema modular basado en Node.js, Express, y MongoDB.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo backend.
- **Express.js**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los registros.
- **Mongoose**: ODM para MongoDB.
- **Morgan**: Middleware para registrar solicitudes HTTP.
- **Dotenv**: Manejo de variables de entorno.
- **Axios** (opcional): Cliente HTTP utilizado para interactuar con la API de la cámara.

