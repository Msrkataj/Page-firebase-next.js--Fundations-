import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React from "react";


const Register = () => {

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
                        <input type="text"  id="email" placeholder= "krzysztof@gmail.com"/>
                    </div>
                    <div className="password">
                        <label className="form__label">Hasło</label>
                        <input type="password"  id="password" placeholder= "*******"/>
                    </div>
                    <div className="password-return">
                        <label className="form__label">Powtórz hasło</label>
                        <input type="password"  id="password" placeholder= "*******"/>
                    </div>
                </div>
                <div className="register-buttons">
                    <Link href="/Register">
                        <a className="btn">Załóź konto</a>
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