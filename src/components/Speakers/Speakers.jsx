import { useEffect, useState } from "react";
import SpeakerCard from "./SpeakerCard";
import OutlineBtn from "../buttons/OutlineBtn";


const Speakers = () => {
    const [speakers, setSpeakers] = useState([])
    useEffect(()=> {
        fetch('/speakers.json')
        .then(res => res.json())
        .then(data => setSpeakers(data))
    }, [])
    
    return (
        <div className="my-16 max-w-screen-xl mx-auto px-5">
            <div className="text-center my-6">
                <h3 className=" text-2xl lg:text-4xl font-semibold text-red-400 font-caveat mb-4">Speakers</h3>
                <h2 className=" text-3xl lg:text-5xl font-extrabold">Popular Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-12">
                    {
                        speakers.map(speaker => <SpeakerCard key={speaker.id} speaker={speaker}></SpeakerCard>)
                    }
                </div>
            </div>
            <div className="text-center"><OutlineBtn text={'Show More Speakers'}/></div>
        </div>
    );
};

export default Speakers;

