import logo from '../../assets/images/book-logo.png';

const Logo = () => {
    return (
        <figure className="header__logotype">
            <img src={logo} alt="Page logo" className="header__logo-img" />
            <h1 className="header__title">Bokhandlôrn</h1>
        </figure>
    );
};

export default Logo;
