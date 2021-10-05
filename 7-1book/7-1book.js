function bookDetail(params) {
    return "the booke name is: "+params.name+" and its price: "+params.price+
    " shekel and its length: "+params.length+" the books language is: "+params.language;
}


const book={
    name: 'Rental At A Time',
    price: 100,
    length: '170 pages',
    language: 'english',
}

console.log(bookDetail(book));
