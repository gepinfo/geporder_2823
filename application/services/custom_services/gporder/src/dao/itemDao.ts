import * as mongoose from 'mongoose';
import itemModel from '../models/daomodels/item';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class itemDao {
    private item = itemModel;
    constructor() { }
    
    public async GpDelete(itemId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpDelete');

    

    
    
    
    this.item.findByIdAndRemove(itemId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(itemData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.item.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpSearchForUpdate');

    

    
    
    
    this.item.findOneAndUpdate({ _id: itemData._id }, itemData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpUpdate');

    

    
    
    
    itemData.last_modified_date = new Date(),
                                                   this.item.findOneAndUpdate({ _id: itemData._id }, itemData).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpUpdate');

         let newresult = result.toObject();  
                                                     delete newresult._id;
                                                     result.last_modified_date = "";
                                                    let temp = new itemModel(newresult);
                                                    temp.save();

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(itemId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpGetEntityById');

    

    
    
    
    this.item.find({"gephistoryid":itemId}).sort({last_modified_date: -1}).limit(1).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpGetAllValues');

    

    
    
    
    this.item.aggregate(([
                        { "$sort": { "last_modified_date": 1 } },{ "$group": { "_id": "$gephistoryid",  "item": { "$last": "$$ROOT" }  }}    
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpGetAllValues');

        let lastupdated:any = [];
                         result.forEach(item=> lastupdated.push(item.item))
                         result=lastupdated 

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpCreate');

    let gepCallGuid = `${generate(dictionary.numbers, 50)}`;
                    itemData.gephistoryid = gepCallGuid;
                    let temp = new itemModel(itemData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.item.aggregate(([
                        { $match: { $and: [{ created_by: itemData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}