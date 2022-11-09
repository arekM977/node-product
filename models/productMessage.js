import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid'

// schema
const productSchema = mongoose.Schema({

    id: {type: String, value: uuidv4()},
    Name: {type: String, maxLength: 100, required: true},
    Price: {type: Number, required: true, get: v => v.toFixed(2),
    set: v => v.toFixed(2)}
},
{
    timestamps: {
      UpdateDate: 'updated_at'
    }
  })

const productMessage = mongoose.model('productMessage', productSchema)
export default productMessage