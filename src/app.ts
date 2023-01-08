/* eslint-disable no-redeclare */
import {Category} from './enums';
import { IBook, ILogger, IAuthor, ILibrarian, IMagazine } from './interfaces';
import { UL, ReferenceItem, RefBook, Shelf } from './classes';
import {PersonBook, BookRequiredFields, UpdatedBook, CreateCustomerFunctionType} from './types';
import { Library } from './classes/library';
import {createCustomer, getObjectProperty, printRefBook, purge} from './functions';
import {UniversityLibrarian} from './classes/university-librarian';
import Encyclopedia from './classes/encyclopedia';

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

// let refBook = new RefBook(1);
/* console.log(refBook.printItem()); */
// refBook.printCitation();
// printRefBook(refBook);

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

// console.log(refPersonBook);

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

// console.log(library);

// Task 07.01
// Generic Functions

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

/* console.log(purge(inventory));
console.log(purge([1,2,3])); */

// Task 07.02
// Generic classes and interfaces
/* const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title); */

const magazines: IMagazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];
/* const magazineShelf = new Shelf<IMagazine>();
magazines.forEach(mag => magazineShelf.add(mag));
/!* console.log(magazineShelf.getFirst()); *!/

magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points')); */

/* console.log(getObjectProperty(magazines[1], 'title')); */

// Task 07.04
// Utility Types

/* const bookRequiredFields: BookRequiredFields = {
    id: 1,
    title: 'Learn Angular',
    author: 'Anna',
    available: false,
    category: Category.Angular,
    pages: 200,
    markDamaged: null,
};

const updatedBook: UpdatedBook = {
    id: 2,
    title: 'Learn React',
}; */

/* let params: Parameters<CreateCustomerFunctionType>;
params = ['Anna', 30, 'Kyiv'];
createCustomer(...params); */

// Task 08.01
// Class decorators (sealed)

/*
const universityLibrarian = new UL.UniversityLibrarian();
const universityLibrarian2 = new UL.UniversityLibrarian();

universityLibrarian['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
UL.UniversityLibrarian.prototype['a'] = 2;

const fLibrarian = new UL.UniversityLibrarian();
fLibrarian.name = 'Anna';
fLibrarian['printLibrarian']();*/

// Task 08.03
// Method decorators

/* const favLibrarian = new UL.UniversityLibrarian();
console.log(favLibrarian);

favLibrarian.assistFaculty = null; */
// favLibrarian.teachCommunity = null;

// Task 08.04
// Method decorator (timeout)

/* const newEncyclopedia: Encyclopedia = new Encyclopedia(1);
newEncyclopedia.printItem(); */

// Task 08.05
// Parameter Decorators

/*
const favLibrarian = new UL.UniversityLibrarian();
console.log(favLibrarian);
favLibrarian.name = 'Anna';
favLibrarian.assistCustomer('Ihor', 'Learn TypeScript');*/

// Task 08.06
// Property Decorator

/* const favLibrarian = new UL.UniversityLibrarian();
favLibrarian.name = 'Anna';
console.log(favLibrarian.name);
favLibrarian.assistCustomer('Ihor', 'Learn TypeScript');
console.log(favLibrarian); */

// Task 08.07
// Accessor Decorator

/* const newEncyclopedia: Encyclopedia = new Encyclopedia(1);
newEncyclopedia.copies = 5;
console.log(newEncyclopedia.copies); */