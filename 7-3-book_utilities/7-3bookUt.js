let bookUtils={
    setter : new Set(),
    getFirstPublished: function(book1,book2) {
        return (book1.year>book2.year? book2.year:book1.year);
    },
    setNewEdition: function(book,editionYear) {
        book.latestEdition = editionYear;
    },
    setLanguage: function(book,language) {
        book.Language = language;
    },
    setTranslation : function(book,language,translator) {
        book.translation = {
            Language : language,
            Translator : translator
        }
    },
    setPublisher : function(book,name,location) {
        book.publisher = {
            Name : name,
            Location : location
        }
    },
    isSamePublisher : function(book,book1) {
        if((book.publisher.Name===book1.publisher.Name)&&(book.publisher.Location===book1.publisher.Location)){
            return "they are identical";
        }
        else{
            return "they are not identical";
        }
    }
}
const book1={
    name: 'The Midnight Library',
    author: 'Matt Haig',
    year: 2013,
}

const book2={
    name: 'Rental At A Time',
    author: 'Alex Michaelides',
    year: 2020,
}
console.log(bookUtils.getFirstPublished(book1,book2));
bookUtils.setNewEdition(book1,2016);
console.log(book1);
bookUtils.setLanguage(book1,'english');
console.log(book1);
bookUtils.setTranslation(book2,'hebrew','ben david');
console.log(book2.translation);
bookUtils.setPublisher(book1,'marry','america');
bookUtils.setPublisher(book2,'harry','france');
console.log(book1.publisher);
console.log(book2.publisher);
console.log(bookUtils.isSamePublisher(book1,book2));



bookUtils.setPublisher(book1,'harry','france');
bookUtils.setPublisher(book2,'harry','france');
console.log(book1.publisher);
console.log(book2.publisher);
console.log(bookUtils.isSamePublisher(book1,book2));




