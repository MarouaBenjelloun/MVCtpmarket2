const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    produits: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantite: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ['en attente', 'en cours', 'livrée', 'annulée'],
      default: 'en attente',
    },
    adresseLivraison: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Commande', commandeSchema);
