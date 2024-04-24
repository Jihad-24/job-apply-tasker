import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const authUtils = useContext(AuthContext);
  if (!authUtils) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authUtils;
};

export default useAuth;
