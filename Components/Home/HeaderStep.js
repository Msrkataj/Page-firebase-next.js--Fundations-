import Link from 'next/link'
import HomeHeader from "./HomeHeader";
import Image from "next/image";
import React from "react";


const HeaderStep = () => {

    return (
        <>
            <HomeHeader/>
            <div className="header-step">
                <div className="header-step-image"></div>
                <div className="header-step-info">
                    <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200}/>
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <div className="diamonds">
                        <div className="diamond">
                            <div className="diamond-info">
                                <h3>1</h3>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>
                        <div className="diamond">
                            <div className="diamond-info">
                                <h3>2</h3>
                                <p>Spakuj je w worki</p>
                            </div>
                        </div>
                        <div className="diamond">
                            <div className="diamond-info">
                                <h3>3</h3>
                                <p>Wybierz fundację</p>
                            </div>
                        </div>
                        <div className="diamond">
                            <div className="diamond-info">
                                <h3>4</h3>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderStep