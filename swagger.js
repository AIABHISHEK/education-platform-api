const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Educational Platform API',
        version: '1.0.0',
        description: 'API documentation for the Educational Platform',
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'Local development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to your API routes files
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`API docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
