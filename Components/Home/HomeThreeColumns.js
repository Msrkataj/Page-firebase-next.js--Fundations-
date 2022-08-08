import React, {useEffect, useState} from "react";
import Link from 'next/link'
import HomeHeader from "./HomeHeader";
import Image from "next/image";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc, setDoc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";


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
    const [des, setDes] = useState("")
    const [foundation, setFoundation] = useState("");
    const [organization, setOrganization] = useState([]);
    const [orders, setOrders] = useState("")
    const [info, setInfo] = useState(foundation)
    const [infos, setInfos] = useState(info)
    const [pages, setPages] = useState([1,2,3])

    // const usersCollectionRef = collection(db, "foundationn");


    useEffect(() => {

        onSnapshot(collection(db, "organization"), (snapshot) =>
            setDescription(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))));

        const get = async () => {

            const result = []
            const resultF = []
            const resultO = []
            const resultOr = []

            const docRefFou = collection(db, "foundation");
            const docRefOrg = collection(db, "organization");
            const docRefOrd = collection(db, "orders");
            const docRefInfo = collection(db, "info");



            const docSnapFou = await getDocs(docRefFou);
            const docSnapOrg = await getDocs(docRefOrg);
            const docSnapOrd = await getDocs(docRefOrd);
            const docSnapInfo = await getDocs(docRefInfo);



            docSnapFou.forEach(element => resultF.push(element.data()))
            docSnapOrg.forEach(element => resultO.push(element.data()))
            docSnapOrd.forEach(element => resultOr.push(element.data()))
            docSnapInfo.forEach(element => setInfo(element.data()))
            // docSnapFou.forEach(element => setFoundation(prev => element.data()))



            setFoundation(prev => resultF)
            setOrganization(prev => resultO)
            setOrders(prev => resultOr)
            // setInfo(prev => foundation)
            // setActive(prev => foundation)

        }
        get()
    }, [])


//     useEffect(
//         () => {
//         onSnapshot(collection(db, "organization"), (snapshot) =>
//             setDescription(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))))
// }, [])

    const firstPage = () => {
        setPages([0,1,2])
    }

    const secondPage= () => {
        setPages([3,4,5])
    }

    const thirdPage = () => {
        setPages([6,7,8])
    }
    // foundation.forEach(element => setPages(active[element]))

   // const sum = pages.forEach(element => (console.log(element)))

    console.log(infos)

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
                        <p>{info.foundation}</p>
                    </div>
                    <div className="who-helps-column organization">
                        <div onClick={() => setActive("organization")} className="who-helps-button">Organizacjom
                            pozarządowym
                        </div>
                        <p>{info.organization}</p>
                    </div>
                    <div className="who-helps-column collection">
                        <div onClick={() => setActive("orders")} className="who-helps-button">Lokalnym zbiórkom</div>
                        <p>{info.orders}</p>

                    </div>
                </div>
                <div className="who-helps-desktop">
                    <div className="who-helps-buttons-desktop">
                        <div className="who-helps-column foundation">
                            <div onClick={() => setInfos(info.foundation) & setActive(foundation) & firstPage()} className="who-helps-button">Fundacjom</div>
                        </div>
                        <div className="who-helps-column organization">
                            <div onClick={() => setInfos(info.organization) & setActive(organization) & firstPage()} className="who-helps-button">Organizacjom
                                pozarządowym
                            </div>
                        </div>
                        <div className="who-helps-column collection">
                            <div onClick={() => setInfos(info.orders) & setActive(orders) & firstPage()} className="who-helps-button">Lokalnym zbiórkom
                            </div>
                        </div>
                    </div>
                    <div className="who-helps-info">
                        <p>{infos}</p>
                    </div>
                    <div className="who-helps-rows">
                        <div className="who-helps-row who-helps-row-first">
                            <div className="who-helps-row-header">
                                <h2>{active[pages[0]].title}</h2>
                                <p>{active[pages[0]].objective}</p>
                            </div>
                            <p>{active[pages[0]].stuff}</p>
                        </div>
                        <div className="who-helps-row who-helps-row-second">
                            <div className="who-helps-row-header">
                                <h2>{active[pages[1]].title}</h2>
                                <p>{active[pages[1]].objective}</p>
                            </div>
                            <p>{active[pages[1]].stuff}</p>
                        </div>
                        <div className="who-helps-row who-helps-row-third">
                            <div className="who-helps-row-header">
                                <h2>{active[pages[2]].title}</h2>
                                <p>{active[pages[2]].objective}</p>
                            </div>
                            <p>{active[pages[2]].stuff}</p>
                        </div>
                    </div>
                    <div className="who-helps-desktop-pages">
                        <div onClick={firstPage} className="page">1</div>
                        <div style={{display: active.length-1 < 4 ? "none" : null}} onClick={secondPage} className="page">2</div>
                        <div style={{display: active.length-1 < 7 ? "none" : null}} onClick={thirdPage} className="page">3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeThreeColumns