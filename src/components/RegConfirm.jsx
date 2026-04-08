import { Link } from 'react-router-dom';
import Button from './Button';

const RegConfirm = ({ setDisplayLogin }) => {
    const handleClick = () => {
        setDisplayLogin(true);
    };

    return (
        <article className="confirm">
            <h1 className="confirm__title">Registration successfull!</h1>
            <Link to="/" className="confirm__btn btn">
                Login
            </Link>
        </article>
    );
};

export default RegConfirm;
