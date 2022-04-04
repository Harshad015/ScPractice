import { LightningElement, track } from 'lwc';

export default class TestCmp extends LightningElement {
fullName="Harshad";
title="Amravati";
Add="Track";
flag=false;

  @track address;
 Countries =["India","America","UK"]; 


Chnage(event){
this.title=event.target.value;
}
address={
    name:"H.Property",
    city:"Pune",
    Country:"India",
    PinCode:445514
}

trackHandler(event){
    this.address.city=event.target.value;
   

}
get Ind(){
    return this.title;
}

handleClick(event){
this.flag=true;
}

 carlist=["BMW","MZ","Tesla","Honda","Maruti"];
 ceoList=[

    {
        id:1,
        ceo:"Harshad",
        company:"Google"
        
    },
    {
        id:2,
        ceo:"Harsh",
        company:"Facebook"
        
    },
    {
        id:1,
        ceo:"Harsha",
        company:"Amazon"
        
    }
   
 ]
 handle(){
     console.log("HI");
     const ele= this.template.querySelector('h1');
     ele.style.border="2px solid red";
     ele.style="background-color: aqua";
     console.log(ele.innerText);
     alert((ele.innerText));
     //alert(ele.innertext);
 }

}