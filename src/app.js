showHello('greeting', 'TypeScript');
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = "Hello from ".concat(name);
}
/////////////////////////////////////////////////
var Category;
(function (Category) {
    Category[Category["JavaScript"] = 0] = "JavaScript";
    Category[Category["CSS"] = 1] = "CSS";
    Category[Category["HTML"] = 2] = "HTML";
    Category[Category["TypeScript"] = 3] = "TypeScript";
    Category[Category["Angular"] = 4] = "Angular";
})(Category || (Category = {}));
function getAllBooks() {
    var books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}
function logFirstAvailable(books) {
    console.log("Number of books: ".concat(books.length));
    var title = books.find(function (book) { return book.available === true; }).title;
    console.log("First available book: ".concat(title));
}
function getBookTitlesByCategory(inputCategory) {
    var books = getAllBooks();
    return books
        .filter(function (_a) {
        var category = _a.category;
        return category === inputCategory;
    })
        .map(function (_a) {
        var title = _a.title;
        return title;
    });
}
function logBookTitles(titles) {
    titles.forEach(function (title) { return console.log(title); });
}
console.log(getAllBooks());
logFirstAvailable(getAllBooks());
function getBookAuthorByIndex(index) {
    var books = getAllBooks();
    var _a = books[index], title = _a.title, author = _a.author;
    return [title, author];
}
function calcTotalPages() {
    var data = [
        { lib: 'libName1', books: 1000000000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5000000000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3000000000, avgPagesPerBook: 280 }
    ];
    var r = data.reduce(function (acc, obj) {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(r);
}
//===============================================================================
// Task 02.01
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(0));
