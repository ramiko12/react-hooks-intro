import { useState, useEffect } from 'react'

export const useFetch = (url, dependencies) => {
    const [loading, setLoading] = useState(false)
    const [fetchedData, setData] = useState(null)
    useEffect(() => {
        setLoading(false);
        console.log("sending fetch request")
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch.');
            }
            return response.json();
        })
        .then(data => {
            setLoading(false);
            setData(data)
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    },dependencies)


    return [loading, fetchedData]
}