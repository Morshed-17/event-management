import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OutlineBtn from "../components/buttons/OutlineBtn";
import { FaArrowCircleRight, FaLocationArrow } from "react-icons/fa";

const EventDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [event, setEvent] = useState({});
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvent(data.find((event) => event.id == id)));
  }, [id]);
  const {
    thumbnail,
    name,
    organization_name,
    ticket_price,
    date,
    event_info,
    about_event,
    location,
    speakers
    
  } = event;
  

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4  mx-auto">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className="w-full" src={thumbnail} />
        <div>
          <h3 className="text-3xl mt-4 font-bold">Speakers</h3>
          <div>
            
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <img className="w-full" alt="img of a girl posing" src={thumbnail} />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-md leading-none text-gray-600">
            {organization_name}
          </p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            {name}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg leading-4 text-gray-800">Ticket Price</p>
          <div className="flex items-center justify-center">
            <div className="text-lg font-bold">{ticket_price}</div>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Date_</p>
          <div className="flex items-center justify-center">
            <p className="text-lg font-bold leading-none text-gray-600">
              {date}
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary text-white font-bold w-full">
            Book Ticket Now <FaArrowCircleRight />
          </button>
        </div>
        <div>
          <p className="xl:pr-48 text-lg lg:leading-tight leading-normal text-gray-600 mt-7">
            <b>Feature: </b>
            {event_info}
            <br />
            <br />
            <b>About Event: </b>
            {about_event}
          </p>
          <div className="text-lg leading-4 mt-7">
          <div className="flex items-center gap-3 text-gray-600">
            <FaLocationArrow />
            <b>location:</b>
            <p>{location}</p>
          </div>
          </div>
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-lg font-semibold leading-4 text-gray-800">
                Return policy
              </p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
                  
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own ticket costs for
              returning your ticket. ticket costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-lg
               font-semibold leading-4 text-gray-800">Contact us</p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us, Contact Us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
