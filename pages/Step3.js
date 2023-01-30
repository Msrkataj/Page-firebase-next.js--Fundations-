import Link from 'next/link'

import HeaderStep from "../Components/Home/HeaderStep";
import Footer from "../Components/Home/Footer";
import React, {useEffect, useState} from "react";
import Step5 from "./Step5";
import {remove} from "local-storage";


const Step3 = () => {
    const [input, setInput] = useState(false);

    const [NameOrganization, SetNameOrganization] = useState(() => {
        // getting stored value
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("NameOrganization");
            const initialValue = JSON.parse(saved);
            return initialValue || "";
        }
    });

    const [Where, SetWhere] = useState(() => {
        // getting stored value
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("Where");
            const initialValue = JSON.parse(saved);
            return initialValue || "";
        }
    });

    const [whoHelp, SetWhoHelp] = useState(() => {
        // getting stored value
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("whoHelp");
            const initialValue = JSON.parse(saved);
            return initialValue || "";
        }
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem("whoHelp", JSON.stringify(whoHelp));
        localStorage.setItem("Where", JSON.stringify(Where));
        localStorage.setItem("NameOrganization", JSON.stringify(NameOrganization));

    }, [whoHelp, Where, NameOrganization]);



    return (
        <>
            <HeaderStep Step={"Step3"}/>
            <section className="step-content step3-content">
                <div className="step-content-alert">
                    <h2>Ważne!</h2>
                    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
                <div className="step-content-info">
                    <div className="step-content-center">
                        <div className="steps">
                            <p>Krok 3/4</p>
                            <h2>Lokalizacja: </h2>
                            <form className="bags bags-step4">
                                <select  name="bags" value={Where} onChange={e => SetWhere(e.target.value)}>
                                    <option value="" hidden>--Wybierz--</option>
                                    <option value="Poznań">Poznań</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Wrocław">Wrocław</option>
                                    <option value="Katowice">Katowice</option>
                                </select>
                            </form>
                            <div className="step-who-help">
                                <h3>Komu chcesz pomóc? </h3>
                                <form>
                                        <div className="toggle" value={whoHelp} onChange={e => SetWhoHelp(e.target.value)}>
                                            <input type="radio" name="sizeBy" value="dzieciom" id="sizeWeight" />
                                            <label htmlFor="sizeWeight">dzieciom</label>
                                            <input type="radio" name="sizeBy" value="samotnym matkom" id="sizeDimensions"/>
                                            <label htmlFor="sizeDimensions">samotnym matkom</label>
                                            <input type="radio" name="sizeBy" value="bezdomnym" id="size"/>
                                            <label htmlFor="size">bezdomnym</label>
                                            <input type="radio" name="sizeBy" value="niepełnosprawnym" id="sizeD"/>
                                            <label htmlFor="sizeD">niepełnosprawnym</label>
                                            <input type="radio" name="sizeBy" value="osobom starszym" id="sizeDi"/>
                                            <label htmlFor="sizeDi">osobom starszym</label>
                                        </div>
                                </form>
                            </div>
                            <div className="step-text" >
                                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie) </h3>
                                <textarea id="message" value={NameOrganization} onChange={e => SetNameOrganization(e.target.value)}></textarea>
                            </div>
                            <div className="button">
                                <Link class href="/Step2">
                                    <a className="btn" >Wstecz</a>
                                </Link>
                                <Link class href="/Step4">
                                    <a className="btn" >Dalej</a>
                                </Link>
                            </div>
                        </div>
                        <div className="steps-background"></div>
                    </div>
                </div>
                <div className="steps-background-mobile">
                    <div className="step-back"></div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Step3