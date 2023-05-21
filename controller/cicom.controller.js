import { loggers } from "winston";
import cicomService from "../service/cicom.service.js";

async function createTMP(req, res, next) {
  console.log("Importando dados...");
  try {
    await cicomService.createTMP();
    res.send("Tabela temporária criada!");
  } catch (err) {
    next(err);
  }
}

async function importData(req, res, next) {
  try {
    const id = req.params.id;
    console.log(id);
    if (!id || id <= 0) {
      throw new Error(
        "ID precisa ser um número positivo e maior que 0 (zero)."
      );
    }
    id = await cicomService.createTMP(id);
    res.send("bla");
    loggers.info(`POST createTMP - ID = ${id}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createTMP,
  importData,
};
