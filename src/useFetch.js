import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('There is an Error!')
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 2000)
    }, [url]);

    return {data, isPending, error }
}