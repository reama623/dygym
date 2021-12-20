import { createPool } from "mysql2/promise";

const pool = createPool({
  connectionLimit: 5,
  user: "admin",
  password: "1352759",
  host: "20.210.192.101",
  port: 13306,
  database: "dygym",
});

export async function asyncFunction(query, values) {
  let result;
  try {
    const conn = await pool.getConnection();
    const [rows, fields] = await conn.query(query, values);
    result = rows;
    conn.release();
  } catch (error) {
    console.error("[ERROR]:[Mariadb]>>>", error);
    return [];
  }
  return result;
}
