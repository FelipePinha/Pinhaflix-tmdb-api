import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.scss";

export const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <header className="header-bar">
            <div className="logo-container">
                <strong className="logo" onClick={() => navigate("/")}>
                    PINHAFLIX
                </strong>
            </div>
            <nav className="header-right-content">
                <a href="#" className={pathname === "/" ? "active" : ""}>
                    Home
                </a>
                <a href="#" className={pathname === "/movies" ? "active" : ""}>
                    Filmes
                </a>
                <a href="#" className={pathname === "/series" ? "active" : ""}>
                    Séries
                </a>
            </nav>
        </header>
    );
};
