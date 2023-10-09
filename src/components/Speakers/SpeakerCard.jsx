import { useEffect } from "react";
import OutlineBtn from "../buttons/OutlineBtn";
import AOS from "aos";
import "aos/dist/aos.css";
const SpeakerCard = ({ speaker }) => {
    const {image, name, company} = speaker
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="card  bg-white " data-aos="zoom-in-up">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt='person'
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{company}</p>
        
      </div>
    </div>
  );
};

export default SpeakerCard;
