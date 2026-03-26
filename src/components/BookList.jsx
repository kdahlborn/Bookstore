import books from '../../assets/books.json';

const BookList = () => {
    return (
        <ul className="book-list">
            {books.map((book) => (
                <li className="book-list__item" key={book.id}>
                    {book.title} - {book.author}
                </li>
            ))}
        </ul>
    );
};

export default BookList;
