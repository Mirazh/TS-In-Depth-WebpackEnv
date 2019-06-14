import {Book, LibMgrCallback} from "../intefaces";
import { Category } from "../enums";

export function purge<T>(inventory: Array<T>): Array<T> {
	return inventory.splice(2, inventory.length);
}

/** Task 1 */
export function getAllBooks():Book[] {
	let books: Array<Book> = [
		{ id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
		{ id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
		{ id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
		{ id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
	];

	return books;
}

export function logFirstAvailable(books = getAllBooks()):void {
	let firstBookName:string = null;
	const length:number = books.length;

	for (let book of books) {
		if (book.available) {
			firstBookName = book.title;
			break;
		}
	}

	console.log(`Count: ${length}; First title: ${firstBookName}`);
}

/** Task 2 */
export function getBookTitlesByCategory(enumCategory:Category = Category.JavaScript):Array<string> {
	const books:Array<Book> = getAllBooks();
	const titles: string[] = [];

	books.forEach(({ title, category }) => {
		if(category === enumCategory) {
			titles.push(title);
		}
	});

	return titles;
}

export function logBookTitles(titles: Array<string>):void {
	console.log(`Titles: ${titles.join(', ')};`);
}

/** Task 3 */
export function getBookById(id: number):Book | undefined {
	const books:Array<any> = getAllBooks();

	return books.find(book => id === book.id);
}

/** Task 4 */
export function createCustomerID(name: string, id: number):string {
	return `${name}, ${id}`;
}

/** Task 5 */
export function createCustomer(name:string, age?:number, city?:string) {
	console.log(`${name}${age ? ` ${age}` : ''}${city ? ` ${city}` : ''}`);
}

export function checkoutBooks(customer:string, ...bookIDs:number[]):string[] {
	const availableBooks:Array<any> = bookIDs.map(id => getBookById(id));
	const booksTitles:Array<string> = availableBooks.map(book => book.title);

	//console.log(`customer: ${customer}`);

	return booksTitles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(anyProperty: any): string[] {
	let books: Array<any> = getAllBooks();
	let filteredBooks: Array<string> = [];

	if (typeof anyProperty === 'string') {
		filteredBooks = books
			.filter((book) => book.author === anyProperty)
			.map(book => book.title);
	}

	if (typeof anyProperty === 'boolean') {
		filteredBooks = books
			.filter((book) => book.available === anyProperty)
			.map(book => book.title);
	}

	return filteredBooks;
}

export function printBook(book: Book): void {
	console.log(`${book.title} by ${book.author}`);
}

/** 28 */
export function getBooksByCategory(category: Category, callack: LibMgrCallback): void {
	setTimeout(() => {
		try {
			const titles: string[] = getBookTitlesByCategory(category);

			if (titles.length !== 0) {
				callack(null, titles);
			} else {
				throw new Error('No titles found');
			}
		} catch (e) {
			callack(e, null);
		}
	}, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
	if (err) {
		console.log(err.message);
	} else {
		console.log(titles);
	}
}

/** Task 29 */
export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
	const p: Promise<string[]> = new Promise((resolve, reject) => {
		setTimeout(() => {
			const titles: string[] = getBookTitlesByCategory(category);

			if (titles.length !== 0) {
				console.log('titles', titles);
				resolve(titles);
			} else {
				reject('No titles found');
			}
		}, 2000);
	});
	return p;
}

export async function logSearchResults(category: Category) {
	let foundBooks = await getBooksByCategoryPromise(category);
	console.log(foundBooks);
}

