import Link from 'next/link'
import HomeHeader from "./HomeHeader";
import Image from "next/image";


const AboutUs = () => {

    return (
        <>
            <div id="team" className="about">
                <div className="about-us">
                    <div className="about-us-header">
                        <h1>O nas</h1>
                        <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                    </div>
                    <div className="about-us-info">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</div>
                    <div className="about-us-signature"></div>
                </div>
                <div className="about-photo">
                </div>
            </div>
        </>
    )
}

export default AboutUs