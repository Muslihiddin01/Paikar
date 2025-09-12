"use client";
import {
  RiDashboardLine,
  RiFileListLine,
  RiUser3Line,
  RiTimeLine,
  RiToolsLine,
  RiBarChartLine,
  RiLightbulbFlashLine,
  RiSettings3Line,
} from "react-icons/ri";
import { FaBolt } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { HiOutlineTicket } from "react-icons/hi2";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="p-4 bg-white text-gray-800 shadow-lg flex flex-col justify-between min-h-screen w-[20vw]">
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
            <SidebarItem
              name="Панель управления"
              icon={RiDashboardLine}
              path="/"
              currentPath={pathname}
              router={router}
            />
            <SidebarItem
              name="Заявки"
              icon={HiOutlineTicket}
              path="/pages/applications"
              currentPath={pathname}
              router={router}
            />
            <SidebarItem
              name="Пользователи"
              icon={RiUser3Line}
              path="/pages/users"
              currentPath={pathname}
              router={router}
            />
            <SidebarItem
              name="Рабочее время"
              icon={RiTimeLine}
              currentPath={pathname}
              router={router}
            />
            <SidebarItem
              name="Оборудование"
              icon={RiToolsLine}
              path="/pages/equipment"
              currentPath={pathname}
              router={router}
            />
            <SidebarItem
              name="Отчеты"
              icon={RiBarChartLine}
              path="/pages/reports"
              currentPath={pathname}
              router={router}
            />
            <SidebarItem
              name="Автоматизация"
              icon={RiLightbulbFlashLine}
              path="/pages/automation"
              currentPath={pathname}
              router={router}
            />
            <SidebarItem
              name="Настройки"
              icon={RiSettings3Line}
              path="/pages/settings"
              currentPath={pathname}
              router={router}
            />
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between p-2 rounded-lg bg-gray-100">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-600 text-white">
              N
            </span>
            <span className="text-sm">2025 Paykar Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
