import { createContext, useState, useEffect } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState(() => {
        const savedFilter = localStorage.getItem('searchFilter');
        return savedFilter ? JSON.parse(savedFilter) : { title: '', location: '' };
    });

   

    const [isSearched, setIsSearched] = useState(() => {
        const savedIsSearched = localStorage.getItem('isSearched');
        return savedIsSearched ? JSON.parse(savedIsSearched) : false;
    });

    useEffect(() => {
        localStorage.setItem('searchFilter', JSON.stringify(searchFilter));

        if (searchFilter.title === '' && searchFilter.location === '') {
            setIsSearched(false);
            localStorage.setItem('isSearched', JSON.stringify(false));
        } else {
            localStorage.setItem('isSearched', JSON.stringify(isSearched));
        }
    }, [searchFilter, isSearched]);

     const [jobs, setJobs] = useState([])
     const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)


     //function to fetch jobs

     const fetchJobs = async()=>{
           setJobs(jobsData)
     }
     useEffect(()=>{
        fetchJobs()

     },[])
    const value = {
        setSearchFilter, 
        searchFilter,
        isSearched, 
        setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
    };


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};