import Link from 'next/link'
import HomeHeader from "../Home/HomeHeader";
import Image from 'next/image';

const FoursSteps = () => {

    return (
        <>
            <div className="section-steps">
                <div className="section-steps-header">
                    <h1>Wystarczą 4 proste kroki</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                </div>
                <div className="steps">
                        <div>
                            <Image src="/assets/assets/Icon-1.svg" height={50} width={50} alt=""/>
                            <p>Wybierz rzeczy do oddania</p>
                        </div>
                        <div>
                            <Image src="/assets/assets/Icon-2.svg" height={50} width={50} alt=""/>
                            <p>Spakuj je</p>
                        </div>
                        <div>
                            <Image src="/assets/assets/Icon-3.svg" height={50} width={50} alt=""/>
                            <p>Zdecyduj komu chcesz pomóc</p>
                        </div>
                        <div>
                            <Image src="/assets/assets/Icon-4.svg" height={50} width={50} alt=""/>
                            <p>Zamów kuriera w dogodnym terminie</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FoursSteps
