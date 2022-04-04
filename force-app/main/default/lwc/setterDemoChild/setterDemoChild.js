import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {
  detailUser;
    @api
    get details(){
        return this.detailUser;
    }

    set details(data){

        this.detailUser = {...data ,tool:"LWC"};
    }
}