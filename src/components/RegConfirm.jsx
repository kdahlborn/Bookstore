import Button from './Button';

const RegConfirm = ({ setDisplayLogin }) => {
    const handleClick = () => {
        setDisplayLogin(true);
    };

    return (
        <article className="confirm">
            <h1 className="confirm__title">Registration successfull!</h1>
            <Button
                text="Login"
                className="confirm__btn"
                onClick={handleClick}
            />
        </article>
    );
};

export default RegConfirm;
