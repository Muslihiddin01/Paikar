"use client";
import { HiOutlineTicket } from "react-icons/hi2";
import { CiClock2 } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import Dashboard from "./components/Dashboard";
import { LuUsers } from "react-icons/lu";

export default function Home() {
  const dashboardInfo = [
    {
      icon: HiOutlineTicket,
      iconColor: "#155dfc",
      bgIconAndShadowColor: "#dbeafe",
      percentage: "12",
      description: "Всего заявок",
      numerals: "4",
    },
    {
      icon: CiClock2,
      iconColor: "#eab308",
      bgIconAndShadowColor: "#fef9c3",
      percentage: "5",
      description: "В работе",
      numerals: "4",
    },
    {
      icon: FaRegCheckCircle,
      iconColor: "#22c55e",
      bgIconAndShadowColor: "#d1fae5",
      percentage: "8",
      description: "Завершено",
      numerals: "0",
    },
    {
      icon: CgDanger,
      iconColor: "#ef4444",
      bgIconAndShadowColor: "#fee2e2",
      percentage: "-2",
      description: "Просрочено",
      numerals: "0",
    },
  ];

  const dashboardExtraInfo = [
    {
      icon: IoTrendingUpSharp,
      iconColor: "#14b8a6",
      bgIconAndShadowColor: "#ccfbf1",
      percentage: "15",
      description: "Новые сегодня",
      numerals: "0",
    },
    {
      icon: CiClock2,
      iconColor: "#a855f7",
      bgIconAndShadowColor: "#ede9fe",
      percentage: "-3",
      description: "Среднее за сегодня",
      numerals: "2.5 ч",
    },
    {
      icon: FaRegCheckCircle,
      iconColor: "#ec4899",
      bgIconAndShadowColor: "#fce7f3",
      percentage: "7",
      description: "Удовлетворонность",
      numerals: "94%",
    },
    {
      icon: LuUsers,
      iconColor: "#14b8a6",
      bgIconAndShadowColor: "#ccfbf1",
      percentage: "8",
      description: "Пользователи",
      numerals: "127",
    },
  ];
  const today = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = today.toLocaleDateString("ru-RU", options);
  const dayOfWeek = today.toLocaleDateString("ru-RU", { weekday: "long" });

  return (
    <div className="flex flex-col min-h-screen  text-gray-800 ">
      <section className="mb-6 p-4 bg-white rounded-lg shadow-lg flex justify-between gap-5">
        <article className="flex items-center gap-5">
          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 text-yellow-300 font-semibold w-fit transform rotate-[5deg]">
            <FaBolt />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <h2 className="bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 bg-clip-text text-transparent font-extrabold text-[22px]">
              Добро пожаловать, Test Admin 2!
            </h2>
            <p className="my-1 text-lg">Система управления Paykar Service</p>
            <div className="flex items-center gap-1 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Система активна</span>
              <span className="font-bold mx-3 mb-1">|</span>
              <span>Последнее обновление: 23:05:25</span>
            </div>
          </div>
        </article>

        <article className="flex flex-col items-end space-y-1 border border-blue-100 bg-blue-50 p-5 rounded-xl">
          <p className="text-blue-600 font-semibold">Сегодня</p>
          <p className="font-extrabold text-xl">{formattedDate}</p>
          <p className="text-gray-400">{dayOfWeek}</p>
        </article>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {dashboardInfo &&
          dashboardInfo.map((e, i) => {
            return (
              <Dashboard
                key={i}
                icon={e.icon}
                iconColor={e.iconColor}
                bgIconAndShadowColor={e.bgIconAndShadowColor}
                percentage={e.percentage}
                description={e.description}
                numerals={e.numerals}
              />
            );
          })}
      </section>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Дополнительная статистика
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Детализированные метрики системы
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dashboardExtraInfo &&
            dashboardExtraInfo.map((e, i) => {
              return (
                <Dashboard
                  key={i}
                  icon={e.icon}
                  iconColor={e.iconColor}
                  bgIconAndShadowColor={e.bgIconAndShadowColor}
                  percentage={e.percentage}
                  description={e.description}
                  numerals={e.numerals}
                />
              );
            })}
        </section>
      </div>

      <div className="text-right text-xs text-gray-500 mt-8">
        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block mr-1"></span>{" "}
        Обновлено в реальном времени
      </div>
    </div>
  );
}
