import { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // State exists here
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await getData(url);
        setData(response);
    }

    return (
        <DataContext.Provider value = {{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};
