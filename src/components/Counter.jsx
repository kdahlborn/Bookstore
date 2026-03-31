import Button from './Button';

const Counter = ({ book, qty, addToCart, removeFromCart }) => {
    return (
        <section className="counter">
            {/* <button
                className="counter__btn counter__btn--red"
                onClick={() => removeFromCart(book)}
            >
                -
            </button> */}
            <Button
                text="-"
                className="btn--red counter__btn"
                onClick={() => removeFromCart(book)}
            />
            <p className="counter__qty">{qty}</p>
            {/* <button className="counter__btn" onClick={() => addToCart(book)}>
                +
            </button> */}
            <Button
                text="+"
                className="counter__btn"
                onClick={() => addToCart(book)}
            />
        </section>
    );
};

export default Counter;
