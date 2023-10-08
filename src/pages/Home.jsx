import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Category from "../components/Category/Category";
import Speakers from "../components/Speakers/Speakers";
import Moments from "../components/moments/Moments";
import AboutSec from "../components/AboutSec/AboutSec";



const Home = () => {
    const events = useLoaderData()
    return (
        <div>
            <Banner events={events}/>
            <AboutSec/>
            <Events events={events}/>
            <Category/>
            <Moments/>
            <Speakers/>
        </div>
    );
};

export default Home;