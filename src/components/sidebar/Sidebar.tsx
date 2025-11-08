import Logo from "../Logo";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineMuseum } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { HiOutlineBookOpen } from "react-icons/hi";
import { SidebarItem } from "./SidebarItem";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="w-[318px] h-screen flex flex-col justify-between items-center bg-white shadow-lg px-6 py-6">
      <div className="w-full flex justify-start mb-8">
        <Logo />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <SidebarItem
          title="NAA Website"
          icon={<RiHome5Line />}
          defaultOpen={true}
          hasDropdown
          dropdownItems={["Post", "Media Library", "System Settings"]}
        />
        <SidebarItem
          title="News"
          icon={<HiOutlineBookOpen />}
          hasDropdown={true}
          dropdownItems={["Something 1", "Something 2", "Something 3"]}
        />
        <SidebarItem
          title="Weather"
          icon={<TiWeatherPartlySunny />}
          hasDropdown={true}
          dropdownItems={["Something 1", "Something 2", "Something 3"]}
        />
        <SidebarItem
          title="Museum"
          icon={<MdOutlineMuseum />}
          hasDropdown={true}
          dropdownItems={["Something 1", "Something 2", "Something 3"]}
        />
        <SidebarItem title="Settings" icon={<IoSettingsOutline />} />
      </div>

      <div className="w-[280px] mt-6">
        <div className="flex items-center gap-3 bg-[#243C7B] p-4 rounded-xl text-white">
          <img
            src="./user.png"
            alt="User Photo"
            className="w-[38px] h-[38px] rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-sm font-semibold">Khayal Ahmedli</h1>
            <p className="text-xs opacity-80">khahmadli</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
