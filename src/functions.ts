import {IBook, ILogger, TOptions} from './interfaces';
import {Category} from './enums';
import {BookProperties} from './types';
import {BookOrUndefined} from './types';
import RefBook from './classes/encyclopedia';

function logFirstAvailable(books: readonly IBook[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(book => book.available === true).title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books
        .filter( ({ category })=> category === inputCategory)
        .map(({ title }) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];
    return [title, author];
}

function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const r = data.reduce(( acc: bigint, obj ) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(r);
}

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    console.log(`Customer age: ${age} year(s)`);
    console.log(`Customer city: ${city}`);
}

function getBookByID(id: IBook['id']): BookOrUndefined {
    return getAllBooks().find((book: IBook) => book.id === id);
}

function checkoutBooks(customer: string, bookIDs: number[]): string[] {
    const titleArray: string[] = [];
    console.log(customer);
    bookIDs.forEach((id) => {
        if (getBookByID(id).available === true) titleArray.push(getBookByID(id).title);
    });
    return titleArray;
}

function getTitles(...rest: any[]): IBook[] {
    let resultArray: IBook[] = [];
    if (arguments.length === 1 && typeof arguments[0] === 'string') {
        resultArray = getAllBooks().filter((book: IBook) => book.author === arguments[0]);
    }
    if (arguments.length === 1 && typeof arguments[0] === 'boolean') {
        resultArray = getAllBooks().filter((book: IBook) => book.available === arguments[0]);
    }
    if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'boolean') {
        resultArray = getAllBooks()
            .filter((book: IBook) => book.id === arguments[0] && book.available === arguments[1]);
    }
    if (resultArray.length === 0) {
        console.log('The book satisfying the given criteria is not found');
    } else {
        return resultArray;
    }
}

function assertStringValue(str: any): boolean {
    if (typeof str !== 'string') {
        throw new Error('This value should have been a string... yet something went off the rails');
    } else {
        return true;
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

function bookTitleTransform(title: any): any {
    if (assertStringValue(title) === true) {
        return title
            .split('')
            .reverse()
            .join('');
    }
}

function getAllBooks(): IBook[] {
    return [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript
        },
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript
        }
    ];
}

function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`);
}

let logDamage: ILogger;
logDamage = function (str: string): void {
    console.log(str);
};

function getProperty (book: IBook, bookProperty: BookProperties): any {
    if (typeof bookProperty !== 'function') {
        for (let i in book) {
            if (i === bookProperty) {
                return bookProperty.valueOf();
            }
        }
    } else {
        return bookProperty;
    }
}

function setDefaultConfig(options: TOptions): object {
    options.duration = 5;
    options.speed = 20;
    return options;
}

// TODO export all functions