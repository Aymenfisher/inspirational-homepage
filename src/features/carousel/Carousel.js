import React, { useState, useEffect } from "react";


export const Carousel = ({change}) => {
    const [imageLink, setImageLink] = useState('../../assets/default.jpg');


    const changeImage = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/random?client_id=-m9Fq--0ORRXekCRez3UsA8TXHV-qLfUtq-v28wE5jw');
            if (response.ok) {
                const jsonResponse = await response.json();
                setImageLink(jsonResponse['urls']['full'])
            } else {
                setImageLink('./assets/default.jpg')
            }
        } catch (error) {
            setImageLink('./assets/default.jpg')
        }
    }

    useEffect(() =>{
        changeImage()
    },[change])

    return(<img  src={imageLink} className='carousel-image' alt='background'/>)

}