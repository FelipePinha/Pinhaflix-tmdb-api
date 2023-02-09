import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, List } from "phosphor-react";
import "./header.scss";

export const Header = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleToggleMenu = (e: any) => {
        setMobileMenuIsOpen(!mobileMenuIsOpen);
    };

    return (
        <header className="header-bar">
            <div className="logo-container">
                <strong className="logo" onClick={() => navigate("/")}>
                    PINHAFLIX
                </strong>
            </div>

            <List
                onClick={handleToggleMenu}
                size={32}
                className="open-mobile-menu"
            />

            <div
                className={`header-right-content ${
                    mobileMenuIsOpen ? "menu-is-active" : ""
                }`}
            >
                <header className="mobile-menu-header">
                    <strong className="mobile-menu-logo">PINHAFLIX</strong>
                    <span className="close-mobile-menu">
                        <X onClick={handleToggleMenu} />
                    </span>
                </header>

                <nav className="links">
                    <a href="#">Home</a>
                    <a href="#">Filmes</a>
                    <a href="#">Séries</a>
                </nav>
            </div>
        </header>
    );
};
