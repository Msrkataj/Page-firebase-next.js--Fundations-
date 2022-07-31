import HomeHeader from "./Home/HomeHeader";
import HeaderFirst from "./Home/Header-first";
import FoursSteps from "./Home/FoursSteps";
import HomeThreeColumns from "./Home/HomeThreeColumns";
import Question from "./Home/Question";
import Footer from "./Home/Footer";



export default function Home() {

    return (
        <>
            <HomeHeader/>
            <HeaderFirst/>
            <FoursSteps/>
            <HomeThreeColumns/>
            <Question/>
            <Footer/>
        </>
    );
}