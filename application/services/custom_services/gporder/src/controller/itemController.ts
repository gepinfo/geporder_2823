import { Request, Response } from 'express';
import { itemService } from '../service/itemService';
import { CustomLogger } from '../config/Logger'
let item = new itemService();

export class itemController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    item.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemController.ts: GpGetNounCreatedBy');
    })}


}