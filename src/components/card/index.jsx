import styles from "./style.module.css";

import Title from "../title/index";
import Button from "../button";

import { useState } from "react";
import useRandomPassword from "../hooks/useRandomPassword";

export default function Card() {
    const [copied, setCopied] = useState("Copiar");
    const [randomPassword, setRandomPassword] = useRandomPassword();
    const [passwordSize, setPasswordSize] = useState("");

    return (
        <div className={`${styles.card}`}>

            <Title>Generate Password</Title>

            <div className={styles.container}>

                <Button onClick={() => {
                    setCopied("Copiar");
                    setRandomPassword(passwordSize);
                }}>Gerar</Button>

                <Button onClick={() => {
                    window.navigator.clipboard.writeText(randomPassword);
                    setCopied("Copiado!");
                }}>{copied}</Button>

            </div>

            <div className={styles.containerInputs}>
                <label htmlFor="qtd-characters">QTD-CHARACTERS</label>
                <input type="text" id="qtd-characters"
                    onChange={(event) => {
                        setRandomPassword(0);
                        setPasswordSize(event.target.value);
                    }}
                />
            </div>

            <div className={styles.displayPassword}>
                {randomPassword}
            </div>

            <p>Password generated with <span>{passwordSize}</span> characters !</p>
        </div>
    );
}