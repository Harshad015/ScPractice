import { LightningElement,api } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/Moment';
import {loadScript} from 'lightning/platformResourceLoader'

export default class ThirdPartyJsFiles extends LightningElement {
     
    currentDate = '';

    renderedCallback(){
        loadScript(this, MOMENT+'/moment/moment.min.js')
        .then(()=>{ 
            this.setDateOnScreen()
        })
        .catch(error=>{ 
            console.error(error)
        })
    }

    setDateOnScreen(){
        this.currentDate = moment().format('LLLL'); 
    }

    @api isLoaded = false;
    // change isLoaded to the opposite of its current value
    handleClick() {
        //this.isLoaded = !this.isLoaded;
        this.isLoaded = true;

        this.closeSpinner();
        
    }

    closeSpinner(){
        setTimeout(() => {
            this.isLoaded = false;
        }, 3000);
    }
}