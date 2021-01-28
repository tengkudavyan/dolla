import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroElements from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services/Index';
import Footer from '../components/Footer';

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        document.title = "dolla | Virtual Bankin Made Easy";
    })

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroElements />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services/>
            <InfoSection {...homeObjThree} />
            <Footer/>
        </div>
    )
}

export default Home
