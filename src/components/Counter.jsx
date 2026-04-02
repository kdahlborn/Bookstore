import Button from './Button';

const Counter = ({ book, qty, addToCart, removeFromCart }) => {
    return (
        <section className="counter">
            <Button
                text="-"
                className="btn--red counter__btn"
                onClick={() => removeFromCart(book)}
            />

            <p className="counter__qty">{qty}</p>

            <Button
                text="+"
                className="counter__btn"
                onClick={() => addToCart(book)}
            />
        </section>
    );
};

export default Counter;
