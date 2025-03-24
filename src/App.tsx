import './App.css'
// import Navbar from "@/components/shared/navbar.tsx";
import Hero from "@/components/layouts/hero.tsx";
import About from "@/components/layouts/about.tsx";
import Benefits from "@/components/layouts/benefits.tsx";
import WhoShouldJoin from "@/components/layouts/who-should-join.tsx";
import HowItWorks from "@/components/layouts/how-it-works.tsx";
import VoucherCarousel from "@/components/layouts/voucher-carousel.tsx";
import {CustomerSupport, TravelLeisure} from "@/components/layouts/customer-support.tsx";
import SocialMediaCommunity from "@/components/layouts/social-media-community.tsx";
import MembershipPlans from "@/components/layouts/membership-pricing.tsx";
import Footer from "@/components/shared/footer.tsx";
import {Navbar} from "@/components/shared/navbar.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <WhoShouldJoin/>
            <HowItWorks/>
            <VoucherCarousel/>
            <Benefits/>
            <CustomerSupport/>
            <TravelLeisure/>
            <SocialMediaCommunity/>
            <MembershipPlans/>
            <Footer/>
        </>
    )
}

export default App
