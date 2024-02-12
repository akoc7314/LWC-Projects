
import { LightningElement } from 'lwc';
import OBJ_CONTACT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import MOBILEPHONE_FIELD from '@salesforce/schema/Contact.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordFormContact extends LightningElement {
    objectApiName = OBJ_CONTACT;
    recordId ="003Hp00002nXW7aIAG";
    fields =[FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD, MOBILEPHONE_FIELD];

    handleSuccess(){
        const evt = new ShowToastEvent({
            title:"Contact Status",
            message: "Contact record has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}