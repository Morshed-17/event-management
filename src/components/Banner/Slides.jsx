import { Navigate, useNavigate } from "react-router-dom";




const Slides = ({event}) => {
    const { id, name, location, description, date, about,thumbnail, organization_name,about_event } = event;
    const navigate = useNavigate()
    return (
        <div >
        {/* slides div */}
            <div
            
             className={` bg-cover bg-center cursor-pointer`}>
                
                  <div>
                    <div className="max-w-screen-xl items-center justify-between mx-auto pt-28 pb-20 md:pt-40 lg:pt-40 lg:pb-40  px-5 h-full flex flex-col md:flex-row gap-6">
                      <div className=" md:w-1/2 rounded-lg space-y-6">
                      
                      <h3 className="font-caveat text-xl lg:text-4xl font-bold text-cream">
                        {date}
                      </h3>
                      <h1 className="text-white font-bold text-3xl lg:text-7xl mt-6">
                        {name}
                      </h1>
                      <p className="">{about_event}</p>
                      </div>
                      <div className=" md:w-1/2 rounded-lg overflow-hidden ">
                        <img onClick={() => navigate(`event/${id}`)} className="h-full w-full " src={thumbnail} alt="" />
                      </div>
                    </div>
                  </div>
                
              </div>
        </div>
    );
};

export default Slides;