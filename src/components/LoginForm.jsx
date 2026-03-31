import { useState } from 'react';
import Button from './Button';

const LoginForm = ({ handleLogin }) => {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(user);
    };

    return (
        <section className="form-wrapper">
            <h1 className="form-title">Login</h1>

            <form className="form">
                <label className="form__label">
                    Username
                    <input
                        type="text"
                        id="username"
                        className="form__input"
                        onChange={(e) =>
                            setUser({ ...user, username: e.target.value })
                        }
                        value={user.username}
                        autoComplete="off"
                    />
                </label>
                <label className="form__label">
                    Password
                    <input
                        type="password"
                        id="password"
                        className="form__input"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                        value={user.password}
                    />
                </label>
                <Button
                    text="Login"
                    className="form__btn"
                    onClick={handleSubmit}
                />
                <p className="form__footer">Don't have an account? Sign up</p>
            </form>
        </section>
    );
};

export default LoginForm;
