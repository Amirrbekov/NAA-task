import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

type Props = {
  title: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: string[];
  defaultOpen?: boolean;
};

export const SidebarItem = ({
  title,
  icon,
  hasDropdown = false,
  dropdownItems = [],
  defaultOpen = false,
}: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [activeOption, setActiveOption] = useState("");

  const handleClick = () => {
    if (hasDropdown) {
      setOpen(!open);
    }
  };

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className="w-[280px] flex flex-col rounded-xl transition-all">
      <button
        onClick={handleClick}
        className={`h-[60px] flex items-center justify-between px-5 rounded-xl transition-colors duration-200
          ${open ? "bg-[#243C7B]" : "hover:bg-gray-100"}`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`text-xl ${
              open ? "text-white" : "text-gray-700"
            } flex items-center`}
          >
            {icon}
          </span>
          <span
            className={`font-medium tracking-tight ${
              open ? "text-white" : "text-gray-800"
            }`}
          >
            {title}
          </span>
        </div>
        {hasDropdown && (
          <GoChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180 text-white" : "text-gray-500"
            }`}
          />
        )}
      </button>

      {hasDropdown && open && (
        <div className="flex flex-col gap-2 pl-10 py-2">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(item)}
              className={`text-sm text-left px-3 py-2 rounded transition-colors duration-150 ${
                activeOption === item
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
