import Link from 'next/link'
import Image from "next/image";
import React from "react";

const HomeFirst = () => {

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
                <Image src="/assets/assets/Home-Hero-Image.jpg" height={500} width={500} alt=""/>
                <div className="header-desktop-info">
                    <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="header-desktop-info-buttons">

                        <Link href="../Login/Login.js">
                            <a className="info-button">ODDAJ RZECZY</a>
                        </Link>

                        <Link href="../Login/Login.js">
                            <a className="info-button">ZORGANIZUJ ZBIÓRKĘ</a>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFirst