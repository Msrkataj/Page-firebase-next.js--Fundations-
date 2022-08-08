import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");





    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };




    return (
        <>
            <HomeHeader/>
            <div className="login-menu">
                <div className="login-header">
                    <h1>Zaloguj się</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200}/>
                </div>
                <div className="login-content">
                    <div className="email">
                        <label className="form__label">Email</label>
                        <input type="text" placeholder= "krzysztof@gmail.com" onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}/>
                    </div>
                    <div className="password">
                        <label className="form__label">Hasło</label>
                        <input type="password"  placeholder= "*******" onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="login-buttons">
                    <Link href="/Register">
                        <a className="btn">Załóź konto</a>
                    </Link>
                    <Link href="../">
                        <a className="btn" onClick={login}>Zaloguj się</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login