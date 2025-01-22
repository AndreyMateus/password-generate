import { useState } from "react";

const allCharacters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<",
    "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
];

function randomPosition() {
    const randomPosition = Math.floor(Math.random() * allCharacters.length);
    return randomPosition;
}

function generateRandomPassword(passwordSize) {
    let randompassword = "";

    for (let i = 0; i < passwordSize; i++) {
        randompassword += allCharacters[randomPosition()];
    }

    return randompassword;
}

export default function useRandomPassword() {
    const [randomPassword, setPassword] = useState("");

    function setRandomPassword(passwordSize) {
        const randomPasswordGenerated = generateRandomPassword(passwordSize);
        setPassword(randomPasswordGenerated);
    }

    return [randomPassword, setRandomPassword];
}