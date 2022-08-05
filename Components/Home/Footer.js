import Link from 'next/link'
import HomeHeader from "./HomeHeader";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShirt} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Footer = () => {

    return (
        <>
            <div id="contact">
            <div  className="footer-mobile">
                <div className="logo">
                    <Link href="../../pages/Login.js">
                        <a>
                            <FontAwesomeIcon icon={faShirt} className="fa-3x"/>
                        </a>
                    </Link>
                </div>
                <div className="contact">
                    <p>Skontaktuj się z nami</p>
                    <Link href="../../pages/Login.js">
                        <a>
                            <FontAwesomeIcon icon={faPhone}/>
                        </a>
                    </Link>
                    <Link href="../../pages/Login.js">
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
            <div className="footer-desktop">
                <div className="contact-background">
                <div className="background"></div>
                </div>
                <div className="contact">
                    <div className="contact-center">
                        <div className="contact-center-header">
                            <h1>Skontaktuj się z nami</h1>
                            <Image src="/assets/assets/Decoration.svg" height={80} width={150} alt=""/>
                        </div>
                        <div className="contact-center-down">
                            <form className="form">
                                <div className="form-up">
                                <div className="form-field">
                                    <label className="form__label">Wpisz swoje imię</label>
                                    <input type="text" className="form__input name" id="name" placeholder= "Krzysztof"/>
                                </div>
                                <div className="form-field">
                                    <label className="form__label" htmlFor="email">Wpisz swój email</label>
                                    <input type="email" className="form__input email" id="email" placeholder= "abc@xyz.pl"/>
                                </div>
                                </div>
                                <div className="form-consent">
                                    <label className="form-textarea">Wpisz swoją wiadomość</label>
                                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                                </div>
                                <button type="submit" className="btn">Wyślij</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copyright-info">Copyright by Coders Lab</div>
                    <div className="copyright-icons">
                        <Image src="/assets/assets/Facebook.svg" height={30} width={50} alt=""/>
                        <Image src="/assets/assets/Instagram.svg" height={30} width={50} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer