import Cart from './Cart';
import Logo from './Logo';
import Button from './Button';

const Header = ({ qty, activeUser, setActiveUser }) => {
    const handleClick = () => {
        setActiveUser(null);
    };

    return (
        <header className="header">
            <Logo />
            {activeUser ? (
                <nav className="header__nav">
                    <Button
                        text={
                            <>
                                Fuck off!{' '}
                                <i className="fa-regular fa-hand-peace"></i>
                            </>
                        }
                        className="header__logout-btn"
                        onClick={handleClick}
                    />
                    <Cart qty={qty} />
                </nav>
            ) : (
                ''
            )}
        </header>
    );
};

export default Header;
