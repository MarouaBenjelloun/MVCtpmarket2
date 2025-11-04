const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    titre: { type: String, required: true, trim: true },
    contenu: { type: String, required: true },
    image: { type: String },
    auteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: [{ type: String, trim: true }],
    statut: {
      type: String,
      enum: ['brouillon', 'publié'],
      default: 'brouillon',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
