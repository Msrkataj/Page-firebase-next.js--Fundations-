import Link from 'next/link'

import HeaderStep from "../Components/Home/HeaderStep";
import Footer from "../Components/Home/Footer";
import React from "react";


const Step2 = () => {

    return (
        <>
            <HeaderStep/>
            <section className="step-content">
                <div className="step-content-alert">
                    <h2>Ważne!</h2>
                    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
                <div className="step-content-info">
                    <div className="step-content-center">
                        <div className="steps">
                            <p>Krok 2/4</p>
                            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                            <form className="bags">
                                <label>Liczba 60l worków:</label>
                                <select name="bags" >
                                    <option value="hide">--wybierz--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </form>
                            <div className="button">
                                <Link class href="/Step">
                                    <a className="btn" >Wstecz</a>
                                </Link>
                                <Link class href="/Step3">
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

export default Step2