import bodyParser from 'body-parser';
import cors from 'cors';

import Server from './classes/server';

import roles from './routes/rol';
import usuarios from './routes/usuario';
import auth from './routes/auth';
import subscripciones from './routes/subscripciones';
import subscriptores from './routes/subscriptores';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas
server.app.use('/api/roles', roles);
server.app.use('/api/usuarios', usuarios);
server.app.use('/api/auth', auth);
server.app.use('/api/subscripciones', subscripciones);
server.app.use('/api/subscriptores', subscriptores);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}.`);
});