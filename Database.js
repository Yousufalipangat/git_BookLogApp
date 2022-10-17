import Realm from "realm";


class Book extends Realm.Object{}

Book.schema = {
    name : 'Book',
    properties: {
        bookId: "string",
        bookName: "string",
        bookAuther:"string",
        bookDetails: "string"

    },
    primaryNumber : "bookId"
}

export let openedReal = new Realm({schema:[Book],schemaVersion:5})

let getAllBook = ()=>{
    return openedReal.objects('Book');
}

let AddBook = (_bookId,_bookName,_bookAuther,_bookDetails)=>{
    openedReal.write(()=>{
        openedReal.create("Book",
    {
    bookId: _bookId,
    bookName:_bookName,
    bookAuther:_bookAuther,
    bookDetails : _bookDetails
    });
    }

    )
}

let deleteBook = (bookId)=>{
   
    openedReal.write(()=>{
        openedReal.delete(getAllBook().filtered("bookId = '"+bookId+"'"))
    })
}

let deleteAllBook = ()=>{
    openedReal.write(()=> openedReal.deleteAll()
    )
}

export{ getAllBook,AddBook,deleteAllBook,deleteBook}