import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Category from "../components/Category/Category";



const Home = () => {
    const events = useLoaderData()
    return (
        <div>
            <Banner events={events}/>
            <Events events={events}/>
            <Category/>
        </div>
    );
};

export default Home;