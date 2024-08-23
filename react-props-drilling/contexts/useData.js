import { useContext } from "react";
import { DataContext } from "./DataContext";

const useData = () => {
    // State passes through here to every other aspect of the app
    return useContext(DataContext)
};

export default useData;