
const mongoose = require("mongoose");

const laboratoriumSchema = new mongoose.Schema({
  namaOrganisasi: {
    type: String,
    required: true,
  },
  jenisOrganisasi: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

const laboratorium = mongoose.model("Laboratorium", laboratoriumSchema);

module.exports = laboratorium;