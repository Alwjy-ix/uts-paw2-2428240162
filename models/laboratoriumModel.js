
const mongoose = require("mongoose");

const laboratoriumSchema = new mongoose.Schema({
  kode: { type: String, required: [true, 'kode wajib diisi'], unique: true, trim: true, uppercase: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
});

const laboratorium = mongoose.model("laboratorium", laboratoriumSchema);

module.exports = laboratorium;