import styles from "./Gerador.module.css"
import { useState } from 'react';

export function Gerador() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useUppercase, setUseUppercase] = useState(false);
    const [useNumbers, setUseNumbers] = useState(false);
    const [useSymbols, setUseSymbols] = useState(false);

    const generatePassword = () => {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        let characters = "";
        if (useLowercase) characters += lowercase;
        if (useUppercase) characters += uppercase;
        if (useNumbers) characters += numbers;
        if (useSymbols) characters += symbols;

        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setPassword(password);
    };

    return (
            <div className={styles.passwordGenerator}>
                <input type="number" value={length} onChange={e => setLength(+e.target.value)} />
                <label>
                    <input type="checkbox" checked={useLowercase} onChange={e => setUseLowercase(e.target.checked)} /> Letras minúsculas
                </label>
                <label>
                    <input type="checkbox" checked={useUppercase} onChange={e => setUseUppercase(e.target.checked)} /> Letras maiúsculas
                </label>
                <label>
                    <input type="checkbox" checked={useNumbers} onChange={e => setUseNumbers(e.target.checked)} /> Números
                </label>
                <label>
                    <input type="checkbox" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} /> Caracteres especiais
                </label>
                <button onClick={generatePassword}>Gerar Senha</button>
                <input className={styles.result} type="text" value={password} readOnly />
            </div>
    );
}