import {
  FaArrowRight,
  FaBolt,
  FaMagnifyingGlass,
  FaPlus,
} from "react-icons/fa6";
import { HiOutlineTicket } from "react-icons/hi2";
import { Gi3dStairs, GiSiren } from "react-icons/gi";
import { TbBolt } from "react-icons/tb";
import { CgDanger } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import ApplicationCard from "@/app/components/ApplicationCard";
import { FaFire } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import {
  MdEditCalendar,
  MdOutlineSignalWifiStatusbarNull,
} from "react-icons/md";
import ApplicationCardSecond from "@/app/components/ApplicationCardSecond";
import { RiDashboardLine } from "react-icons/ri";
import { LuClipboardList, LuTable } from "react-icons/lu";
import ApplicationCardThird from "@/app/components/ApplicationCardThird";
export default function Applications() {
  const applicationCardInfo = [
    {
      mainColor: "#ef4444",
      icon: <FaFire />,
      number: 1,
      title: "Критическое",
      bgAndShadowColor: "#fef2f2",
      rangeColor: "#fee2e2",
    },
    {
      mainColor: "#f97316",
      icon: <CgDanger />,
      number: 1,
      title: "Высокие",
      bgAndShadowColor: "#fff7ed",
      rangeColor: "#ffedd5",
    },
    {
      mainColor: "#eab308",
      icon: <CiClock2 />,
      number: 1,
      title: "Средные",
      bgAndShadowColor: "#fefce8",
      rangeColor: "#fef9c3",
    },
    {
      mainColor: "#22c55e",
      icon: <HiOutlineTicket />,
      number: 1,
      title: "Низкие",
      bgAndShadowColor: "#f0fdf4",
      rangeColor: "#d1fae5",
    },
  ];

  const applicationCardSecondInfo = [
    {
      icon: <MdEditCalendar />,
      mainColor: "#3b82f6",
      number: 3,
      title: "Новые",
      rangeColor: "#dbeafe",
      rangeWidth: "w-[80%] px-3",
    },
    {
      icon: <CgDanger />,
      mainColor: "#a855f7",
      number: 0,
      title: "Просроченно",
      rangeColor: "#ede9fe",
      rangeWidth: "",
    },
    {
      icon: <FaRegCheckCircle />,
      mainColor: "#22c55e",
      number: 0,
      title: "Завершено",
      rangeColor: "#d1fae5",
      rangeWidth: "",
    },
  ];

  const applicationCardThirdInfo = [
    {
      icon: <GiSiren />,
      mainColor: "#dc2626",
      title: "Критические",
      description: "Требует немедленного исправления",
      number: 1,
      cardItems: {
        id: "#REQ-2025-7542fac0-0002",
        status: "КРИТ",
        title: "Second Ticket",
        description: "Second test",
        bgColor: "#fee2e2",
        priority: "Критический",
        category: "ИТ",
        location: "Office",
      },
    },
    {
      icon: <TbBolt />,
      mainColor: "#ea580c",
      title: "Высокие",
      description: "Важные задачи на сегодня",
      number: 1,
      cardItems: {
        id: "#REQ-2025-7542fac0-0004",
        title: "Ремонт кондиционера в офисе",
        description:
          "Кондиционер в главном офисе перестал работать. Требуется диагностика и...",
        bgColor: "#ffedd5",
        priority: "Высокий",
        category: "АХО",
        location: "Главный офис, комната 305",
      },
    },
    {
      icon: <MdEditCalendar />,
      mainColor: "#6b8e23",
      title: "Средные",
      description: "Стандартные рабочие задачи",
      number: 1,
      cardItems: {
        id: "#REQ-2025-7542fac0-0003",
        title: "Новая заявка",
        description: "Тест",
        bgColor: "#f0f5e6",
        priority: "Средный",
        category: "Электрика",
        location: "ул. Айни 16б, 6 этаж",
      },
    },
    {
      icon: <LuClipboardList />,
      mainColor: "#16a34a",
      title: "Низкие",
      description: "Можно выполнить позже",
      number: 1,
      cardItems: {
        id: "#REQ-2025-7542fac0-0001",
        title: "Test Ticket Fixed",
        description: "Test description",
        bgColor: "#d1fae5",
        priority: "Низкий",
        category: "АХО",
        location: "Test location",
      },
    },
  ];

  return (
    <main className="px-7">
      <section className="flex items-center gap-5 justify-between">
        <div className="flex gap-7">
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 text-white text-3xl font-semibold w-fit self-start">
            <HiOutlineTicket />
          </div>
          <article className="space-y-2">
            <h2 className="text-4xl font-extrabold">Заявки</h2>
            <p>Система управления заявками на техническое обслуживание</p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-500">Система активна</span>
              <div className="w-2 h-2 rounded-full bg-green-500 ml-5"></div>
              <span className="text-gray-500">
                Обновляется в реальном времени
              </span>
            </div>
          </article>
        </div>
        <article className="flex items-center gap-3">
          <button className="flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 text-white">
            <TbBolt /> <span>Быстро</span>
          </button>
          <button className="flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-green-500 via-teal-500 to-teal-400 text-white">
            <FaPlus /> <span>Создать заявку</span>{" "}
            <span className="text-sm bg-white/30 p-1 rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </article>
      </section>

      <section className="grid md:grid-cols-7 gap-5 my-10">
        <article className=" p-7 bg-sky-100/50 shadow-lg md:col-span-3 rounded-xl">
          <div className="flex justify-between">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 text-white text-3xl font-semibold w-fit self-start">
              <Gi3dStairs />
            </div>
            <div className="flex flex-col items-end ">
              <h2 className="bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 bg-clip-text text-transparent font-extrabold text-4xl">
                4
              </h2>
              <span className="text-blue-400/70">Активных заявок</span>
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="text-lg font-semibold">Всего заявок в системе</h3>
            <span className="text-gray-400">Общее количество заявок</span>
            <div className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-blue-500 via-blue-500 to-purple-400 mt-3"></div>
          </div>
        </article>

        {applicationCardInfo.map((item, index) => (
          <ApplicationCard
            key={index}
            mainColor={item.mainColor}
            icon={item.icon}
            number={item.number}
            title={item.title}
            bgAndShadowColor={item.bgAndShadowColor}
            rangeColor={item.rangeColor}
          />
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-5 my-10">
        {applicationCardSecondInfo.map((item, index) => (
          <ApplicationCardSecond
            key={index}
            icon={item.icon}
            mainColor={item.mainColor}
            number={item.number}
            title={item.title}
            rangeColor={item.rangeColor}
            rangeWidth={item.rangeWidth}
          />
        ))}
      </section>

      <section className="my-10 p-7 shadow-lg rounded-xl flex items-center justify-between">
        <article className="rounded-xl border p-3 text-gray-400 flex items-center gap-3">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Поиск заявок"
            className="placeholder:text-gray-400 min-w-[350px] max-w-[400px] outline-none"
          />
        </article>
        <article className="flex items-center gap-3 p-0.5 rounded-xl bg-gray-200/85">
          <button className="text-blue-500 py-2 px-5 flex items-center gap-2 shadow-lg rounded-xl bg-white">
            {" "}
            <RiDashboardLine /> <span className="font-semibold">
              Kanban
            </span>{" "}
          </button>
          <button className="bg-gray-200/85 py-2 px-5 flex items-center gap-2 rounded-xl">
            {" "}
            <LuTable /> <span className="font-semibold">Таблица</span>{" "}
          </button>
        </article>
        <button className="flex items-center gap-2 py-2 px-5 rounded-xl border border-gray-400">
          <MdOutlineSignalWifiStatusbarNull />
          <span>Фильтры</span>
        </button>
      </section>

      <section className="my-10 border-y border-gray-100 rounded-full gap-3 grid md:grid-cols-4">
        {applicationCardThirdInfo.map((item, index) => (
          <ApplicationCardThird key={index} {...item} />
        ))}
      </section>
    </main>
  );
}
