import React, {useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true);
    const [user,setUser] = useState(null);
    const history=useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            if (user) history.push('/chats');
        })
    }, [user, history]);//useEffect se activa casa vez que añada un user y cuando se ulice history

    const value={user};

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )


}