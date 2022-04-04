import { api, LightningElement } from 'lwc';

export default class P2cCommuniaction extends LightningElement {

    @api passProgress = 10;

    handlechange(event){
        this.passProgress = event.target.value;
    }

    handleClick(event){
        this.template.querySelector('c-p2c-slider-cmp').resetSlider();

    }
}