import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import OutlineBtn from "../buttons/OutlineBtn";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { id, name, location, description, date, about,thumbnail, organization_name,about_event } = event;
  return (
    <div>
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
          <div className="flex justify-between items-center pt-6">
            <div>
              <p className="">
                Organized By <br />
                <span className="font-bold">{organization_name}</span>
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
