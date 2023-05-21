import oracledb from "oracledb";

const conn = await oracledb.getConnection({
  user: "SYSTEM",
  password: "bruno12345",
  connectString: "localhost:1521/xe",
});

async function createTMP() {
  try {
    console.log("Conectou!");
    await conn.execute(`create table yteste5(
        id integer, 
        nome varchar2(255),
        cpf varchar2(255),
        cor varchar2 (255))`);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    conn.release();
  }
}

async function importData(id) {
  try {
    console.log("Conectou!");
    await conn.execute(`USE ImportFromExcel;
      GO
      BULK INSERT yteste5 FROM 'E:\IGTI\Cicom\arquivos\cicom${id}.xlsx'
         WITH (
            FIELDTERMINATOR = ',',
            ROWTERMINATOR = '\n'
      );
      GO`);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    conn.release();
  }
}
export default {
  createTMP,
  importData,
};
