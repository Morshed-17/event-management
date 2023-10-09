import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import OutlineBtn from "../buttons/OutlineBtn";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//useEffect

const EventCard = ({ event }) => {
  const { id, name, location, description, date, about,thumbnail, organization_name,about_event, ticket_price } = event;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="rounded-lg overflow-hidden bg-white">
        <img
          src={thumbnail}
          alt=""
        />
        <div className="p-6 space-y-2">
          <h3 className="font-bold text-2xl">
            {name}
          </h3>
          <div className="flex items-center gap-3 text-sky-600">
            <FaCalendar />
            <p> {date}</p>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <FaLocationArrow />
            <p>{location}</p>
          </div>
          <p className="text-lg">
            {description}
          </p>
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold">
                {ticket_price}
              </p>
            </div>
            <Link to={`event/${id}`}>
            <OutlineBtn text={'Show Details'}/>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
