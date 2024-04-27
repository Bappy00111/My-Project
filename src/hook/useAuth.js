import { useContext, useDebugValue } from "react";
import { AuthContext } from "../components/context";

export const useAuth = () => {
    const {auth} = useContext(AuthContext);
    useDebugValue(auth,auth => auth?.user ? "User Logged in " : "User LogOut")
  return useContext(AuthContext);
};
