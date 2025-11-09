import Logo from "../Logo";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineMuseum } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { HiOutlineBookOpen } from "react-icons/hi";
import { SidebarItem } from "./SidebarItem";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState<string | null>("NAA Website");

  const handleMenuClick = (menu: string) => setActiveMenu(menu);

  return (
    <aside className="w-[318px] h-screen flex flex-col justify-between bg-white shadow-md border-r border-gray-100 p-6">
      <div>
        <div className="mt-6 mb-6">
          <Logo />
        </div>

        <hr className="border-gray-200 mb-8" />

        <div className="flex flex-col gap-3">
          <SidebarItem
            title="NAA Website"
            icon={<RiHome5Line />}
            hasDropdown
            dropdownItems={["Post", "Media Library", "System Settings"]}
            isOpen={activeMenu === "NAA Website"}
            onOpen={() => handleMenuClick("NAA Website")}
          />
          <SidebarItem
            title="News"
            icon={<HiOutlineBookOpen />}
            hasDropdown
            dropdownItems={["Something 1", "Something 2", "Something 3"]}
            isOpen={activeMenu === "News"}
            onOpen={() => handleMenuClick("News")}
          />
          <SidebarItem
            title="Weather"
            icon={<TiWeatherPartlySunny />}
            hasDropdown
            dropdownItems={["Something 1", "Something 2", "Something 3"]}
            isOpen={activeMenu === "Weather"}
            onOpen={() => handleMenuClick("Weather")}
          />
          <SidebarItem
            title="Museum"
            icon={<MdOutlineMuseum />}
            hasDropdown
            dropdownItems={["Something 1", "Something 2", "Something 3"]}
            isOpen={activeMenu === "Museum"}
            onOpen={() => handleMenuClick("Museum")}
          />
        </div>
      </div>

      <div className="border border-gray-100 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)] bg-white p-5 mt-8">
        <SidebarItem title="Settings" icon={<IoSettingsOutline />} />
        <div className="flex items-center gap-3 mt-6">
          <img
            src="./user.png"
            alt="User Photo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-sm font-semibold text-gray-800">
              Khayal Ahmedli
            </h1>
            <p className="text-xs text-gray-500">khahmadli</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
