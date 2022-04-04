import { LightningElement,track ,wire } from 'lwc';
import getOppList from '@salesforce/apex/getOpp.getOppList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';





const columns = [ { label: 'Name', fieldName: 'Name', editable: "true"},
                  { label: 'StageName', fieldName: 'StageName', editable: "true"},
                  { label: 'CloseDate', fieldName: 'CloseDate', type: 'date-local', typeAttributes:{
                    month: "2-digit",
                    day: "2-digit"}, editable: "true"},
                  { label: 'Type', fieldName: 'Type', type: 'email', editable: "true" },];

export default class LightningDataTable extends LightningElement {

    @track data;
    @track columns = columns;
   
    @track draftValues = [];
 
    @wire (getOppList)
    contacts(result) {
        if (result.data) {
            this.data = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    }

   
        handleSave(event) {
            const recordInputs =  event.detail.draftValues.slice().map(draft => {
                const fields = Object.assign({}, draft);
                return { fields };
            });
       
            const promises = recordInputs.map(recordInput => updateRecord(recordInput));
           
            Promise.all(promises).then(contacts => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'All Contacts updated',
                        variant: 'success'
                    })
                );
                 // Clear all draft values
                 this.draftValues = [];
       
                 // Display fresh data in the datatable
                 return refreshApex(this.contact);
            }).catch(error => {
                // Handle error
            });
        }
}