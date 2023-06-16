import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
    res.send({
        status: 'UP'
    });
});

export default routes