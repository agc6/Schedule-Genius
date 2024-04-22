/*
import React, {useState, useEffect} from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; //Default toggle style sheet

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);    //DarkMode is false as default

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);
    const toggleDarkMode = () =>{
        setDarkMode(!darkMode); //!darkmode = true; Toggles darkMode state
    };

    return (
        <div>
            <Toggle 
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <label>Dark Mode</label>
        </div>
    )
};

export default DarkMode;
*/