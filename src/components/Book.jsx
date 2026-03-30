import firstCaseToUpper from '../utils/firstCaseToUpper';
import Button from './Button';
import Counter from './Counter';

const Book = ({ book, addToCart }) => {
    return (
        <article className="book">
            <section className="book__top">
                <h3 className="book__title">{book.title}</h3>
                <h4 className="book__subtitle">By {book.author}</h4>
            </section>
            <section className="book__middle">
                <p className="book__genre">
                    Genre: {firstCaseToUpper(book.genre)}
                </p>
                <p className="book__desc">{book.desc}</p>
                <p className="book__pages">{book.pages} pages</p>
            </section>
            {/* <Button
                text="Add to cart"
                className="book__btn"
                onClick={() => addToCart(book)}
            /> */}
            <Counter book={book} addToCart={addToCart} />
        </article>
    );
};

export default Book;
