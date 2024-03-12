import { useState, useEffect } from "react";
export function App() {


    const API_URL_FACT = "https://catfact.ninja/fact"
    const API_URL_IMAGE = 'https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red'
    const API_URL = 'https://cataas.com/'

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        fetch(API_URL_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data;
                setFact(fact);

                const threeFirstWords = fact.split(' ', 3)
                console.log(threeFirstWords)

                fetch('https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true')
                    .then(res => res.json())
                    .then(response => {
                        const { url } = response
                        setImageUrl('https://cataas.com/${url}')
                    })
            })
    }, [])

    return (
        <main>
            <h1>Hola mundo</h1>
            <p>{fact}</p>
            {imageUrl && <img src={imageUrl} alt={'Imagen de: ${fact}'} />}
        </main>);
}