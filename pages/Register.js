import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");



    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <HomeHeader/>
            <div className="register-menu">
                <div className="register-header">
                    <h1>Załóż konto</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                </div>
                <div className="register-content">
                    <div className="email">
                        <label className="form__label">Email</label>
                        <input type="text"  id="email" placeholder= "krzysztof@gmail.com"  onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}/>
                    </div>
                    <div className="password">
                        <label className="form__label">Hasło</label>
                        <input type="password"  id="password" placeholder= "*******"  onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}/>
                    </div>
                    <div className="password-return">
                        <label className="form__label">Powtórz hasło</label>
                        <input type="password"  id="password" placeholder= "*******"/>
                    </div>
                </div>
                <div className="register-buttons">
                    <Link href="/Login">
                        <a className="btn" onClick={register}>Załóź konto</a>
                    </Link>
                    <Link href="/Login">
                        <a type="submit" className="btn">Zaloguj się</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Register