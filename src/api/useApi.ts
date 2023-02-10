import axios from "axios";
import apiConfig from "./apiConfig";
import { useQuery } from "react-query";

interface ApiProps {
    queryName: string;
    type: string;
    param: string;
}

function useApi(apiProp: ApiProps) {
    const { data, isLoading, error } = useQuery(
        `${apiProp.queryName}`,
        () => {
            return axios
                .get(
                    apiConfig.baseUrl +
                        apiProp.type +
                        apiProp.param +
                        `?api_key=${apiConfig.apiKey}` +
                        "&language=pt-BR"
                )
                .then((response) => response.data);
        },
        {
            retry: 5,
        }
    );

    return {
        data,
        isLoading,
        error,
    };
}

export default useApi;
