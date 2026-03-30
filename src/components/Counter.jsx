const Counter = ({ book, addToCart }) => {
    return (
        <section className="counter">
            <button className="counter__btn counter__btn--red">-</button>
            <p className="counter__qty"></p>
            <button className="counter__btn" onClick={() => addToCart(book)}>
                +
            </button>
        </section>
    );
};

export default Counter;
