import {ReferenceItem} from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    constructor(public edition: number) {
        super();
    }

    override printItem() {
        super.printItem();
        console.log('Printing item...');
    }

    printCitation() {
        console.log('title - year');
    }
}