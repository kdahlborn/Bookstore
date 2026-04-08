import Cart from './Cart';
import Logo from './Logo';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ qty, activeUser, setActiveUser }) => {
    const navigation = useNavigate();
    const handleClick = () => {
        setActiveUser(null);
        navigation('/');
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
                    {/* <Link to="/" className="header__logout-btn">
                        Fuck off! <i className="fa-regular fa-hand-peace"></i>
                    </Link> */}
                    <Cart qty={qty} />
                </nav>
            ) : (
                ''
            )}
        </header>
    );
};

export default Header;
