import EventCard from "./EventCard";


const Events = ({events}) => {
    
    return (
        <div className="max-w-screen-xl mx-auto px-5 my-16">
            <div className="text-center my-6">
                <h3 className=" text-2xl lg:text-4xl font-semibold text-red-400 font-caveat mb-4">Upcoming Event</h3>
                <h2 className=" text-3xl lg:text-5xl font-bold">Event Services</h2>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-8  ">
                {
                    events?.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }
            </div>
            
        </div>  
    );
};

export default Events;