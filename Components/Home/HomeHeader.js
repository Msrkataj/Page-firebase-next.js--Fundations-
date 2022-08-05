import React, {useState} from "react";
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShirt} from '@fortawesome/free-solid-svg-icons'
import {Link as Scroll} from "react-scroll"

const HomeHeader = () => {
    const [active, setActive] = useState(false);
    const data = [
        {
            name: "Start",
            Link: "#"
        },
        {
            name: "O co chodzi?",
            Link: "Why"
        },
        {
            name: "O nas",
            Link: "team",
        },
        {
            name: "Fundacja i organizacje",
            Link: "events",
        },
        {
            name: "Kontakt",
            Link: "contact",
        },
    ];


    const handleClick = () => {
        setActive(prev => false)
    }

    return (
        <>
            <div id="#" className="header">
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
                            <Link href="/Login">
                                <a className="nav-login-button nav-login-button-first">Zaloguj</a>
                            </Link>
                            <Link href="/Register">
                                <a className="nav-login-button">Załóż konto</a>
                            </Link>
                            </div>
                        <ul>
                            {data.map((item, i) => (
                                // eslint-disable-next-line react/jsx-key
                                <Scroll to={item.Link} smooth duraction={500} onClick={handleClick} className="scroll">                                    <li key={i}>
                                            {item.name}
                                </li>
                                </Scroll>
                            ))}
                        </ul>
                        </div>
                    </div>
                    <div className={active ? "activeSidenav " : "sidenav "}>
                        <ul className={"ul"}>
                            {data.map((item, i) => (
                                // eslint-disable-next-line react/jsx-key
                                <Scroll to={item.Link} smooth duraction={500} onClick={handleClick}>
                                    <li key={i}>
                                            {item.name}
                                    </li>
                                </Scroll>
                            ))}
                        </ul>
                        <Link href="/Login">
                        <a className="login">ZALOGUJ</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader