import React, {useEffect, useRef, useState} from "react";
import {sendRequest} from "./util/sendRequest";
import {PromelaProgramDto} from "./util/types";
import {Styled as S} from "./TranslationPage.styled";
import {EnhancedTextArea } from "./components/EnchancedTextArea";
import {Styled as T} from "./components/TextArea.styled";

export const TranslationPage = () => {
    const [test, setTest] = useState<string>();
    useEffect(() => {
        sendRequest<PromelaProgramDto>('http://localhost:8080/translate', {p: "name"}, "dvd").then(value => {
            setTest(value.program);
        });
    }, []);

    const [ postCode, setPostCode ] = useState<string>("");
    const translatorOutput = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        translatorOutput.current && (translatorOutput.current.readOnly = true);
    }, []);
    useEffect(() => {
        translatorOutput.current && (translatorOutput.current.value = postCode);
    }, [postCode]);

    return (
        <S.RootPageContainer>
            <S.Column>
                <EnhancedTextArea
                    className='code-input'
                    tabSize={2}
                    onTextChange={setPostCode}
                />
                <S.Options>

                </S.Options>
            </S.Column>
            <S.Column>
                <T.TextArea
                    ref={translatorOutput}
                />
                <S.Options>

                </S.Options>
            </S.Column>
        </S.RootPageContainer>
    );
}