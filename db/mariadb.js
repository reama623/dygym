// import { createPool } from "mariadb";

// const pool = createPool({
//   connectionLimit: 20,
//   host: "20.205.129.140",
//   port: 3306,
//   user: "dygym",
//   password: "dygym5702",
//   database: "dygym",
// });

// export async function asyncFunction(query, values) {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query(query, values);
//     conn.end();
//     return rows;
//   } catch (error) {
//     throw error;
//   } finally {
//     if (conn) {
//       console.log('hihi')
//     }
//   }
// }
// // 