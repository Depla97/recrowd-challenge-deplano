import express, { Request, Response, NextFunction } from 'express';
import investimentApi from './api/investiments-api';
import swaggerUi from 'swagger-ui-express';
import sequelize from './db/db-connection';
import swaggerSpecs from './swagger';

const app = express();
const port = process.env.PORT || 3000;
const forceDropTables = false;

app.use(express.json());

// Use user routes
app.use('/investiment', investimentApi);

// Swagger setup
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
  });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

sequelize.sync({ force: forceDropTables }).then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
});
