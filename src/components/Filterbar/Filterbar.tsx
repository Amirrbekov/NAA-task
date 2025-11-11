import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import FilterDropdown from "./FilterDropdown";

type FilterType = "All Posts" | "News" | "Announcements";
type StatusType = "All Status" | "Active" | "Inactive";
type DropdownName = "filter" | "status";

interface FilterState {
  type: FilterType;
  status: StatusType;
  search: string;
}

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filter, setFilter] = useState<FilterType>("All Posts");
  const [status, setStatus] = useState<StatusType>("All Status");
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterOptions = ["All Posts", "News", "Announcements"];
  const statusOptions = ["All Status", "Active", "Inactive"];

  const toggleDropdown = (name: DropdownName) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const selectOption = (name: DropdownName, value: FilterType | StatusType) => {
    if (name === "filter") {
      const newFilter = value as FilterType;
      setFilter(newFilter);
      onFilterChange({ type: newFilter, status, search: searchQuery });
    }
    if (name === "status") {
      const newStatus = value as StatusType;
      setStatus(newStatus);
      onFilterChange({ type: filter, status: newStatus, search: searchQuery });
    }
    setOpenDropdown(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilterChange({ type: filter, status, search: e.target.value });
  };

  return (
    <div className="flex flex-wrap sm:flex-row flex-wrap items-stretch sm:items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm mb-6">
      <FilterDropdown
        label={filter}
        options={filterOptions}
        active={openDropdown === "filter"}
        onToggle={() => toggleDropdown("filter")}
        onSelect={(v: string) => selectOption("filter", v as FilterType)}
      />
      <FilterDropdown
        label={status}
        options={statusOptions}
        active={openDropdown === "status"}
        onToggle={() => toggleDropdown("status")}
        onSelect={(v: string) => selectOption("status", v as StatusType)}
      />

      <div className="relative flex-1 min-w-[200px] sm:max-w-[216px]">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#243C7B]"
        />
      </div>
    </div>
  );
}
