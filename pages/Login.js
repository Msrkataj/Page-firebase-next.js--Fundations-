import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React from "react";


const Login = () => {

    return (
        <>
            <HomeHeader/>
            <div className="login-menu">
                <div className="login-header">
                    <h1>Zaloguj się</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                </div>
                <div className="login-content">
                    <div className="email">
                        <label className="form__label">Email</label>
                        <input type="text"  id="email" placeholder= "krzysztof@gmail.com"/>
                    </div>
                    <div className="password">
                        <label className="form__label">Hasło</label>
                        <input type="password"  id="password" placeholder= "*******"/>
                    </div>
                </div>
                <div className="login-buttons">
                    <Link href="/Register">
                        <a className="btn">Załóź konto</a>
                    </Link>
                    <Link href="../">
                        <a type="submit" className="btn">Zaloguj się</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login