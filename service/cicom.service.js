import cicomRepository from "../repository/cicom.repository.js";

async function createTMP() {
  return await cicomRepository.createTMP();
}

async function importData(id) {
  return await cicomRepository.insertData(id);
}

export default {
  createTMP,
  importData,
};
