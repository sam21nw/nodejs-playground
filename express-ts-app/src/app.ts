import express from 'express';
import { server } from './config/config';
import './config/logging';

export const app = express();

app.get('/', (req, res) => {
    res.send('Hello from server..');
});

app.listen(server.SERVER_PORT, () => {
    logging.log(
        `now listening on http://${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`
    );
});
