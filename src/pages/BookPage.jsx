import BookList from '../components/BookList';
import books from '../../assets/books.json';
import Book from '../components/Book';

const BookPage = () => {
    return (
        <main className="page">
            <h1 className="page__title">Books</h1>
            {/* <BookList /> */}
            <section className="books-container">
                {books.map((book) => (
                    <Book book={book} key={book.id} />
                ))}
            </section>
        </main>
    );
};

export default BookPage;
