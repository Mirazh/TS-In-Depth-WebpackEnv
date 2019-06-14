import {Category} from './enums';
import {Author, Book, Logger} from './intefaces';
import {
  checkoutBooks,
  createCustomerID,
  getBooksByCategory,
  getTitles,
  logCategorySearch,
  getBooksByCategoryPromise, logSearchResults,
} from './lib/utility-functions';


/** Task 4 */
const myID:string = createCustomerID('Ann', 10);
let idGenerator: (name: string, id: number) => string;

idGenerator = (name: string, id: number) => `${name}, ${id}`;

/** Task 5 */
/*createCustomer('Denis');
createCustomer('Denis', 25);
createCustomer('Denis', 25, 'Gomel');*/

const myBooks = checkoutBooks('Ann', 1, 2, 4);

//myBooks.forEach(book => console.log(book));

/** Task 6 */
const checkedOutBooks = getTitles(false);
//checkedOutBooks.forEach(book => console.log(book));

/** Task 7 */
const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};
//printBook(myBook);
//myBook.markDamaged('missing back cover');

/** Task 8 */
const logDamage: Logger = (reason: string): void => console.log(`Damaged: ${reason}`);
//logDamage('missing back cover');

/** Task 9 */
const favouriteAuthor: Author = {
  name: 'Denis',
  email: 'dongor7@gmail.com',
  numBooksPublished: 10,
};

/*const favouriteLibrarian: Librarian = {
  assistCustomer: custName => console.log(custName),
  department: 'department',
  name: 'Denis',
  email: 'dongor7@gmail.com',
};*/

/** Task 10 */
//const favoriteLibrarian: Librarian = new UniversityLibrarian();
//favoriteLibrarian.name = 'Anna';
//favoriteLibrarian.assistCustomer('Denis');

/** Task 11 */
/*const ref: ReferenceItem = new ReferenceItem('Title', 2019);
ref.printItem();
ref.publisher = 'Denis';
console.log(ref.publisher);*/

/** Task 12 */

/*const refBook: RefBook = new RefBook('My title', 2019, 5);
refBook.printItem();*/

/** Task 13 */
/** Abstract */

/** Task 14 */
/** In NamespaceDemo */

/** Task 15 */
/** Export/Import */

/** Task 16 */
/** Default export */

/** Task 17 */
/** Re-export */

/** Task 18 */
const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
//let result: any = purge<Book>(inventory);
//console.log(result);
//result = purge<number>([1,2,3,4]);
//console.log(result);

/** Task 19 */
/*const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(item => bookShelf.add(item));
const firstBook: Book = bookShelf.getFirst();
console.log(firstBook);*/

/*const magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(item => magazineShelf.add(item));*/
//const firstMagazine: Magazine = magazineShelf.getFirst();
//console.log(firstMagazine);

/** Task 20 */
//magazineShelf.printTitles();
//const o = magazineShelf.find('Five Points');
//console.log(o);

/** Task 21, 22 */
//const favoriteLibrarian: Librarian = new UniversityLibrarian();
//favoriteLibrarian.name = 'Anna';
//favoriteLibrarian.assistCustomer('Denis');

/** Task 22 */
//favoriteLibrarian.printLibrarian();

/** Task 23 */
/*const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistFaculty = () => console.log('Changed 1');
favoriteLibrarian.assistFaculty() = () => console.log('Changed 2');*/

/** Task 24 */
/*const refBook: RefBook = new RefBook('My title', 2019, 5);
refBook.printItem();*/

/** Task 25, 26 */
/*const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Denis');*/

/** Task 27 */
/*const refBook: RefBook = new RefBook('My title', 2019, 5);
refBook.copies = 5;
console.log(refBook);
refBook.copies = -10;
console.log(refBook);*/

/** Task 28 */
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish');

/** Task 29 */
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//       console.log(titles);
//       return titles.length;
//     })
//     .then(count => console.log(count))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Complete'));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Complete'));
// console.log('Finish');

/** Task 30 */
// console.log('Beginning search...');
// logSearchResults(Category.JavaScript)
//     .catch(reason => console.log(reason));
// console.log('Search submitted...');

/** Task 31 */
enum Type {
  Story,
  Bug,
}

interface Issue {
  name: string;
  description ?: string;
  type: Type;
}

function getTypeById(id: number): string {
  return Type[id];
}

class Task implements Issue {
  constructor(public name: string, public type: Type = Type.Story) {};

  getTaskInfo(): string {
    return `Name: ${this.name}; Issue type: ${getTypeById(this.type)}`;
  }
}

const newTask: Task = new Task('Fix bug', Type.Bug);
const taskInfo: string = newTask.getTaskInfo();
console.log(taskInfo);

//logFirstAvailable();
//logBookTitles(getBookTitlesByCategory());
