/* eslint-disable no-redeclare */
import {Category} from './enums';
import { IBook, ILogger, IAuthor, ILibrarian } from './interfaces';
import { UL, ReferenceItem, RefBook } from './classes';
import { PersonBook } from './types';
import { Library } from './classes/library';
// TODO Import all functions
import {printRefBook} from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

function getAllBooks(): readonly Book[] {
    return <const>[
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

/* console.log(getAllBooks());
logFirstAvailable(getAllBooks()); */

// Task 02.01
/*
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(0));*/

// calcTotalPages();

// Task 03.01
// Function types

/* const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${name}${id}`;
idGenerator = createCustomerID; */

// console.log(idGenerator('Boris', 42));

// Task 03.02
// Optional, default, rest parameters

// createCustomer('Ihor', 28, 'Lviv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));

// console.log(checkoutBooks('Ihor', [1, 2, 3]));

// let myBooks = checkoutBooks('Ann', [1, 2, 4]);
// console.log(myBooks);

// Task 03.03
// Function Overloading

/* function getTitles(authorOrAvailable: string | boolean): Book[];
function getTitles(id: number, available: boolean): Book[];

function getTitles(firstParam: string | number | boolean, available?: boolean): Book[] {
    let resultArray: Book[] = [];
    if (arguments.length === 1 && typeof arguments[0] === 'string') {
        resultArray = getAllBooks().filter((book: Book) => book.author === arguments[0]);
    }
    if (arguments.length === 1 && typeof arguments[0] === 'boolean') {
        resultArray = getAllBooks().filter((book: Book) => book.available === arguments[0]);
    }
    if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'boolean') {
        resultArray = getAllBooks()
            .filter((book: Book) => book.id === arguments[0] && book.available === arguments[1]);
    }
    if (resultArray.length === 0) {
        console.log('The book satisfying the given criteria is not found');
    } else {
        return resultArray;
    }
} */

// const checkedOutBooks = getTitles(3, false);
// console.log(checkedOutBooks);

// console.log(bookTitleTransform('Harry'));
// console.log(bookTitleTransform(42));

// Task 04.01
// Defining an Interface

let myBook: IBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};

// printBook(myBook);

// myBook.markDamaged('missing back cover');

/* logDamage('Potter'); */

// Task 04.03
// Extending interface

let favoriteAuthor: IAuthor = {
    name: 'Frank Herbert',
    email: 'myEmail',
    numBooksPublished: 22,
};

let favoriteLibrarian: ILibrarian = {
    name: 'someName',
    email: 'someEmail',
    department: 'Engine',
    assistCustomer(custName: string, bookTitle: string) {
    }
};

// Task 04.04
// Optional chaining

const offer: any = {
    book: {
        title: 'Essential JavaScript',
        authors: ['Evan Burchard', 'Liang Yuxian Eugene'],
        getTitle(): string {
            return this.title;
        },
    },
    magazine: {
        title: 'Mastering TypeScript',
        authors: ['Ihor S. Kulyk'],
        getTitle(): string {
            return this.title;
        },
    }

};

/* console.log(offer?.magazine);
console.log(offer?.magazine?.getTitle());
console.log(offer?.book?.getTitle());
console.log(offer?.book?.authors[0]); */

// Task 04.05
// Keyof operator

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
/* console.log(getProperty(myBook, 'isbn')); */

// Task 05.01
// Creating and Using Classes

/* const ref = new ReferenceItem('Dune', 1965, 12);
ref.printItem(); */

/* ref.publisher = 'Analog magazine';
console.log(ref.publisher);

// 29.11.2022

console.log(ref);
console.log(ref.getId()); */

// Task 05.02
// Extending Classes

// Task 05.03
// Creating Abstract Classes

let refBook = new RefBook(1);
/* console.log(refBook.printItem()); */
refBook.printCitation();
printRefBook(refBook);

// Task 05.04
// Interfaces for Class Types

/* let favouriteLibrarian: ILibrarian = new UL.UniversityLibrarian();
favouriteLibrarian.name = 'Hiroshi';
favouriteLibrarian.assistCustomer('Ihor', 'Dune by Frank Herbert');
printRefBook(favouriteLibrarian); */

// Task 05.05
// Intersection and Union Types

let refPersonBook: PersonBook = {
    author: 'Me', available: false, category: undefined, email: 'baronaxaro@gmail.com', id: 0, name: 'Me',
    title: 'Me Again'
};

console.log(refPersonBook);

// Task 06.05
/* const flag = true; */

/*
if (flag) {
    import('./classes')
        .then(o => {
            const reader = new o.Reader();
            reader.name = 'Anna';
            reader.take(getAllBooks()[0]);
            console.log(reader);
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Complete!'));
}*/

/* if (flag) {
    const o = await import('./classes');

    const reader = new o.Reader();
    reader.name = 'Anna';
    reader.take(getAllBooks()[0]);
    console.log(reader);
} */

// Task 06.06
// Type-only imports and exports

// let library: Library = new Library();
let library: Library = {
    id: 1,
    name: 'Anna',
    address: 'Here'
};

console.log(library);

