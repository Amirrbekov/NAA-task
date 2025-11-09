import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";

type Props = {
  title: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: string[];
  isOpen?: boolean;
  onOpen?: () => void;
};

export const SidebarItem = ({
  title,
  icon,
  hasDropdown = false,
  dropdownItems = [],
  isOpen = false,
  onOpen = () => {},
}: Props) => {
  const [activeOption, setActiveOption] = useState<string>("");

  useEffect(() => {
    if (isOpen && hasDropdown && dropdownItems.length > 0) {
      setActiveOption(dropdownItems[0]);
    }
  }, [dropdownItems, hasDropdown, isOpen]);

  return (
    <div className="w-full flex flex-col rounded-xl transition-all">
      <button
        onClick={onOpen}
        className={`flex justify-between items-center w-full px-5 py-3 rounded-xl transition-colors ${
          isOpen ? "bg-[#243C7B] text-white" : "hover:bg-gray-50 text-gray-800"
        }`}
      >
        <div className="flex items-center gap-3 text-[15px] font-medium">
          <span
            className={`${isOpen ? "text-white" : "text-gray-600"} text-xl`}
          >
            {icon}
          </span>
          <span>{title}</span>
        </div>

        {hasDropdown && (
          <GoChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180 text-white" : "text-gray-500"
            }`}
          />
        )}
      </button>

      {isOpen && hasDropdown && (
        <div className="mt-2 flex flex-col gap-3 px-5 py-3 border border-gray-100 rounded-xl bg-white shadow-sm">
          {dropdownItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveOption(item)}
              className={`text-sm text-left font-medium transition-colors ${
                activeOption === item
                  ? "text-[#243C7B]"
                  : "text-gray-600 hover:text-[#243C7B]"
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
