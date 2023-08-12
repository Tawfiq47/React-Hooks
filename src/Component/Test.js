import React, { useState } from "react";

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({ });

    const changeState = () => {
        setMyName("Rasin");

        setMyInfo({
            age: "age 25",
            address: " address: jashore, dhaka"
        })
    }

    return (
        <div>
            <button onClick={changeState}>show</button>
            <h2>{myName}</h2>
            <h3>{myInfo.age}</h3>
            <h4>{myInfo.address}</h4>
        </div>
    )

}

export default Test 