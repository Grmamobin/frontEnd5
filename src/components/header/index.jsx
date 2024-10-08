import { useState } from "react";
import Sidebar from "../sidebar";

import menu from "../../assets/images/ci_hamburger.svg"

export default function Header(){
    const [isOpen , setIsOpen] = useState(false);
    return(
        <>

        <div className="whole-page flex justify-between">
            <h2 className="text-[18px] font-bold self-center">Tutorify</h2>
            <nav className="gap-10 ml-auto  items-center lg:flex hidden">
                <ul className="flex items-center text-[#FF922F] flex-col self-end">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <div className="border  border-[#FF922F] w-[33px] bg-[#FF922F] h-1 mt-2 self-cent rounded-[5px]"></div>
                </ul>
                <ul className="hover:text-[#FF922F]">
                    <li>
                        <a href="#">Lessons</a>
                    </li>
                </ul>
                <ul className="hover:text-[#FF922F]">
                    <li>
                        <a href="#">Find Tutors</a>
                    </li>
                </ul>
                
                <ul className="hover:text-[#FF922F]">
                    <li>
                        <a href="#">About Us</a>
                    </li>
                </ul>
                <ul className="text-white bg-[#407F55] border rounded-lg py-2.5 
                px-4 ">
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
                <ul className="text-white bg-[#FB9C46] border rounded-lg py-2.5
                px-4">
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
                
            </nav>
            <button className="menu flex lg:hidden" onClick={()=>{setIsOpen(true)}} style={{display: isOpen? "none lg:block":"lg:none block"}}>
                <img src={menu} alt="menu"/>
            </button>
            {isOpen? <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar> : ""}
            
        </div>
        <hr className="mt-[25px] border-t w-full"/>
        </>
    );
}