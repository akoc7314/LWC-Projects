import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isShowed=false;
    handleChange(event){
        console.log(event);
        this.isShowed = event.detail.checked;
    }
}