import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React from "react";
import Footer from "../Components/Home/Footer";
import HeaderStep from "../Components/Home/HeaderStep";


const Step = () => {

    return (
        <>
           <HeaderStep/>
            <section className="step-content">
                <div className="step-content-alert">
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
                <div className="step-content-info">
                    <div className="step-content-center">
                        <div className="steps">
                            <p>Krok 1/4</p>
                            <h2>Zaznacz co chcesz oddać:</h2>
                                <form>
                                        <label> <input type="radio" name="gender" value="m" /> ubrania, które nadają się do ponownego użycia </label><br />
                                        <label> <input type="radio" name="gender" value="w" /> ubrania, do wyrzucenia </label><br />
                                        <label> <input type="radio" name="gender" value="m" /> zabawki </label><br />
                                        <label> <input type="radio" name="gender" value="w" /> książki </label><br />
                                        <label> <input type="radio" name="gender" value="m" /> Inne </label><br />
                                </form>
                            <div className="button">
                                <Link class href="/Step2">
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

export default Step