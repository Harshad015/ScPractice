import { api, LightningElement } from 'lwc';

export default class SetterDemoParent extends LightningElement {

   @api userDetils = 
                    {
                     name:"salesforce",
                     tool:"CRM TOOL"
                    }
    
}