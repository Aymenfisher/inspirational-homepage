import React, { useState, useEffect } from "react";

export const Quote = () => {
    const [quote, setQuote] = useState({});

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (response.ok) {
                const jsonResponse = await response.json();
                setQuote({
                    author: jsonResponse.author,
                    content: jsonResponse.content
                })
            } else {
                console.log('Couldnt Get Quote')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return(
        <>
        <p className='quote-content'> {`"${quote.content}"`} </p>
        <span className='quote-author'>{quote.author}</span>
        </>
    )
}