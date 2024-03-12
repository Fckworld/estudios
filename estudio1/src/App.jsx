import { useState, useEffect } from "react";
export function App() {
    const API_URL_FACT = "https://catfact.ninja/fact"
    const API_URL_IMAGE = 'https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red'

    
    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(API_URL_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
            })
    }, [])

    const firstWord = fact.split(' ')[0]

    return (
        <main>
            <h1>Hola Mundo</h1>
            {fact && <p>{fact}</p>}
            <br />
            <h2>{firstWord}</h2>
        </main>
    );
}