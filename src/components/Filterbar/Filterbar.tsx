import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import FilterDropdown from "./FilterDropdown";

type DropdownName = "filter" | "status";

export default function FilterBar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);

  const filterOptions = ["All Posts", "News", "Announcements"];
  const statusOptions = ["All Status", "Active", "Inactive"];

  const toggleDropdown = (name: DropdownName) =>
    setOpenDropdown(openDropdown === name ? null : name);

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm mb-6">
      <FilterDropdown
        label="All Posts"
        options={filterOptions}
        active={openDropdown === "filter"}
        onToggle={() => toggleDropdown("filter")}
      />
      <FilterDropdown
        label="All Status"
        options={statusOptions}
        active={openDropdown === "status"}
        onToggle={() => toggleDropdown("status")}
      />

      <div className="relative flex-1 max-w-[216px]">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value=""
          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#243C7B]"
        />
      </div>
    </div>
  );
}
