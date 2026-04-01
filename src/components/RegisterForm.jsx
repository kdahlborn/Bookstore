import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import RegConfirm from './RegConfirm';

const RegisterForm = ({ users, setUsers, setDisplayLogin }) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [regComplete, setRegComplete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        const usernameExist = users.some((u) => u.username === user.username);

        if (usernameExist) {
            setErrorMsg('Username is already taken');
            usernameRef.current.focus();
        } else {
            setUsers((prev) => [...prev, user]);
            setRegComplete(true);
        }
    };

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <section className="form-wrapper">
            {regComplete ? (
                <RegConfirm setDisplayLogin={setDisplayLogin} />
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <h1 className="form__title">Register</h1>
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
                    <Button
                        text="Register"
                        className="form__btn"
                        type="submit"
                    />
                </form>
            )}
        </section>
    );
};

export default RegisterForm;
