import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";


const PrivateRoute = ({children}) => {
   
    const {user} = useAuth()
    if(user){
       return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;