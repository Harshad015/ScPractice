import { api, LightningElement,wire } from 'lwc';
//import Product2Id from '@salesforce/schema/PricebookEntry.Product2Id';
import getProduct from '@salesforce/apex/lookUpProduct.getProduct';
import getAcc from '@salesforce/apex/lookUpProduct.getAcc';
export default class LookUpProduct extends LightningElement 
{
    @api Pricebook2Id;
  //  MyFiled=[Product2Id];

    // @wire(getProduct,{recId:'01s5g00000QdSw6AAF'})
    // WireProductRecords({error, data}){
       
    //     alert(data);
    //     if(data){
    //         this.harshad = data;
    //         this.error = undefined;
    //         alert(JSON.stringify(this.harshad));
    //         console.log(this.harshad);
           
    //     }else{
    //        // alert("bye");
    //         this.error = error;
    //         this.harshad = undefined;
    //         alert(this.harshad);
    //     }
    // }

    @wire(getProduct,{recId:'01s5g00000QdSw6AAF'})
    record;

}