import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abort = new AbortController();

        // Associating the abort controller with the fetch so we can stop it with such controller.
        fetch(url, {signal: abort.signal}) // Should probably specify GET method?
        .then((res) => { // res is the response in plain data of the url fetched
            if(!res.ok) {
                throw Error(`Response status returned "not ok"`);
            }
            return res.json(); // json method parses data in json format and it's returned
        })
        .then((data) => { // once the parsing is done (takes time), we have the data on json format
            setData(data);
            setIsPending(false);
        })
        .catch((e) => {
            if(e.name === "AbortError"){
                console.log(e.message + "| FETCH ABORTED");
            } else {
                setIsPending(false);
                setError(e.message);
            }
        });
        return () => abort.abort(); 
    }, [url]); // Since url never changes, adding it prevents this function from running for every render


    return { data, isPending, error}
}

export default useFetch;