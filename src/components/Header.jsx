import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    console.log(location.pathname);

    function pathmatch(route){
        if(route === location.pathname){
            return true;
        }
    }

    const navigate = useNavigate();



  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-10">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo here"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer p-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathmatch("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer p-3 text-sm font-semibold border-b-transparent text-gray-400 border-b-[3px] ${
                pathmatch("/Offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/Offers")}
            >
              Offers
            </li>

            <li
              className={`cursor-pointer p-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathmatch("/sign-In") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-In")}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  ); 
}
