import Cart from './Cart';
import Logo from './Logo';

const Header = ({ qty }) => {
    return (
        <header className="header">
            <Logo />
            <Cart qty={qty} />
        </header>
    );
};

export default Header;
