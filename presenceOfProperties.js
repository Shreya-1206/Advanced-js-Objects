const book = {
    name : "DO EPIC SHIT",
    cost :300,
    author: "Ankur Warikoo",
    overview: function() {
        return `This ${this.name} is about the life lessions and progression`
    }
}

const book1 = {
    name : "DO EPIC SHIT",
    cost :300,
    author: "Ankur Warikoo",
}

console.log(book.overview());
console.log('overview' in book);
console.log(book.hasOwnProperty('overview'));

console.log('overview' in book1);
