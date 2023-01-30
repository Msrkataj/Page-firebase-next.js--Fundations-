import Link from 'next/link'
import HomeHeader from "./HomeHeader";
import Image from 'next/image';
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase";

const FoursSteps = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    return (
        <>
            <div id="Why" className="section-steps">
                <div className="section-steps-header">
                    <h1>Wystarczą 4 proste kroki</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                </div>
                <div className="steps">
                    <steps className="steps-mobile">
                        <div>
                            <div className="steps-icon steps-icon1"/>
                            <p>Wybierz rzeczy do oddania</p>
                        </div>
                        <div>
                            <div className="steps-icon steps-icon2"/>
                            <p>Spakuj je</p>
                        </div>
                        <div>
                            <div className="steps-icon steps-icon3"/>
                            <p>Zdecyduj komu chcesz pomóc</p>
                        </div>
                        <div>
                            <div className="steps-icon steps-icon4" />
                            <p>Zamów kuriera w dogodnym terminie</p>
                        </div>
                    </steps>
                    <steps className="steps-desktop">
                        <div>
                            <div className="steps-icon steps-icon1"/>
                            <p>Wybierz rzeczy</p>
                            <div className="line"></div>
                            <div className="steps-info">ubrania, zabawki, sprzęt i inne</div>
                        </div>
                        <div>
                            <div className="steps-icon steps-icon2"/>
                            <p>Spakuj je</p>
                            <div className="line"></div>
                            <div className="steps-info">skorzystaj z worków na śmieci</div>
                        </div>
                        <div>
                            <div className="steps-icon steps-icon3"/>
                            <p>Zdecyduj komu chcesz pomóc</p>
                            <div className="line"></div>
                            <div className="steps-info">wybierz zaufane miejsce</div>
                        </div>
                        <div>
                            <div className="steps-icon steps-icon4" />
                            <p>Zamów kuriera</p>
                            <div className="line"></div>
                            <div className="steps-info">kurier przyjedzie w dogodnym terminie</div>
                        </div>
                    </steps>
                </div>
                <div className="section-steps-button">
                    <Link href={user ? "Step" : "Login"}>
                        <a className="button">ODDAJ RZECZY</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FoursSteps
