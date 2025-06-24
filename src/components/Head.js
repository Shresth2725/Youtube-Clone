import React, { useEffect, useState } from "react";
import {
    youtubeLogo,
    hamburgerLogo,
    userLogo,
    bellLogo,
    plusLogo,
    YOUTUBE_SUGGESTION_API,
} from "../utils/Links";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { chacheResult } from "../utils/SearchSlice";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Head = () => {
    const [searchText, setSearchText] = useState("");
    const [suggestionList, setSuggestionList] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();

    const searchCache = useSelector((store) => store.search) ;

    useEffect(() => {
        const timer = setTimeout(() => {
            // console.log(searchText);
            
            if (searchCache[searchText]) {
                setSuggestionList(searchCache[searchText]);
            } else {
                fetchSuggestionAPI();
            }
        }, 300);
    
        return () => clearTimeout(timer);
    }, [searchText]);
    

    const fetchSuggestionAPI = async () => {
        try {
            const data = await fetch(YOUTUBE_SUGGESTION_API + searchText);
            const json = await data.json();
            setSuggestionList(json[1]);
            // console.log(suggestionList);
            dispatch(chacheResult({
                [searchText]: json[1],
            })) ;
        } catch (err) {
            console.error("Error fetching suggestions:", err);
        }
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="flex justify-between items-center px-4 py-2 shadow-md bg-white sticky top-0 z-50">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                
                <img
                    alt="menu"
                    src={hamburgerLogo}
                    onClick={toggleMenuHandler}
                    className="w-6 h-6 cursor-pointer"
                />
                <Link to={'/'}>
                    <img
                        alt="youtube-logo"
                        src={youtubeLogo}
                        className="h-6 cursor-pointer"
                    />
                </Link>
            </div>

            {/* Middle Section (Search Bar) */}
            <div className="relative flex items-center w-1/2 max-w-2xl mx-auto">
                <input
                    type="text"
                    className="w-full px-5 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm text-sm"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                <button className="px-4 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200 shadow-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
                        />
                    </svg>
                </button>

                {/* Suggestions Dropdown */}
                {showSuggestions && suggestionList.length > 0 && (
                    <ul className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-50 max-h-60 overflow-y-auto">
                        {suggestionList.map((item, index) => (
                            <Link to={"/search?y=" + item} key={index}>
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                onClick={() => setSearchText(item)}
                                onKeyDown={() => setSearchText(item)}
                            >
                                {item}
                            </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 px-2 py-2 rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer">
                    <img alt="plus-icon" src={plusLogo} className="w-6 h-6" />
                    <span className="text-sm font-medium hidden sm:inline">
                        Create
                    </span>
                </div>
                <img
                    alt="bell-icon"
                    src={bellLogo}
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer hover:scale-105 transition-transform"
                />
                <img
                    alt="user-logo"
                    src={userLogo}
                    className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-300"
                />
            </div>
        </div>
    );
};

export default Head;
