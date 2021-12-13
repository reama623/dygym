import { createPool } from "mariadb";

const pool = createPool({
  connectionLimit: 5,
  queueLimit: 20,
  host: "20.210.192.101",
  port: 13306,
  user: "admin",
  password: "1352759",
  database: "dygym",
});

export async function asyncFunction(query, values) {
  let conn;
  let rows;
  try {
    conn = await pool.getConnection();
    rows = await conn.query(query, values);

    conn.release();
  } catch (error) {
    console.error("[ERROR]:[Mariadb]>>>", error);
    conn.rollback();
    return [];
  }
  return rows;
}
