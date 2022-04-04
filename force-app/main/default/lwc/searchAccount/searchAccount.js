import { api, LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/searchAccount.getAccounts'

export default class SearchAccount extends LightningElement 
{
@track store=[];


//@wire (getAccounts) accounts;

@api lstaccounts;
error;

@wire(getAccounts) wiredAccounts ({ error, data }) {
    if (data) {
        this.lstaccounts = data; 
        console.log(this.lstaccounts)
   } else if (error) { 
       this.error = error;  
  }   }
constructor(){
    super()
    console.log("wire callBack "+this.accounts)
}

// @wire(getAccounts, { strAccountName: '$searchKey'})
// wiredAccount({ error, data }) {
//     if (data) {
//         this.accounList = data;
//         console.log("data of list "+ this.accounList);
//         this.error = undefined;
//     } else if (error) {
//         this.error = error;
//         this.accounList = undefined;

//     }
// }

// handleKeyChange(event){
// //alert(jason.stringfy(this.accounts));
// this.searchKey = event.target.value;
// console.log(this.searchKey);
// console.log(this.accounList)

// }

// @track _isChecked = false;

//     set isChecked(newValue) {
//         this._isChecked = newValue;
//         this.template.querySelector('lightning-input.cb').checked = newValue;
//     }
//     get isChecked() {
//         return this._isChecked;
//     }

//     toggleChecked() {
//         this.isChecked = !this.isChecked;
//     }

//     onChecboxChange(event) {
//         this.isChecked = event.target.checked;
//     }
/*getval(event){
debugger;

this.store.push(event.target.label);
// this.store=event.target.label;
// this.store.push[this.val];

console.log(JSON.stringify(this.store));
alert(this.store);
}

name;
remove(event){
this.name = event.detail.item.label;
alert(label + ' pill was removed!');
const index = event.detail.index;
this.store.splice(index, 1);
}*/

}