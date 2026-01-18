import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityToolbar from './AccessibilityToolbar';
import AIPositioning from './AIPositioning';

const Layout = ({ children }) => {
    return (
        <>
            <AIPositioning />
            <Navbar />
            <AccessibilityToolbar />
            <main style={{ minHeight: 'calc(100vh - var(--header-height))', marginTop: 'var(--header-height)' }}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
