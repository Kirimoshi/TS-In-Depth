/* eslint-disable no-underscore-dangle */
import {ReferenceItem} from './reference-item';
import {positiveInteger} from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }
    set copies(value: number) {
        this._copies = value;
    }

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