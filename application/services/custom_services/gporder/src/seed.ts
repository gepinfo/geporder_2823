import * as mongoose from 'mongoose';
import { itemSchema } from './models/daomodels/item';

const itemModel = mongoose.model('item', itemSchema);

export class Seed {

    constructor() {

    }

    

}
