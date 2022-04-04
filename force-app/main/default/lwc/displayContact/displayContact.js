import { LightningElement,track ,wire,api} from "lwc";

import getConData from "@salesforce/apex/getAcccont.getConData";

let col = [

  { label: "First Name", fieldName: "FirstName" },



  { label: "Last Name", fieldName: "LastName" },



  { label: "Email", fieldName: "Email" },


]


export default class AccountContactInfo extends LightningElement {
  @api recordId;
  @track harshad;
  coll = col;

  @wire(getConData,{recId:'$recordId'})
    WireContactRecords({error,data}){
        if(data){
            this.harshad = data;
            this.error = undefined;
            alert("hi");
        }else{
            alert("bye");
            this.error = error;
            this.harshad = undefined;
        }
    }

}