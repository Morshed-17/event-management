import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";


const PrivateRoute = ({children}) => {
    console.log('component loading');
   
    const {user, loading} = useAuth()
    
    if(loading){
        return <div className="h-[60vh] flex justify-center items-center">
            <span className="loading loading-infinity w-12"></span>
        </div>
    }
    if(user){
       return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;