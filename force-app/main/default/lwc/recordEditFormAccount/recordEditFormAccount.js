import { LightningElement, api } from 'lwc';
import FAX from '@salesforce/schema/Account.Fax';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import NAME from '@salesforce/schema/Account.Name';
import OWNERSHIP from '@salesforce/schema/Account.Ownership';
import RATING from '@salesforce/schema/Account.Rating';



export default class RecordEditFormAccount extends LightningElement {
    @api objectApiName;
    @api recordId;

    isIndustry=false;
    isFax=false;
    isOwnerShip=false;

    fields={
        fax:FAX,
        industry:INDUSTRY,
        name:NAME,
        ownerShip:OWNERSHIP,
        rating:RATING
    }
    changeHandler(event){
        if(event.target.value === 'Hot'){
            this.isIndustry=true;
            this.isFax=false;
            this.isOwnerShip=false;
        } else if(event.target.value === 'Cold'){
            this.isIndustry=false;
            this.isFax=true;
            this.isOwnerShip=false;
        } else if(event.target.value === 'Warm'){
            this.isIndustry=false;
            this.isFax=false;
            this.isOwnerShip=true;
        }else if(event.target.value === ''){
            this.isIndustry=false;
            this.isFax=false;
            this.isOwnerShip=false;
        }
    }

}