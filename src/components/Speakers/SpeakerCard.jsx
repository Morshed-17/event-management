import OutlineBtn from "../buttons/OutlineBtn";

const SpeakerCard = ({ speaker }) => {
    const {image, name, company} = speaker
  return (
    <div className="card  bg-white">
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
