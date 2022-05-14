import logo from "../logo.svg";
import React, {useEffect, useState} from "react";

export const TranslationPage = () => {
    const [ test, setTest ] = useState<string>();
    const [ error, setError ] = useState<string>();
    useEffect(() => {
        const fetchTest = async () => {
            try {
                const text = await (await fetch(`http://localhost:8080/test?p=hello`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                    }
                })).text();
                setTest(text);
            }
            catch (e) {
                setError((e as object).toString());
            }
        }
        fetchTest();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <h1>Response: {test ?? "-"}.</h1>
                <h1>Error: {error ?? "-"}.</h1>
            </header>
        </div>
    );
}