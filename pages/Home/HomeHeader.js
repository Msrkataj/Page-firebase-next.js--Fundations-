import React, {useState} from "react";
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShirt} from '@fortawesome/free-solid-svg-icons'

const HomeHeader = () => {
    const [active, setActive] = useState(false);
    const data = [
        {
            name: "Start",
            Link: "/"
        },
        {
            name: "O co chodzi?",
            Link: "./Why"
        },
        {
            name: "O nas",
            Link: "/team",
        },
        {
            name: "Fundacja i organizacje",
            Link: "/events",
        },
        {
            name: "Kontakt",
            Link: "/contact",
        },
    ];

    return (
        <>
            <div className="header">
                <div className="header-up">
                    <div className="logo">
                        <FontAwesomeIcon icon={faShirt} className="fa-3x"/>
                    </div>
                    <div className="menu">
                        <div onClick={() => setActive(!active)}>
                            <div className={active ? "activeHamburger" : "hamburber"}/>
                        </div>
                        <div className="nav">
                            <div className="nav-login">
                            <Link href="../Login/Login.js">
                                <a className="nav-login-button nav-login-button-first">Zaloguj</a>
                            </Link>
                            <Link href="../Login/Login.js">
                                <a className="nav-login-button">Załóż konto</a>
                            </Link>
                            </div>
                        <ul>
                            {data.map((item, i) => (
                                // eslint-disable-next-line react/jsx-key
                                <Link href={item.Link}>
                                    <li key={i}>
                                        <a href="#" className={"a"}>
                                            {item.name}
                                        </a>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                        </div>
                    </div>
                    <div className={active ? "activeSidenav " : "sidenav "}>
                        <ul className={"ul"}>
                            {data.map((item, i) => (
                                // eslint-disable-next-line react/jsx-key
                                <Link href={item.Link}>
                                    <li key={i}>
                                        <a href="#" className={"a"}>
                                            {item.name}
                                        </a>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                        <Link href="../Login/Login.js">
                        <a className="login">ZALOGUJ</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader