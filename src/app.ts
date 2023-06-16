import express, { json } from 'express';
import helmelt from 'helmet'
import { router } from './routes';

export const app = express();

app.use(helmelt())
app.use(json())
app.use(router);


