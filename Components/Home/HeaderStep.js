import Link from 'next/link'
import HomeHeader from "./HomeHeader";
import Image from "next/image";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";


const HeaderStep = ({Step}) => {
console.log(Step)
    return (
        <>
            <HomeHeader close={true}/>
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
            <div className="header-step-mobile">
                <div className="header-step-mobile-title">
                    <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200}/>
                    <h2>Wystarczą 4 proste kroki</h2>
                </div>
            </div>
            <div className="steps-mobile">
                <button className={Step === "Step1" ? "step-mobileControl step-mobile" : 'step-mobile'}>
                    <Link class href="/Step">
                        <a className="btn" >1</a>
                    </Link>
                </button>
                <button className={Step === "Step2" ? "step-mobileControl step-mobile" : 'step-mobile'}>
                    <Link class href="/Step2">
                        <a className="btn" >2</a>
                    </Link>
                </button>
                <button className={Step === "Step3" ? "step-mobileControl step-mobile" : 'step-mobile'}>
                    <Link class href="/Step3">
                        <a className="btn" >3</a>
                    </Link>
                </button>
                <button className={Step === "Step4" ? "step-mobileControl step-mobile" : 'step-mobile'}>
                    <Link class href="/Step4">
                        <a className="btn" >4</a>
                    </Link>
                </button>
                <button className={Step === "StepBye" ? "step-mobileControl step-mobile" : 'step-mobile'}>
                    <Link class href="/StepGoodbye">
                        <a className="btn"></a>
                    </Link>
                    <FontAwesomeIcon icon={faCheck} style={{opacity: Step === "StepBye" ? 1 : 0.20}}/>
                </button>
            </div>
        </>
    )
}

export default HeaderStep