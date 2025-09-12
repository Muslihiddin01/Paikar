"use client"
import {
  RiNotification3Line,
  RiArrowDownSLine,
} from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { FaArrowLeft, FaRegUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter() 
  return (
    <header className="flex items-center justify-between p-5 bg-white text-gray-800 shadow-lg w-[80vw]">
      <div className="flex items-center space-x-4">
        <button onClick={()=>router.push("/")} className="p-2 bg-blue-500 hover:bg-gray-100 hover:text-gray-500 transition-colors delay-75 text-white rounded-md">
          <FaArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xl font-semibold">Панель управления</span>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 text-gray-500">
          <RiNotification3Line className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
          <IoMoonOutline className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">
            <FaRegUser />
          </div>
          <span className="text-gray-600 font-semibold">Test Admin 2</span>
          <RiArrowDownSLine className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
