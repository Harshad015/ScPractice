import { api, LightningElement, wire ,track} from 'lwc';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import AccountId from '@salesforce/schema/Case.AccountId';
import getConData from '@salesforce/apex/getAcccont.getConData';

let col=[
        {label:'First Name', fieldName:'FirstName' ,editable:'true'},
        {label:'Last Name', fieldName:'LastName'},
        {label:'Email', fieldName:'Email'},
        {label:'AccountID', fieldName:'AccountId'}
]
export default class RecordForm extends LightningElement 
{
    @api recordId;
    @track harshad;
    MyFiled=[FirstName,LastName,Email,AccountId];
    coll = col;
   // @wire(getConData) harshad;

    @wire(getConData,{recId:'$recordId'})
    WireContactRecords({error,data}){
        if(data){
            this.harshad = data;
            this.error = undefined;
           // alert("hi");
        }else{
           // alert("bye");
            this.error = error;
            this.harshad = undefined;
        }
    }
}