import { LightningElement, track, wire,api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';


export default class Example extends LightningElement {
    @api recordId; 
    @track record;
    @track error;

    @track sectionNames = [];
    @track fieldNames;

   // @track sectArr=[];

    // @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    // wiredData({data, error}){

    //     if(data){
 
    //       console.log('Object INFO:', data);
 
    //     }
 
    //     if(error){
 
    //       console.log('Some Error Occured');
 
    //     }
 
    //  }
    //  @wire(getRecordUi, { recordIds: '0035g00000XnxADAAZ', layoutTypes: 'Full', modes: 'View' })
    //  wiredData({data, error}){

    //     if(data){
 
    //       console.log('Object INFO:==', data);
    //       this.sectionName = data.records[this.recordId].fields["LastName"].value;
    //       console.log( 'SectionName=', this.sectionName);
    //       alert(this.sectionName);
 
    //     }
 
    //     if(error){
 
    //       console.log('Some Error Occured');
 
    //     }
 
    //  }
    //@api recordId;
 @track accountName;
  @track accountNumber;
 
  @wire(getRecordUi, {
    recordIds: "$recordId",
    layoutTypes: "Full",
    modes: "View",
  })
  wiredRecord({ error, data }) {
    if (data) {
      console.log("Object Data== ", data);
      this.accountName = data.records[this.recordId].fields["FirstName"].value;
      this.accountNumber = data.records[this.recordId].fields["Email"].value;
      console.log(this.accountName);

        this.sectionNames = data.layouts.Contact["012000000000000AAA"].Full.View.sections;
        
         
      

        
       // console.log("sectionsNames=="+ this.sectionName.length + " D " , this.sectionName);
    
        //this.fieldNames = data.layouts.Contact["012000000000000AAA"].Full.View.sections.layoutRows;
        //console.log(this.fieldNames);
        
    } else{
      console.log(error);
    }
  }
 
  
}