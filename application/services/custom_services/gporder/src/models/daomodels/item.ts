
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const itemSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   type: { type: String },
   name: { type: String },
   description: { type: String },
   price: { type: String },
   price_currency_type: { type: String },
   cost: { type: String },
   cost_currency_type: { type: String },
   gephistoryid: { type: String }
})

const itemModel = mongoose.model('item', itemSchema, 'item');
export default itemModel;
