import React from 'react';
import {FaSearch} from "react-icons/fa";

interface CallbackP {
    callback: (value: string) => void;
}

const CardGroup_Search: React.FC<CallbackP> = ({ callback }) => {
    
    const handleChange = (value: string) => {
        if (value !== "" && value !== undefined) {
            callback(value);
        }else{callback("    ")}
    };

    return (
        <div className="flex items-center pl-4 my-4 text-pink-500">
            <FaSearch id="search-icon" className="col" />
            <input
                className="ml-6 pl-5 border-2 rounded-md"
                placeholder="Type to search a Card"
                onChange={(e) => {
                    console.log(e.target.value);
                    console.log(typeof(e.target.value));
                    handleChange(e.target.value);
                }}
            />
        </div>
    );
};

export default CardGroup_Search;
