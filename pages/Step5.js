import Link from 'next/link'
import HeaderStep from "../Components/Home/HeaderStep";
import Footer from "../Components/Home/Footer";
import React, {useEffect, useState} from "react";
import  { db }  from "../firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";


const Step5 = (Step1) => {

    const [Steps, setSteps] = useState([]);
    const [State, setState] = useState(false);
    const [back, setBack] = useState(() => {});
    const [bags, setBags] = useState(() => {});
    const info = bags

    const Where = localStorage.getItem("Where")
    const initialWhere = JSON.parse(Where);
    const whoHelp = localStorage.getItem("whoHelp")
    const initialWhoHelp = JSON.parse(whoHelp);
    const address = localStorage.getItem("address")
    const Address = JSON.parse(address);
    const nameOrganization = localStorage.getItem("NameOrganization")
    const NameOrganization = JSON.parse(nameOrganization);
    const term = localStorage.getItem("term")
    const Term = JSON.parse(term);
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, "form");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { backs: back,howManyBags: bags, where: Where, whoHelp: whoHelp, address: Address, term: Term, nameOrganization: NameOrganization});
    };

    useEffect(() => {
        const saved = localStorage.getItem("back")
        const initialValue = JSON.parse(saved);
        setBack(prev => (
            initialValue || ""
        ))
            , [setBack]
    })

    useEffect(() => {
        const saved = localStorage.getItem("bags");
        const initialValue = JSON.parse(saved);
        setBags(prev => (
            initialValue || ""
        ))
            , [setBags]
    })

    useEffect(() => {
        setSteps(prev => (
            Step1
        ))
            back === "ubrania, które nadają się do ponownego użycia" ? setState("ubrania w dobrym stanie") : false ||
                back === "ubrania, do wyrzucenia" ? setState("ubrania w złym stanie") : false
            , [setSteps]
    })


    return (
        <>
            <HeaderStep Step={"StepBye"}/>
            <section className="step-content step5">
                <div className="step-content-info">
                    <div className="step-content-center">
                        <div className="steps">
                            <h2>Podsumowanie Twojej darowizny</h2>
                            <div className="back">
                                <h3>Oddajesz:</h3>
                                <div className="back-info">
                                    <div>
                                        <div className="steps-icon steps-icon1"/>
                                        <p>{bags} {info < 2 ? "worek" : "worki"}, {!State ? back : State}, {initialWhoHelp}</p>
                                    </div>
                                    <div>
                                        <div className="steps-icon steps-icon4"/>
                                        <p>dla lokalizacji: {initialWhere}</p>
                                    </div>
                                </div>
                            </div>
                            <form className="summary">
                                <div className="summary-address summary-center">
                                    <div className="summary-title">
                                        <h3>Adres odbioru:</h3>
                                    </div>
                                    <div className="summary-value">
                                        <form>
                                            <b>Ulica:</b><p> {Address.street}</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <b>Miasto:</b><p> {Address.city}</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <b>Kod pocztowy:</b><p> {Address.postalCode}</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <b>Numer telefonu:</b><p> {Address.telephone}</p>
                                            <p></p>
                                        </form>
                                    </div>
                                </div>
                                <div className="summary-term summary-center">
                                    <div className="summary-title">
                                        <h3>Termin odbioru:</h3>
                                    </div>
                                    <div className="summary-value">
                                        <form>
                                            <b>Data:</b><p> {Term.date}</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <b>Godzina:</b><p> {Term.hours}</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <b>Uwagi dla kuriera:</b><p> {Term.comments}</p>
                                            <p></p>
                                        </form>
                                    </div>
                                </div>
                            </form>
                            <div className="button">
                                <Link class href="/Step4">
                                    <a className="btn">Wstecz</a>
                                </Link>
                                <Link class href="/StepGoodbye">
                                    <a className="btn" onClick={createUser}>Potwierdzam</a>
                                </Link>
                            </div>
                        </div>
                        <div className="steps-background"></div>
                    </div>
                </div>
                <div className="steps-background-mobile">
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Step5