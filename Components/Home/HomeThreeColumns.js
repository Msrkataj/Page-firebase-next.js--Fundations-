import React, {useState} from "react";
import Link from 'next/link'
import HomeHeader from "./HomeHeader";
import Image from "next/image";

const descriptionMap = {
    foundation: {
        info: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        first: {
            title: "Fundacja “Dbam o Zdrowie”",
            objective: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        second: {
            title: "Fundacja “Dla dzieci”",
            objective: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            stuff: "ubrania, meble, zabawki"
        },
        third: {
            title: "Fundacja “Bez domu”",
            objective: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            stuff: "ubrania, jedzenie, ciepłe koce"
        },
        four: {
            title: "Fundacja “Dbam o Zdrowie”",
            objective: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        five: {
            title: "Fundacja “Dla dzieci”",
            objective: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            stuff: "ubrania, meble, zabawki"
        },
        six: {
            title: "Fundacja “Bez domu”",
            objective: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            stuff: "ubrania, jedzenie, ciepłe koce"
        },
        seven: {
            title: "Fundacja “Dbam o Zdrowie”",
            objective: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        eight: {
            title: "Fundacja “Dla dzieci”",
            objective: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            stuff: "ubrania, meble, zabawki"
        },
        nine: {
            title: "Fundacja “Bez domu”",
            objective: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            stuff: "ubrania, jedzenie, ciepłe koce"
        }
        },
    organization: {
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        first: {
            title: "Organizacja “Lorem Ipsum 1”",
            objective: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            stuff: "Egestas, sed, tempus"
        },
        second: {
            title: "Organizacja “Lorem Ipsum 2”",
            objective: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet"
        },
        third: {
            title: "Organizacja “Lorem Ipsum 3”",
            objective: "Scelerisque in dictum non consectetur a erat nam.",
            stuff: "Mi, quis, hendrerit, dolor"
        },
        four: {
            title: "Organizacja “Lorem Ipsum 4”",
            objective: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            stuff: "Egestas, sed, tempus"
        },
        five: {
            title: "Organizacja “Lorem Ipsum 5”",
            objective: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet"
        },
        six: {
            title: "Organizacja “Lorem Ipsum 6”",
            objective: "Scelerisque in dictum non consectetur a erat nam.",
            stuff: "Mi, quis, hendrerit, dolor"
        }
    },
    orders: {
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        first: {
            title: "Zbiórka “Lorem Ipsum 1”",
            objective: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            stuff: "Egestas, sed, tempus"
        },
        second: {
            title: "Zbiórka “Lorem Ipsum 2”",
            objective: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet"
        },
        third: {
            title: "Zbiórka “Lorem Ipsum 3”",
            objective: "Scelerisque in dictum non consectetur a erat nam.",
            stuff: "Mi, quis, hendrerit, dolor"
        }
    },
}

const HomeThreeColumns = () => {
    const [active, setActive] = useState("foundation");
    const [description, setDescription] = useState("")



    return (
        <>
            <div id="events" className="who-helps">
                <div className="who-helps-header">
                    <h1>Komu pomagamy?</h1>
                    <Image src="/assets/assets/Decoration.svg" height={80} width={220} alt=""/>
                </div>
                <div className="who-helps-buttons">
                    <div className="who-helps-column foundation">
                        <div onClick={() => setActive("foundation")} className="who-helps-button">Fundacjom</div>
                        <p>{descriptionMap.foundation.info}</p>
                    </div>
                    <div className="who-helps-column organization">
                        <div onClick={() => setActive("organization")} className="who-helps-button">Organizacjom pozarządowym</div>
                        <p>{descriptionMap.organization.info}</p>
                    </div>
                    <div className="who-helps-column collection">
                        <div onClick={() => setActive("orders")} className="who-helps-button">Lokalnym zbiórkom</div>
                        <p>{descriptionMap.orders.info}</p>

                    </div>
                </div>
                <div className="who-helps-desktop">
                    <div className="who-helps-buttons-desktop">
                    <div className="who-helps-column foundation">
                    <div onClick={() => setActive("foundation")} className="who-helps-button">Fundacjom</div>
                    </div>
                    <div className="who-helps-column organization">
                    <div onClick={() => setActive("organization")} className="who-helps-button">Organizacjom pozarządowym</div>
                    </div>
                    <div className="who-helps-column collection">
                    <div onClick={() => setActive("orders")} className="who-helps-button">Lokalnym zbiórkom</div>
                    </div>
                    </div>
                    <div className="who-helps-info">
                    <p>{descriptionMap[active].info}</p>
                    </div>
                    <div className="who-helps-rows">
                        <div className="who-helps-row who-helps-row-first">
                            <div className="who-helps-row-header">
                                <h2>{descriptionMap[active].first.title}</h2>
                                <p>{descriptionMap[active].first.objective}</p>
                            </div>
                            <p>{descriptionMap[active].first.stuff}</p>
                        </div>
                        <div className="who-helps-row who-helps-row-second">
                            <div className="who-helps-row-header">
                                <h2>{descriptionMap[active].second.title}</h2>
                                <p>{descriptionMap[active].second.objective}</p>
                            </div>
                            <p>{descriptionMap[active].second.stuff}</p>
                        </div>
                        <div className="who-helps-row who-helps-row-third">
                            <div className="who-helps-row-header">
                                <h2>{descriptionMap[active].third.title}</h2>
                                <p>{descriptionMap[active].third.objective}</p>
                            </div>
                            <p>{descriptionMap[active].third.stuff}</p>
                        </div>
                    </div>
                    <div className="who-helps-desktop-pages">
                        <div className="page">1</div>
                        <div className="page">2</div>
                        <div className="page">3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeThreeColumns