import {ReferenceItem} from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    constructor(public edition: number) {
        super();
    }

    override printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation() {
        console.log('title - year');
    }
}