import { Pool } from 'pg';

export const pool = new Pool({
    user: 'soporte',
    host: '201.177.181.69',
    password: '12COL12COL12COL12COL',
    database: 'innovancefinance',
    port: 5432
});

// TODO: Optimizar esta conexión utilizando variables de entorno del sistema.