const mongoose = require('mongoose');

const magasinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    adresse: { type: String, required: true, trim: true },
    telephone: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true },
    responsable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // le responsable du magasin
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Magasin', magasinSchema);
