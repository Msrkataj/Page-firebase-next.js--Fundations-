import Link from 'next/link'
import HomeHeader from "../Home/HomeHeader";
import Image from "next/image";


const HomeThreeColumns = () => {

    return (
        <>
            <div className="who-helps">
                <div className="who-helps-header">
                    <h1>Komu pomagamy?</h1>
                    <Image src="/assets/assets/Decoration.svg" height={60} width={200} alt=""/>
                </div>
                <div className="who-helps-buttons">
                    <div className="who-helps-column foundation">
                    <div className="who-helps-button">Fundacjom</div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    </div>
                    <div className="who-helps-column organization">
                    <div className="who-helps-button">Organizacjom pozarządowym</div>
                    <p>Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.</p>
                    </div>
                    <div className="who-helps-column collection">
                    <div className="who-helps-button">Lokalnym zbiórkom</div>
                    <p>Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeThreeColumns