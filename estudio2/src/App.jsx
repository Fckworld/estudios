import { useState, useEffect } from "react";
export function App() {


    const API_URL_FACT = "https://catfact.ninja/fact"
    const API_URL_IMAGE = 'https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red'

    const [frase, setFrase] = useState();

    useEffect(() => {
        .then(data =>{
            setFrase(fact);
            const threeFristWord = fact.split(' ',3);
            fetch(API_URL)
        })
            
    }, []);

    return (
        <main>
            <h1>Hola mundo</h1>
            <p>{frase}</p>
            <p>{frase.split(" ", 4)}</p>
        </main>);
}