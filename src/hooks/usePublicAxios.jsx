import axios from "axios";
export const instance = axios.create({
  baseURL: "https://job-apply-tasker-server.vercel.app",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
