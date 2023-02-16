import apiConfig from "../../api/apiConfig";

import "./banner.scss";

interface BannerProps {
    poster: string;
    handleToggleModal: () => void;
}

export const Banner = (props: BannerProps) => {
    const poster = props.poster;

    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${apiConfig.banner(poster)})` }}
        >
            <div className="button-container">
                <button
                    onClick={props.handleToggleModal}
                    className="open-modal-button"
                >
                    Assistir trailer
                </button>
            </div>
        </div>
    );
};
