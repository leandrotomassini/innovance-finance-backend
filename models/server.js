const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
            subscripciones: '/api/subscripciones',
            subscriptores: '/api/subscriptores',
            escuelas: '/api/escuelas',
            posts: '/api/posts',
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));

        // Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));

    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.subscripciones, require('../routes/subscripciones'));
        this.app.use(this.paths.subscriptores, require('../routes/subscriptores'));
        this.app.use(this.paths.escuelas, require('../routes/escuelas'));
        this.app.use(this.paths.posts, require('../routes/posts'));

        // this.app.use(this.paths.cursos, require('../routes/cursos'));
        // this.app.use(this.paths.categoriascontenidos, require('../routes/categoriascontenidos'));
        // this.app.use(this.paths.dificultades, require('../routes/dificultades'));
        // this.app.use(this.paths.videos, require('../routes/videos'));
        // this.app.use(this.paths.contenidos, require('../routes/contenidos'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
