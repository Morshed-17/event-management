import { FaCalendarDay, FaLocationArrow } from "react-icons/fa";


const CategoryCard = ({org}) => {
    const {img, name, location} = org || {}
    return (
        <div className="mr-6">
            <div className="bg-white text-center p-6 rounded-lg h-[100px] w-[300px]">
                <img src={img} alt="" />
                <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center gap-3 text-sky-600">
            
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <FaLocationArrow />
            <p className="">{location}</p>
          </div>
            </div>
        </div>
    );
};

export default CategoryCard;