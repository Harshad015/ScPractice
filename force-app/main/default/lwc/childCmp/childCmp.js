import { api, LightningElement, track } from 'lwc';

export default class ChildCmp extends LightningElement 
{
    @track trackParams="Track Property Shown";

    @api apiParams="Api Property Shown";

    nonReactive="Non Reactive Property";


    handlClick(event){
        //this.trackParams="track property changed";
        //this.apiParams="api property changed";
    this.nonReactive="nonReactive proprty changed ;"
    }
}