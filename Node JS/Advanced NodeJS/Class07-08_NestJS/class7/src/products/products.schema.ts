import { ProductStatus } from './interfaces/product';
import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  id: String,
  title: String,
  price: Number,
  description: String,
  colors: [String],
  status: {
    type: String,
    enum: Object.keys(ProductStatus),
  },
});
