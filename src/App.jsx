import { useState } from 'react';
import Header from './components/Header';
import BookPage from './pages/BookPage';
import calculateCartQty from './utils/calculateCartQty';
import LoginForm from './components/LoginForm';
import initUsers from './data/users';
import RegisterForm from './components/RegisterForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error';

function App() {
    const [cart, setCart] = useState([]);
    const [activeUser, setActiveUser] = useState(null);
    const [users, setUsers] = useState(initUsers);
    const [displayLogin, setDisplayLogin] = useState(true);

    const addToCart = (book) => {
        setCart((prev) => {
            const bookInCart = prev.find((item) => item.id === book.id);

            if (bookInCart) {
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
            const bookInCart = prev.find((item) => item.id === book.id);

            // Om boken finns i cart OCH har quantity 1
            if (bookInCart?.quantity === 1) {
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

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Layout
                    activeUser={activeUser}
                    setActiveUser={setActiveUser}
                    qty={calculateCartQty(cart)}
                />
            ),
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: (
                        <LoginForm
                            users={users}
                            setActiveUser={setActiveUser}
                            setDisplayLogin={setDisplayLogin}
                        />
                    ),
                },
                {
                    path: 'books',
                    element: (
                        <BookPage
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            setActiveUser={setActiveUser}
                        />
                    ),
                },
                {
                    path: 'register',
                    element: <RegisterForm users={users} setUsers={setUsers} />,
                },
            ],
        },
    ]);

    return (
        <div className="app">
            {/* <Header
                qty={calculateCartQty(cart)}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
            />
            {activeUser ? ( // Om activeUser finns: rendera BookPage
                <BookPage
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    setActiveUser={setActiveUser}
                />
            ) : displayLogin ? ( // Tillståndsvariabel displayLogin styr om login- eller regformuläret ska visas
                <LoginForm
                    users={users}
                    setActiveUser={setActiveUser}
                    setDisplayLogin={setDisplayLogin}
                />
            ) : (
                <RegisterForm
                    users={users}
                    setUsers={setUsers}
                    setDisplayLogin={setDisplayLogin}
                />
            )} */}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
