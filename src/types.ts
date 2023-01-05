import { IBook, IPerson } from './interfaces';

type BookProperties = keyof IBook;
type PersonBook = IPerson & IBook;
type BookOrUndefined = IBook | undefined;

export { BookProperties, PersonBook, BookOrUndefined };


