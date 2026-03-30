import { useState } from 'react';
import Header from './components/Header';
import BookPage from './pages/BookPage';
import calculateCartQty from './utils/calculateCartQty';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart((prev) => {
            const bookExist = prev.find((item) => item.id === book.id);

            if (bookExist) {
                return prev.map((item) =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                return [...prev, { ...book, quantity: 1 }];
            }
        });
    };
    console.log(cart);

    const removeFromCart = (book) => {
        const existingItem = cart.find((item) => item.id === book.id);

        if (existingItem) {
            existingItem.quantity--;
        } else {
            setCart((prev) => prev.filter((item) => item !== book));
        }
    };
    console.log(cart);

    return (
        <div className="app">
            <Header qty={calculateCartQty(cart)} />
            <BookPage addToCart={addToCart} />
        </div>
    );
}

export default App;
