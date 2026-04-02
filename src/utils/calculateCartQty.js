export default function calculateCartQty(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
}
