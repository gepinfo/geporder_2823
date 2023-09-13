
export interface order 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   type: { type: String },
   orderstatus: { type: String },
   name: { type: String },
   description: { type: String },
   attachments: { type: String },
   gephistoryid: { type: String }
}



