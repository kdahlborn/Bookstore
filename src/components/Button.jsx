const Button = ({ text, className, type, onClick }) => {
    return (
        <button className={`btn ${className}`} type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
