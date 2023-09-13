import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateitemService } from './createitem.service';





@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.scss'],
})

export class CreateitemComponent implements OnInit {
    public item:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        type: '',
        name: '',
        description: '',
        price: '',
        price_currency_type: '',
        cost: '',
        cost_currency_type: '',
        gephistoryid: '',
    }
    public order:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        type: '',
        orderstatus: '',
        name: '',
        description: '',
        attachments: '',
        gephistoryid: '',
    }




    constructor (
        private createitemService: CreateitemService,
    ) { }

    ngOnInit() {
        this.item.created_by = sessionStorage.getItem('email') || ''; 
        this.order.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createitemService.GpCreate(this.item).subscribe((data:any) => {
            this.item.type = ''
 	 	this.item.name = ''
 	 	this.item.description = ''
 	 	this.item.price = ''
 	 	this.item.price_currency_type = ''
 	 	this.item.cost = ''
 	 	this.item.cost_currency_type = ''
 	 	this.item.gephistoryid = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}