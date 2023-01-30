import Link from 'next/link'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase";


const HomeFirst = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    return (
        <>
                <div style={{display: user ? "none" : null}} className="header-down">
                    <div className="header-down-info">
                        <div className="header-down-info-first">Masz w domu rzeczy, z którymi nie wiesz co zrobić?</div>
                        <div className="header-down-info-second">ODDAJ JE POTRZEBUJĄCYM
                            <br/>
                            - szybko i w zaufane ręce</div>
                    </div>
                    <div className="header-down-login">ZAŁÓŻ KONTO</div>
                </div>
            <div className="header-login">
                <div className="header-login-title">Zacznij pomagać!
                    <br/>
                    Oddaj niechciane rzeczy w zaufane ręce</div>
                <div className="header-login-center">
                        <div className="header-info">
                            <div className="circle">
                                <div className="circle-center">0</div>
                            </div>
                            <div className="circle-info">oddanych <br/>worków</div>
                        </div>
                    <div className="header-info">
                        <div className="circle">
                            <div className="circle-center">0</div>
                        </div>
                        <div className="circle-info">wspartych<br/>organizacji</div>
                    </div>
                    <div className="header-info">
                        <div className="circle">
                            <div className="circle-center">0</div>
                        </div>
                        <div className="circle-info">zorganizowanych<br/>zbiórek</div>
                    </div>
                    </div>
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
            <div className="header-desktop">
                <div className="image"></div>
                <div className="header-desktop-info">
                    <h1>Zacznij pomagać! <br/><br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                    <div className="header-desktop-info-buttons">

                        <Link href={user ? "Step" : "Login"}>
                            <a className="info-button info-button-left">ODDAJ RZECZY</a>
                        </Link>

                        <Link href={user ? "Step" : "Login"}>
                            <a className="info-button">ZORGANIZUJ ZBIÓRKĘ</a>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFirst