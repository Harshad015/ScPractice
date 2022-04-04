import { api, LightningElement, track } from 'lwc';

export default class P2pModalCmp extends LightningElement 

{

   @api isLoaded;

    closehandler(){
        debugger;
        //simple ecent and event with data
        
        const myevent = new CustomEvent('closemodal',{
            detail:"close modal successfully"
        });

        this.dispatchEvent(myevent);


    }



    // closeSpinner(){
    //     setTimeout(() => {
    //         this.isLoaded = false;
    //     }, 3000);
    // }
}