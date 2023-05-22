import { Client, Pool } from 'pg'


export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'prueba2',
    password: '9715',
    port: 5432,
  })