import HomeHeader from "../Components/Home/HomeHeader";
import HeaderFirst from "../Components/Home/Header-first";
import FoursSteps from "../Components/Home/FoursSteps";
import HomeThreeColumns from "../Components/Home/HomeThreeColumns";
import Question from "../Components/Home/Question";
import Footer from "../Components/Home/Footer";
import YellowBanner from "../Components/Home/YellowBanner";
import AboutUs from "../Components/Home/AboutUs";



export default function Home() {

    return (
        <>
            <HomeHeader/>
            <HeaderFirst/>
            <YellowBanner/>
            <FoursSteps/>
            <AboutUs/>
            <HomeThreeColumns/>
            <Question/>
            <Footer/>
        </>
    );
}