import { LightningElement } from 'lwc';
import signUp from './signUp.html';
import signInTemp from './signInTemp.html';
import renderMethod from './renderMethod.html';



export default class RenderMethod extends LightningElement {

    isRender='';
        render(){
            return  this.isRender === "SignUp" ? signUp:
                    this.isRender === "SignIn" ? signInTemp: renderMethod
        }

        signupT(event){
                this.isRender = event.target.label;
                alert(this.isRender);
        }
        Back(event){
            this.isRender = event.target.label;
        }
}