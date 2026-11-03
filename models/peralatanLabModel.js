const mongoose = require("mongoose");

// Schema Beasiswa
const peralatanLabModelSchema = new mongoose.Schema({
  kodeAlatLab: { type: String, required: [true, 'kode wajib diisi'], unique: true, trim: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  alamat: alamatSchema, 
  prodiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prodi' },
  createdAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },

//   // EMBEDDING
//   persyaratan: {
//     type: [String],
//     default: [],
//   },

//   // REFERENCING
//   organizer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Organizer",
//     required: true,
//   },


});

const peralatanlab = mongoose.model("peralatanLab", peralatanLabModelSchema);

module.exports = peralatanlab;