import React, { useState, useEffect } from "react";

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "hello",
        b: "Bangladesh"
    });

    const changeState = () => {
        setMyName("Rasin");
        setMyInfo({
            ...myInfo,
            a: "I love"
        });
    }

    useEffect(() => {
        console.log(myInfo);
    }, [myName, myInfo]);

    return (
        <div>
            <button onClick={changeState}>change</button>

        </div>
    )

}

export default Test 