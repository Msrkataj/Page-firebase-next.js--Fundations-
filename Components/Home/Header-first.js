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
                <div className="header-down">
                    <div className="header-down-info">
                        <div className="header-down-info-first">Masz w domu rzeczy, z którymi nie wiesz co zrobić?</div>
                        <div className="header-down-info-second">ODDAJ JE POTRZEBUJĄCYM
                            <br/>
                            - szybko i w zaufane ręce</div>
                    </div>
                    <div className="header-down-login">ZAŁÓŻ KONTO</div>
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