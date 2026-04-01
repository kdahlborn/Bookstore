const Cart = ({ qty }) => {
    return (
        <div className="header__cart">
            <p className="header__cart-text">Cart</p>
            <i className="fa-solid fa-basket-shopping"></i>
            <span className="header__cart-qty">{qty}</span>
        </div>
    );
};

export default Cart;
