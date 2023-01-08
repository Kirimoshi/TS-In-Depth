import {timeout} from '../decorators';

abstract class ReferenceItem {
    private _publisher: string; // soft private
    readonly #id: number; // hard private, because it's private field
    static department: string = 'Fiction';


    constructor(public title?: string, protected readonly year?: number, id?: number) {
        this.#id = id;
    }

    get publisher() {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher (newPublisher: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    getId(): number {
        return this.#id;
    }

    abstract printCitation(): void;

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department is ${ReferenceItem.department}`);
    }
}

export { ReferenceItem };