import {IAuthor, IBook, IPerson} from './interfaces';
import {createCustomer} from './functions';

type BookProperties = keyof IBook;
type PersonBook = IPerson & IBook;
type BookOrUndefined = IBook | undefined;
export type BookRequiredFields = Required<IBook>;
export type UpdatedBook = Partial<IBook>;
export type AuthorWoEmail = Omit<IAuthor, 'email'>;
export type CreateCustomerFunctionType = typeof createCustomer;

export type fn = (a: string, b: number, c: boolean) => symbol;
export type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
export type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
export type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];

export type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

type BookRequiredProps = RequiredProps<IBook>;
type BookOptionalProps = OptionalProps<IBook>;

export type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredPropsType = RemoveProps<IBook, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<IBook, BookRequiredProps>;

export { BookProperties, PersonBook, BookOrUndefined };


