import Link from 'next/link'
import HomeHeader from "../Components/Home/HomeHeader";
import Image from "next/image";
import React from "react";
import {useState, useEffect} from "react";
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../firebase";
import {Formik} from "formik";
import * as Yup from "yup";


const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [messageError2, setMessageError2] = useState("");
    const [error, setError] = useState(null);
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showErrorMessage2, setShowErrorMessage2] = useState(false);
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
    const [disabled, setDisabled] = useState(false);


    let disabledOn = true
    let disabledOff = false

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    }

    useEffect(() => {
        if (isCPasswordDirty) {
            if (registerPassword === cPassword) {
                setShowErrorMessage(false);
            } else {
                setShowErrorMessage(true)
            }
        }
    }, [cPassword])

    useEffect(() => {
            registerPassword.length >= 8 ? setShowErrorMessage2(false) : setShowErrorMessage2(true)
           cPassword !== "" ? showErrorMessage || cPassword === "" ? test2() : test() : test()
            registerPassword !== "" ? showErrorMessage2 ? Error2message() : Error2empty() : Error2empty()
        }
    , [registerPassword, showErrorMessage, showErrorMessage2])


    const handleChange = (event) => {
        if (!isValidEmail(event)) {
            setError('Email nieprawidłowy');
        } else {
            setError(null);
        }

        setMessage(event);
    };


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
        handleChange()
    };

    const test3 = () => {
        cPassword === "" ? test2() : null || registerPassword === "" ? Error2message() : null
    }


    const test = () => {
        setMessageError("")
   }

    const Error2empty = () => {
        setMessageError2("")
    }
    const Error2message = () => {
        setMessageError2("Hasło ma za mało znaków")
    }

        const test2 = () => {
        setMessageError(prev => "Hasła nie są takie same")
    }

    function testFunction(event) {
        setRegisterEmail(event.target.value),
            handleChange(event.target.value);
    }


    return (

        <>
            <HomeHeader close={true}/>
                <div className="register-menu">
                    <div className="register-header">
                        <h1>Załóż konto</h1>
                        <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                    </div>
                    <div className="register-content">
                        <div className="email">
                            {error && <h2 style={{color: 'red'}}>{error}</h2>}
                            <label className="form__label">Email</label>
                            <input type="text" id="message" name="message" placeholder="krzysztof@gmail.com"
                                   onChange={(event) => {
                                       testFunction(event)
                                   }}/>
                        </div>
                        <div className="password">
                            <form>
                                <div style={{color: 'red'}}> {messageError} </div>
                                <div style={{color: 'red'}}> {messageError2} </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Hasło</label>
                                    <input type="password" className="form-control" id="password" value={registerPassword}
                                           onChange={(event) => { setRegisterPassword(event.target.value)
                                           }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Powtórz hasło</label>
                                    <input type="password"  id="confirmPassword" value={cPassword}
                                           onChange={handleCPassword} />
                                </div>
                            </form>

                        </div>

                    </div>
                    <div className="register-buttons">
                        <Link disabled={disabledOn} href={showErrorMessage === false && error === null && registerEmail !== "" && showErrorMessage2 === false ? "/" : ""}>
                            <a className="btn" onClick={showErrorMessage === false  && error === null && showErrorMessage2 === false ? register : test3}>Załóź konto</a>
                        </Link>
                        <Link href="/Login">
                            <a type="submit" className="btn">Zaloguj się</a>
                        </Link>
                    </div>
                </div>
        </>
    )
}

export default Register