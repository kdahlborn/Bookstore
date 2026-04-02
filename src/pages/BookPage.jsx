import BookList from '../components/BookList';

const BookPage = ({ cart, addToCart, removeFromCart }) => {
    return (
        <main className="page">
            <h1 className="page__title">Books</h1>
            <BookList
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        </main>
    );
};

export default BookPage;
