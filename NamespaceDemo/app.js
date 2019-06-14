/// <reference path="utility-functions.ts" />
const books = Utility.maxBooksAllowed(10);
console.log(books);
var util = Utility.Fees;
const fee = util.calculateLateFee(10);
console.log(fee);
