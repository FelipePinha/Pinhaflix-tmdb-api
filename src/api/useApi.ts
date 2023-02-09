import axios from "axios";
import apiConfig from "./apiConfig";
import { useQuery } from "react-query";

interface ApiProps {
    type: string;
    param: string;
    queryName: string;
}

function useApi(apiProp: ApiProps) {
    const { data, isLoading, error } = useQuery(
        `${apiProp.queryName}`,
        async () => {
            return axios
                .get(
                    apiConfig.baseUrl +
                        apiProp.type +
                        apiProp.param +
                        `?${apiConfig.apiKey}`
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
