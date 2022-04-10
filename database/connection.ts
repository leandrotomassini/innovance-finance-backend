import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Universidad11201911',
    database: 'innovance-finance',
    port: 5432
});