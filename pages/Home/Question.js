import Link from 'next/link'
import HomeHeader from "../Home/HomeHeader";
import React from "react";


const Question = () => {

    return (
        <>
           <div className="question">
               <h1>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</h1>
               <Link href="../Login/Login.js">
                   <a className="login">ZAŁÓŻ KONTO</a>
               </Link>
           </div>
        </>
    )
}

export default Question