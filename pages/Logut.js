import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import React from "react";
import Image from "next/image";



const Logut = () => {

    return (
        <>
                <HomeHeader/>
                <div className="login-menu">
                    <div className="login-header">
                        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                        <Image src="/assets/assets/Decoration.svg" height={60} width={200}/>
                    </div>
                    <div className="login-content-logut">
                        <Link href="../">
                            <a className="btn">Strona główna</a>
                        </Link>
                    </div>
                </div>
            </>
    )
}

export default Logut