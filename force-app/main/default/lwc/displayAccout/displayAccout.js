import { api, LightningElement,track } from 'lwc';

export default class DisplayAccout extends LightningElement {

@api result=[];


@track store=[];

@track getLabelName;

@track showbool;

@track check = true;


@track secondtemplateForList=[];
@track checkval=true;

@track alphabetArray = [];

connectedCallback(){

    //to get A to Z Values

/*const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabe = alpha.map((x) => String.fromCharCode(x));
console.log("new AB"+alphabe);*/
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   
   this.alphabetArray = [...alphabet];


    console.log(alphabet);
    console.log(typeof(alphabet));
    console.log(typeof(this.alphabetArray));
    console.log(this.alphabetArray.length);
    console.log("Alpha " + this.alphabetArray)

   

}

handleKeyChange(event){
//alert(jason.stringfy(this.accounts));
event.preventDefault();
// osOnChangeTimerDelay = 3000
let searchkey = event.target.value;
console.log(searchkey);
console.log(this.result[0].Name);
console.log(this.result.length); 
console.log("PreviousList"+this.secondtemplateForList);
debugger;
if(searchkey == ""){
this.secondtemplateForList.length = 0;
this.checkval = true;

debugger;
}
else if (searchkey != "") {
this.secondtemplateForList.length = 0;
console.log("NewList"+this.secondtemplateForList);

debugger;
for (let i = 0; i < this.result.length; i++) {
    if(this.result[i].Name.includes(searchkey)){
        console.log("true");

        this.secondtemplateForList.push(this.result[i].Name);
        

    }
    this.checkval = false;
    console.log(this.secondtemplateForList.length);
    
}
console.log(this.secondtemplateForList);
}

// for (let l = 0; l < this.secondtemplateForList.length; l++) {
//     console.log("Names " + this.secondtemplateForList[l])
    
// }
console.log(typeof(this.secondtemplateForList));
console.log(typeof(this.result))


}
@track showPill=true;

getval(event){
    debugger;
    let count=1;
    debugger;
for(let i=0; i<3; i++);
system.debug('one ' +count);
{debugger;
for(let j=0;j<3;j++);
{debugger;
count=count+1;
    console.log('FirstCount ' +count);
}debugger;
console.log('count === '+count);
}
console.log('final ' +count);
console.log("values " + event.target.checked);

if (event.target.checked == true) {
// this.showbool = true;
this.showPill = false;
console.log(this.showbool);
this.store.push(event.target.label);
console.log("Added")
alert(this.store);




}
else{
   
const checkIndex = this.store.indexOf(event.target.checked);
alert(checkIndex);
const itempill = this.store;
itempill.splice(checkIndex, 1); 
this.isChecked = event.target.checked;
console.log(this.isChecked)
alert(this.store)
}



}

removePillItem(event) {

    this.showPill = true;
const pillIndex = event.detail.index ? event.detail.index : event.detail.name;
// console.log(pillIndex);

const itempill = this.store;
itempill.splice(pillIndex, 1); 
//this.showbool = false;      
this.store = [...itempill];
//console.log(pillIndex, this.labelItems);
console.log("StoreName " + this.store);
alert(this.store);

//Logic For Uncheck the checkBox
let labelName = event.target.label;
console.log("LabelName of Pill " +labelName);

let queryS = this.template.querySelectorAll('lightning-input');
console.log("Query"+queryS);

for(let Q of queryS){
if (Q.label == labelName) {
return Q.checked = false;
} 
}

}
aphabetClick(event){
    
 let ev = document.getElementsByClassName('al').text;
 
 alert(ev);
 
}


}