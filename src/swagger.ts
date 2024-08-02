import swaggerJsdoc from 'swagger-jsdoc';
import { Investiment } from './models/investiment';
import { investimentSchema } from './swagger-schemas/investiment-schema';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API application documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Investiment: investimentSchema
        },
      },
    },
  apis: ['./src/api/*.ts'], // path where your API routes are defined
};

const specs = swaggerJsdoc(options);
export default specs;
