import axios from "axios";
import { useQuery } from "react-query";
import "./trailer.scss";

interface TrailerProps {
    modal: boolean;
    handleToggleModal: () => void;
    id: number;
    type: string | undefined;
}

export const Trailer = (props: TrailerProps) => {
    const { data, isLoading } = useQuery(`trailer-${props.id}`, () => {
        return axios.get(
            `https://api.themoviedb.org/3/${props.type}/${
                props.id
            }/videos?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`
        );
    });

    if (isLoading) return <div></div>;

    const key = data?.data.results[0].key;

    return (
        <div
            onClick={props.handleToggleModal}
            className={`modal-container ${props.modal ? "active" : ""}`}
        >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <iframe
                    src={`https://youtube.com/embed/${key}`}
                    width="100%"
                    height="100%"
                    title="video"
                ></iframe>
            </div>
        </div>
    );
};
