import books from '../../assets/books.json';
import Book from './Book';

const BookList = ({ cart, addToCart, removeFromCart }) => {
    return (
        <section className="books-container">
            {books.map((book) => (
                <Book
                    book={book}
                    key={book.id}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </section>
    );
};

export default BookList;
