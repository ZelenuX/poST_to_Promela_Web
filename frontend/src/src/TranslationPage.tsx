import logo from "../logo.svg";
import React, {useEffect, useState} from "react";
import {sendRequest} from "./util/sendRequest";
import {PromelaProgramDto} from "./util/types";

export const TranslationPage = () => {
    const [test, setTest] = useState<string>();
    useEffect(() => {
        sendRequest<PromelaProgramDto>('http://localhost:8080/translate', {p: "name"}, "dvd").then(value => {
            setTest(value.program);
        });
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
            </header>
        </div>
    );
}