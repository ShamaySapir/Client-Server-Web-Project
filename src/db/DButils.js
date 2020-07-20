require("dotenv").config();
const sql = require("mssql");
const dbConfig = require("./dbConfig");

const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool
  .connect()

exports.execQuery = async function (query) {
  await poolConnect;
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (err) {
    // console.error("SQL error", err);
    throw err;
  }
};
