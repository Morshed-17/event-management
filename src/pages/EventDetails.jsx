import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const {id} = useParams()
    const [event , setEvent] = useState({})
    useEffect(() => {
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvent(data.find(event => event.id == id)))
        
    }, [])
    const {name} = event
   
    return (
        <div className="max-w-screen-xl mx-auto my-16">
            <h2 className="text-xl">{name}</h2>
        </div>
    );
};

export default EventDetails;