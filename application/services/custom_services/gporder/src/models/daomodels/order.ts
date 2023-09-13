
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const orderSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   type: { type: String },
   orderstatus: { type: String },
   name: { type: String },
   description: { type: String },
   attachments: { type: String },
   gephistoryid: { type: String }
})

const orderModel = mongoose.model('order', orderSchema, 'order');
export default orderModel;
