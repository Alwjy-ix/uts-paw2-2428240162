const mongoose = require("mongoose");

// Schema Beasiswa
const peralatanLabModelSchema = new mongoose.Schema({
  kodeAlatLab: { type: String, required: [true, 'kode wajib diisi'], unique: true, trim: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  jumlah: { type: Number,required: true,},
  createdAt: { type: Date, default: Date.now },

  // EMBEDDING
  spesifikasi : { merek: String, tahun: String },

  // REFERENCING
  laboratorium : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Laboratorium",
    required: true,
  },


});

const peralatanlab = mongoose.model("peralatanLab", peralatanLabModelSchema);

module.exports = peralatanlab;