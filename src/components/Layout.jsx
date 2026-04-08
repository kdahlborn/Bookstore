import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ activeUser, setActiveUser, qty }) => {
    return (
        <>
            <Header
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                qty={qty}
            />
            <main className="page">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
