import { api, LightningElement ,wire} from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Opportunity';
import TYPE_OPP from '@salesforce/schema/Opportunity.Type';
//import Product2 from '@salesforce/schema/PricebookEntry.Product2';


export default class RecordTypePicklist extends LightningElement 
{
    value ='';
    @api recordId;
    @api recordTypeId;
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountMetadata;

    @wire(getPicklistValues,

        {

            recordTypeId: '$recordTypeId',

            fieldApiName: TYPE_OPP

        }

    )

    typePicklist;

    handleChange(event) {

        this.value = event.detail.value;

    }
}