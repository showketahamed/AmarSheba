import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for Supabase PostgreSQL.');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  ssl: { rejectUnauthorized: false },
});

function toPostgresPlaceholders(sql) {
  let index = 0;
  return sql.replace(/\?/g, () => `$${++index}`);
}

async function query(sql, params = []) {
  let statement = toPostgresPlaceholders(sql);
  const command = statement.trim().split(/\s+/)[0].toUpperCase();

  if (command === 'INSERT' && !/\bRETURNING\b/i.test(statement)) {
    statement = `${statement.trim().replace(/;$/, '')} RETURNING id`;
  }

  const result = await pool.query(statement, params);
  return [result.rows, { insertId: result.rows[0]?.id, affectedRows: result.rowCount }];
}

export const db = { query };
export { pool };

export async function checkDatabaseConnection() {
  await pool.query('SELECT 1');
}
