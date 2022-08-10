import Link from 'next/link'
import HeaderStep from "../Components/Home/HeaderStep";
import Footer from "../Components/Home/Footer";
import React from "react";
import Image from "next/image";


const StepGoodbye = () => {

    return (
        <>
            <HeaderStep/>
            <section className="step-content step5">
                <div className="step-content-info">
                    <div className="step-content-center">
                        <div className="step">
                            <div className="steps-goodbye">
                                <h1>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.
                                </h1>
                                <Image src="/assets/assets/Decoration.svg" height={40} width={150} alt=""/>
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

export default StepGoodbye