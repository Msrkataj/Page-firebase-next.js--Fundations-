import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React, {useEffect} from "react";
import { useState } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageError2, setMessageError2] = useState("");
    const [error, setError] = useState(null);
    const [cPassword, setCPassword] = useState('bad');
    const [showErrorMessage2, setShowErrorMessage2] = useState(false);
    const [operationType, setOperationType] = useState("");
    const [user, setUser] = useState({});

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const test4 = () => {
        return (
            <>
                <Link href="../">
                </Link>
            </>
        )
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])


    const handleChange = (event) => {
        if (!isValidEmail(event)) {
            setError('Email nieprawidłowy');
        } else {
            setError(null);
        }

        setMessage(event);
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            );
            console.log(user.operationType);
            setOperationType(user.operationType);
            setCPassword("good")

        } catch (error) {
            console.log(error.message);
            setCPassword(error.message)
        }
    };

    function testFunction(event) {
        setLoginEmail(event.target.value);
        handleChange(event.target.value);
    }

    useEffect(() => {
            loginPassword.length >= 8 ? setShowErrorMessage2(false) : setShowErrorMessage2(true)
            loginPassword !== "" ? showErrorMessage2 ? Error2message() : Error2empty() : Error2empty();
        }
        , [loginPassword, showErrorMessage2, setCPassword])

    const Error2empty = () => {
        setMessageError2("")
    }
    const Error2message = () => {
        setMessageError2("Hasło ma za mało znaków")
    }

    const test3 = () => {
        loginPassword === "" ? Error2message() : null
    }



    return (
        <>
            <HomeHeader close={true}/>
            <div style={{display: user ? null : "none"}} className="login-menu">
                <div className="login-content">
                    <h1>Zalogowano pomyślnie</h1>
                </div>
                <div className="login-buttons-success">
                    <Link href="../">
                        <a className="btn">Strona Główna</a>
                    </Link>
                    </div>
            </div>
            <div style={{display: !user ? null : "none"}} className="login-menu">
                <div  className="login-header">
                    <h1>Zaloguj się</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200}/>
                </div>
                <div className="login-content">
                    <div className="email">
                        {error && <h2 style={{color: 'red'}}>{error}</h2>}
                        <label className="form__label">Email</label>
                        <input type="text" placeholder= "krzysztof@gmail.com"
                            onChange={(event) => {
                                testFunction(event)
                            }}/>
                    </div>
                    <div className="password">
                        <div style={{color: 'red'}}> {messageError2} </div>
                        <label className="form__label">Hasło</label>
                        <input type="password"  placeholder= "*******" value={loginPassword}
                               onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}/>
                    </div>
                    <div style={{color: 'red'}}>{cPassword === "Firebase: Error (auth/wrong-password)." ? "Błędne hasło" : null}  </div>
                </div>
                <div className="login-buttons">
                    <Link href="/Register">
                        <a className="btn">Załóź konto</a>
                    </Link>
                    <Link href={error === null && error !== "" && showErrorMessage2 === false && cPassword === "good" ? "../" : ""}>
                        <a className="btn" onClick={ error === null && showErrorMessage2 === false ? login : test3}>Zaloguj się</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login