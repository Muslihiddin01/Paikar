import React from "react";
const SidebarItem = ({ name, icon: Icon, path, currentPath, router }) => {
  const isActive = currentPath === path;

  return (
    <li
      className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors delay-[30ms] mb-3 relative ${
        isActive
          ? "bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 text-white font-semibold"
          : "hover:bg-gray-100 font-semibold"
      }`}
      onClick={() => router.push(path)}
    >
      <div className="p-3 bg-white/20 rounded-xl ">
        <Icon className="w-5 h-5" />
      </div>
      <span className="ml-3">{name}</span>
      {isActive && (
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <div className="h-[7px] w-[7px] rounded-full bg-white/50"></div>
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
