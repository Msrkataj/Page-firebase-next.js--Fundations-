import Link from 'next/link'

import HeaderStep from "../Components/Home/HeaderStep";
import Footer from "../Components/Home/Footer";
import React from "react";
import Image from "next/image";


const Step5 = () => {

    return (
        <>
            <HeaderStep/>
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
                                        <p>4 worki, ubrania w dobrym stanie, dzieciom</p>
                                    </div>
                                    <div>
                                        <div className="steps-icon steps-icon4"/>
                                        <p>dla lokalizacji: Warszawa</p>
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
                                            <p>Ulica</p>
                                           <p></p>
                                        </form>
                                        <form>
                                            <p>Miasto</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <p>Kod pocztowy</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <p>Numer telefonu</p>
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
                                            <p>Data</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <p>Godzina</p>
                                            <p></p>
                                        </form>
                                        <form>
                                            <p>Uwagi dla kuriera</p>
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
                                    <a className="btn">Potwierdzam</a>
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

export default Step5