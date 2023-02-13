import "./footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo-container">
                    <Link to="/">
                        <strong className="logo">PINHAFLIX</strong>
                    </Link>
                </div>
                <div className="footer-info-content">
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/">Contato</Link>
                        <Link to="/">Termos de serviço</Link>
                        <Link to="/">Sobre nós</Link>
                    </div>
                    <div>
                        <Link
                            target="_blank"
                            to="https://www.themoviedb.org/documentation/api"
                        >
                            API
                        </Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Políticas de privacidade</Link>
                    </div>
                    <div>
                        <Link to="/">Recomendações</Link>
                        <Link to="/">Lançamentos recentes</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
                <div className="line"></div>
                <div className="made-by">
                    <span>
                        FEITO POR{"  "}
                        <a
                            target="_blank"
                            href="https://github.com/FelipePinha"
                        >
                            FELIPE CARVALHO
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};
