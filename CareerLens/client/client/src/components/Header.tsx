// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo-container">
                {/* Placeholder for an actual logo icon, styled via .logo-icon in styles.css */}
                <div className="logo-icon"></div>
                <span className="app-name">Career Lens AI</span>
                <span className="app-tagline">Your AI-Powered Career Navigator</span>
            </div>
        </header>
    );
};

export default Header;