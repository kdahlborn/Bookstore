import { useState } from 'react';
import Header from './components/Header';
import BookPage from './pages/BookPage';
import calculateCartQty from './utils/calculateCartQty';
import LoginForm from './components/LoginForm';
import users from './data/users';

function App() {
    const [cart, setCart] = useState([]);
    const [activeUser, setActiveUser] = useState(null);

    const addToCart = (book) => {
        setCart((prev) => {
            const bookExistInCart = prev.find((item) => item.id === book.id);

            if (bookExistInCart) {
                // Returnerar en ny array med carts nuvarande innehåller samt ökar quantity på bok där ID matchar
                return prev.map(
                    (item) =>
                        item.id === book.id
                            ? { ...item, quantity: item.quantity + 1 } // Ökar quantity på boken i cart som matchar ID
                            : item, // "Hoppar över" böcker i cart där ID INTE matchar
                );
            } else {
                // Returnerar en ny array med carts nuvarande innehåller + boken med nyckelvärdet 'quantity: 1'
                return [...prev, { ...book, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (book) => {
        setCart((prev) => {
            const bookExistInCart = prev.find((item) => item.id === book.id);

            // Om boken finns i cart OCH har quantity 1
            if (bookExistInCart?.quantity === 1) {
                // Returnerar ny array UTAN boken som tagits bort
                return prev.filter((item) => item.id !== book.id);
            } else {
                // Returnerar en ny array med carts nuvarande innehåller samt minskar quantity på bok där ID matchar
                return prev.map((item) =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item,
                );
            }
        });
    };

    const handleLogin = ({ username, password }) => {
        const user = users.find(
            (u) => u.username === username && u.password === password,
        );

        user
            ? setActiveUser(user)
            : console.log('Fel användarnamn eller lösenord');
    };

    return (
        <div className="app">
            {activeUser ? (
                <BookPage
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ) : (
                <LoginForm handleLogin={handleLogin} />
            )}
            {/* <Header qty={calculateCartQty(cart)} /> */}
            {/* <BookPage
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            /> */}
        </div>
    );
}

export default App;
