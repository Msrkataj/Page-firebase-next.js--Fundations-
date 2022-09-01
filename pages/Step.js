import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React, {useEffect} from "react";
import { useState } from "react";
import Step5 from "./Step5";
import Footer from "../Components/Home/Footer";
import HeaderStep from "../Components/Home/HeaderStep";

export const useAuthRoute = (Steppp) => {

    const [isAuth, setIsAuth] = useState([]);

    useEffect(() => {
        setIsAuth(prev => Steppp)
        }
        , [setIsAuth])



    console.log(Steppp)
    console.log(isAuth)

    return {isAuth}

}

const Step = ({setIsAuth}) => {
    const [holidays, setHolidays] = useState([]);
    const [country, setCountry] = useState("PL")



    const [Steps, setSteps] = useState([]);




    const [back, setBack] = useState(() => {
        // getting stored value
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("back");
            const initialValue = JSON.parse(saved);
            return initialValue || "";
        }
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem("back", JSON.stringify(back));

    }, [back]);

    const handleTitleChange = (e) => {
       setBack(
           e.target.value)
    };


        Step5(country)

    Step5(Steps)
    useAuthRoute(Steps)



    console.log(Steps)

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
                                <form value={country} onChange={e => setCountry(e.target.value)}>
                                        <label> <input type="radio" name="gender" value="ubrania, które nadają się do ponownego użycia" onChange={handleTitleChange}/> ubrania, które nadają się do ponownego użycia </label><br />
                                        <label> <input type="radio" name="gender" value="ubrania, do wyrzucenia" onChange={handleTitleChange}/> ubrania, do wyrzucenia </label><br />
                                        <label> <input type="radio" name="gender" value="zabawki" onChange={handleTitleChange}/> zabawki </label><br />
                                        <label> <input type="radio" name="gender" value="książki" onChange={handleTitleChange}/> książki </label><br />
                                        <label> <input type="radio" name="gender" value="Inne" onChange={handleTitleChange}/> Inne </label><br />
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