import { Request, Response, NextFunction } from "express";
import { itemController } from '../controller/itemController';


export class Routes {
    private item: itemController = new itemController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/item/:id').delete(this.item.GpDelete);
app.route('/item/get/search').get(this.item.GpSearch);
app.route('/item/get/update').put(this.item.GpSearchForUpdate);
app.route('/item').put(this.item.GpUpdate);
app.route('/item/:id').get(this.item.GpGetEntityById);
app.route('/item').get(this.item.GpGetAllValues);
app.route('/item').post(this.item.GpCreate);
app.route('/item/userid/created_by').get(this.item.GpGetNounCreatedBy);
     }

}