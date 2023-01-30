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

const HomeHeader = ({close}) => {
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


    console.log(data[0].name)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            close === `close` ? console.log("tak") : console.log("nie")
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
                    <h4 style={{display: !user ? "none" : null}}> Witaj: <p>{user?.email}</p> </h4>
                    <div className="menu">
                        <div onClick={() => setActive(!active)}>
                            <div className={active ? "activeHamburger" : "hamburber"}/>
                        </div>
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
                        <ul style={{display: close ? "none" : null}}>
                            {data.map((item, i) => (
                                <Scroll to={item.Link} key={i} smooth duraction={500} onClick={handleClick} className="scroll">
                                    <li key={i}>{item.name}</li>
                                </Scroll>
                            ))}
                        </ul>
                            <ul style={{display: !close ? "none" : null}}>
                                <Link href="../">
                                    <a className="scroll">Home</a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className={active ? "activeSidenav " : "sidenav"}>
                        <ul className="ul" style={{display: close ? "none" : null}}>
                            {data.map((item, i) => (
                                <Scroll to={item.Link} key={i} smooth duraction={500} onClick={handleClick} className="scroll">
                                    <li key={i}>{item.name}</li>
                                </Scroll>
                            ))}
                        </ul>
                        <ul className="home-mobile" style={{display: !close ? "none" : null}}>
                            <Link href="../">
                                <a>Home</a>
                            </Link>
                        </ul>
                        <Link href="/Login">
                        <a className="login" style={{display: user ? "none" : null}}>ZALOGUJ</a>
                        </Link>
                        <Link href="/Logut">
                            <a style={{display: !user ? "none" : null}} className="nav-login-button login" onClick={logout}>Wyloguj</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader