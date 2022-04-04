import { api, LightningElement } from 'lwc';

export default class P2cSliderCmp extends LightningElement {
    val =12;

    handleChane(event){
        this.val = event.target.value;
    }

@api resetSlider(){
        this.val = 25;
    }
}