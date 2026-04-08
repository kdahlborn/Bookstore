import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

const LoginForm = ({ users, setActiveUser, setDisplayLogin }) => {
    const [errorMsg, setErrorMsg] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const user = users.find(
            (u) =>
                u.username.toLowerCase() === username.toLowerCase().trim() &&
                u.password === password,
        );

        user
            ? (setActiveUser(user), navigate('/books'))
            : (setErrorMsg('Incorrect username or password'),
              usernameRef.current.focus());
    };

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <section className="form-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form__title">Login</h1>
                <p className="form__error">{errorMsg}</p>
                <label className="form__label">
                    Username
                    <input
                        type="text"
                        id="username"
                        className="form__input"
                        ref={usernameRef}
                        autoComplete="off"
                        required
                    />
                </label>
                <label className="form__label">
                    Password
                    <input
                        type="password"
                        id="password"
                        className="form__input"
                        ref={passwordRef}
                        required
                    />
                </label>
                <Button text="Login" className="form__btn" type="submit" />
                <Link className="form__footer" to="/register">
                    Don't have an account? Sign up
                </Link>
            </form>
        </section>
    );
};

export default LoginForm;
