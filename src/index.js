import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useTypewriter from "react-typewriter-hook";
import { random } from "lodash";

import "./styles.css";

const MagicOcean = [
    "I love you~~~",
    "小宝贝，我看你现在睡得那么香",
    "我有一些话想对你讲~~~~",
    "我爱你哟~~康康宝贝 mua~~"
];
let index = 0;

function App() {
    const [magicName, setMagicName] = useState("magic is going to happen");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                // index = index + 1 > 2 ? 0 : ++index + 1;
                index = index > 3 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 5000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <p className="cursor">{name}</p>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
