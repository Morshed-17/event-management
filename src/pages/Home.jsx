import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Category from "../components/Category/Category";
import Speakers from "../components/Speakers/Speakers";
import Moments from "../components/moments/Moments";
import Newsletter from "../components/Newsletter/Newsletter";




const Home = () => {
    const events = useLoaderData()
    return (
        <div>
            <Banner events={events}/>
            <Events events={events}/>
            <Category/>
            <Moments/>
            <Speakers/>
            <Newsletter/>
        </div>
    );
};

export default Home;