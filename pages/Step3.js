import Link from 'next/link'

import HeaderStep from "../Components/Home/HeaderStep";
import Footer from "../Components/Home/Footer";
import React from "react";


const Step3 = () => {

    return (
        <>
            <HeaderStep/>
            <section className="step-content">
                <div className="step-content-alert">
                    <h2>Ważne!</h2>
                    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
                <div className="step-content-info">
                    <div className="step-content-center">
                        <div className="steps">
                            <p>Krok 3/4</p>
                            <h2>Lokalizacja: </h2>
                            <form className="bags">
                                <select name="bags" >
                                    <option value="hide">--wybierz--</option>
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
                                        <div className="toggle">
                                            <input type="radio" name="sizeBy" value="weight" id="sizeWeight" />
                                            <label htmlFor="sizeWeight">dzieciom</label>
                                            <input type="radio" name="sizeBy" value="dimensions" id="sizeDimensions"/>
                                            <label htmlFor="sizeDimensions">samotnym matkom</label>
                                            <input type="radio" name="sizeBy" value="dimensions2" id="size"/>
                                            <label htmlFor="size">bezdomnym</label>
                                            <input type="radio" name="sizeBy" value="dimensions3" id="sizeD"/>
                                            <label htmlFor="sizeD">niepełnosprawnym</label>
                                            <input type="radio" name="sizeBy" value="dimensions4" id="sizeDi"/>
                                            <label htmlFor="sizeDi">osobom starszym</label>
                                        </div>
                                </form>
                            </div>
                            <div className="step-text">
                                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie) </h3>
                                <textarea id="message"></textarea>
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
            </section>
            <Footer/>
        </>
    )
}

export default Step3