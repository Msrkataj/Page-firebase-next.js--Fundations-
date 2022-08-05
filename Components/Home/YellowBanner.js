import Link from 'next/link'
import HomeHeader from "./HomeHeader";


const YellowBanner = () => {

    return (
        <>
            <section className="banner">
                <div className="banner-columns">
                    <div className="banner-column">
                        <h1>10</h1>
                        <h2>ODDANYCH WORKÓW</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="banner-column">
                        <h1>5</h1>
                        <h2>WSPARTYCH ORGANIZACJI</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="banner-column">
                        <h1>7</h1>
                        <h2>ZORGANIZOWANY ZBIÓREK</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default YellowBanner