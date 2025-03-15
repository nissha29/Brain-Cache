import axios from "axios";
import { URL } from "../utils/contants";

export function useQuery() {

    async function fetchAiResponse (query: string) {
        try {
            const result = await axios.post(
                `${URL}/content/query`,
                {query: query},
                {
                    headers: {
                        authorization: `${localStorage.getItem('authToken')}`
                    }
                }
            )

            if (!result.data || result.data.success === false) {
                console.error("API returned error:", result.data);
                return `Error: ${result.data?.message || "Unknown server error"}`;
            }
            return result.data.response;
        } catch (err) {
            console.log(`Error generating AI's response, ${err}`);
        }
    }
    return { fetchAiResponse };
}