import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShirt} from '@fortawesome/free-solid-svg-icons'
import {Link as Scroll} from "react-scroll"
import {
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from "/firebase";

const HomeHeader = () => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({});

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


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const logout = async () => {
        await signOut(auth);
    };

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
                        <h4 style={{display: !user ? "none" : null}}> Witaj: <p>{user?.email}</p> </h4>

                        <div className="nav">
                            <div className="nav-login">

                            <Link href="/Login">
                                <a style={{display: user ? "none" : null}} className="nav-login-button nav-login-button-first">Zaloguj</a>
                            </Link>
                            <Link href="/Register">
                                <a style={{display: user ? "none" : null}} className="nav-login-button">Załóż konto</a>
                            </Link>
                                <Link href="/Logut">
                                    <a style={{display: !user ? "none" : null}} className="nav-login-button" onClick={logout}>Wyloguj</a>
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