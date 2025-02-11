const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GoBike API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};