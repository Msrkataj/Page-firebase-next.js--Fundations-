import Link from 'next/link'
import React, {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase";

const Question = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    return (
        <>
           <div style={{display: user ? "none" : null}} className="question">
               <h1>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</h1>
               <Link href="../../pages/Login.js">
                   <a className="login">ZAŁÓŻ KONTO</a>
               </Link>
           </div>
            <div className="question question-mobile">
                <h1>Chcesz pozbyć się problemu i zrobić coś dobrego dla innych?</h1>
                <div className="header-login-buttons">
                    <div className="header-login-button header-down-login">
                        <Link href={"Step"}>
                            <a className="info-button">ODDAJ RZECZY</a>
                        </Link>
                    </div>
                    <div className="header-login-button header-down-login">
                        <Link href={"Step"}>
                            <a className="info-button">ZORGANIZUJ ZBIÓRKĘ</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question