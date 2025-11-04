const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    category: { type: String, trim: true },
    image: { type: String }, // URL ou chemin d'image
    magasin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Magasin', // lien vers le magasin
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
