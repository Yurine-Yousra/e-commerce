import { useState, useEffect } from "react";

interface FetchDataProps<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

const useFetchData = <T,>(url: string): FetchDataProps<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                if (!res.ok) {
                    const result = await res.json();
                    throw new Error(result.message || "An error occurred");
                }

                const result = await res.json();
                setData(result.data);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
                setError(errorMessage);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetchData;
