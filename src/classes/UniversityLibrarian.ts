import * as Interfaces from '../intefaces'
import {sealed, logger, writable, logParameter, logMethod, format} from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
	department: string;
	@format() name: string;
	email:string;

	@logMethod
	assistCustomer(@logParameter custName: string): void {
		console.log(`${this.name} is assisting ${custName}`);
	}

	@writable(true)
	assistFaculty(): void {
		console.log('Assisting faculty');
	}

	@writable(false)
	teachCommunity(): void {
		console.log('Teach community');
	}
}
