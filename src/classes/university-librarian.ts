import * as Interfaces from '../interfaces';

class UniversityLibrarian implements Interfaces.ILibrarian {
    department: string;
    email: string;
    name: string;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}.`);
    }
}

export { UniversityLibrarian };