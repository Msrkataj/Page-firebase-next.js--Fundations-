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
    const [message, setMessage] = useState('');
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
        }
    , [registerPassword])


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

    function testFunction(event) {
        setRegisterEmail(event.target.value),
            handleChange(event.target.value);
    }

    // function testFunction2(event) {
    //     setRegisterPassword(event.target.value)
    // }


    return (

        <>
            <HomeHeader/>
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
                                {showErrorMessage && isCPasswordDirty ? <div style={{color: 'red'}}> Hasła nie są takie same </div> : ''}
                                {showErrorMessage2 ? <div style={{color: 'red'}}> Hasło ma za mało znaków </div> : ''}
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
                        <Link href={"/Login"}>
                            <a className="btn"  onClick={register}>Załóź konto</a>
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