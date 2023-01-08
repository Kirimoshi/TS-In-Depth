import {Category} from './enums';

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: IDamageLogger;
}

interface IDamageLogger {
    (str: string): void;
}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer(custName: string, bookTitle: string): void;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

export interface IMagazine {
    title: string;
    publisher: string;
}

export interface IShelfItem {
    title: string;
}

export interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

export interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export { IBook, IDamageLogger as ILogger, IPerson, IAuthor, ILibrarian, TOptions };
