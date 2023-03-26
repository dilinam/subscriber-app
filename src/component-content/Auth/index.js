import { Navigate } from "react-router-dom";

const Auth = (props) => {

    if(sessionStorage.getItem("TOKEN")){
        return props.children;
    }

    return <Navigate to="/login" />;

}

export default Auth;