import { useState, useEffect, useContext, createContext } from "react";
import { getUser } from "../services/userService";

const UserContext = createContext();
UserContext.displayName = "userContext";

export function useInfo() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState();
    useEffect(() => {
        async function getData() {
            const user = await getUser();
            setUser(user.data);
        }
        getData();
    }, []);

    const value = {
        user,
        setUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
