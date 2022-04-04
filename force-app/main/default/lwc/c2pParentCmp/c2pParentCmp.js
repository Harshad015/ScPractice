import { LightningElement } from 'lwc';

export default class C2pParentCmp extends LightningElement 
{
    hideModal = false;
    msg;
  

    handleClick(event){
    this.hideModal = true;

    }

    close(event){
        debugger;
        this.msg = event.detail;
        this.hideModal = false;
    }

    
}