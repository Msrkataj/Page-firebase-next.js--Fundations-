import Link from 'next/link'
import HomeHeader from "../Home/HomeHeader";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShirt} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="logo">
                    <Link href="../Login/Login.js">
                        <a>
                    <FontAwesomeIcon icon={faShirt} className="fa-3x"/>
                        </a>
                    </Link>
                </div>
                <div className="contact">
                    <p>Skontaktuj się z nami</p>
                    <Link href="../Login/Login.js">
                        <a>
                    <FontAwesomeIcon icon={faPhone}/>
                        </a>
                    </Link>
                    <Link href="../Login/Login.js">
                        <a>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
            </Link>
                </div>
                <div className="info">
                    <ul className="info-ul">
                        <li>Regulamin</li>
                        <li>Polityka Prywatności</li>
                        <li>Instrukcja jak spakować rzeczy do oddania</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer