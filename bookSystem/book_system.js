let books= [];
function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        }
        books.push(book);
        showbooks();
        clearInputs();
    }else{
        alert('Please fill in all the fields correctly');
    }
}
function showbooks(){
    const booksDiv = books.map((book,index) => '<h1>Book Number: '+(index+1)+'</h1>'+
        '<p><strong>Book Name: '+book.name+'</strong></p>'+
        '<p><strong>Author Name: '+book.authorName+'</strong></p>'+
        '<p><strong>Book Description: '+book.bookDescription+'</strong></p>'+
        '<p><strong>No. of Pages: '+book.pagesNumber+'</strong></p>'
    ).join('');
    document.getElementById('books').innerHTML = booksDiv;
}
function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}