"use client";
import {
  RiDashboardLine,
  RiUser3Line,
  RiTimeLine,
  RiToolsLine,
  RiBarChartLine,
  RiLightbulbFlashLine,
  RiSettings3Line,
} from "react-icons/ri";
import { FaBolt } from "react-icons/fa6";
import { HiOutlineTicket } from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { IoMoonOutline } from "react-icons/io5";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "Панель управления", icon: RiDashboardLine, path: "/" },
    { name: "Заявки", icon: HiOutlineTicket, path: "/pages/applications" },
    { name: "Пользователи", icon: RiUser3Line, path: "/pages/users" },
    { name: "Рабочее время", icon: RiTimeLine, path: "/pages/time" },
    { name: "Оборудование", icon: RiToolsLine, path: "/pages/equipment" },
    { name: "Отчеты", icon: RiBarChartLine, path: "/pages/reports" },
    {
      name: "Автоматизация",
      icon: RiLightbulbFlashLine,
      path: "/pages/automation",
    },
    { name: "Настройки", icon: RiSettings3Line, path: "/pages/settings" },
  ];

  return (
    <div className="p-4 bg-white text-gray-800 shadow-lg flex flex-col justify-between min-h-screen ">
      <div>
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-10 h-10 flex items-center justify-center text-yellow-500 text-xl ">
            <FaBolt />
          </div>
          <div>
            <div className="font-semibold text-lg">Paykar Service</div>
            <div className="text-sm text-gray-500">Система управления</div>
          </div>
        </div>

        <nav>
          <ul>
            {menuItems.map((item) => (
              <SidebarItem
                key={item.path}
                name={item.name}
                icon={item.icon}
                path={item.path}
                currentPath={pathname}
                router={router}
              />
            ))}
          </ul>
        </nav>
      </div>

      <article className="mt-8">
        <div className="py-4 flex items-center gap-3 justify-between border-t border-gray-300">
          <div className="flex items-center gap-2">
            <div className="h-[7px] w-[7px] rounded-full bg-blue-500"></div>
            <h4 className="font-semibold">Тема оформления</h4>
          </div>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors delay-75 text-gray-500">
            <IoMoonOutline className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center justify-center py-4 border-t border-gray-300">
          <div className="flex flex-col items-center space-x-2">
            <span className="text-black/70">©2025 Paykar Service</span>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Sidebar;
