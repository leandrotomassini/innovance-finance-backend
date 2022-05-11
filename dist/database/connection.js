"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'soporte',
    host: '201.177.181.69',
    password: '12COL12COL12COL12COL',
    database: 'innovancefinance',
    port: 5432
});
//# sourceMappingURL=connection.js.map