import BookList from '../components/BookList';
import books from '../../assets/books.json';
import Book from '../components/Book';

const BookPage = ({ addToCart }) => {
    return (
        <main className="page">
            <h1 className="page__title">Books</h1>
            <section className="books-container">
                {books.map((book) => (
                    <Book book={book} key={book.id} addToCart={addToCart} />
                ))}
            </section>
        </main>
    );
};

export default BookPage;
