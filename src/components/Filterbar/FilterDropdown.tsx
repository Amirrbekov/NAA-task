import { FiChevronDown } from "react-icons/fi";

interface Props {
  label: string;
  options: readonly string[];
  active: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}

export default function FilterDropdown({
  label,
  options,
  active,
  onToggle,
  onSelect,
}: Props) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full sm:w-36 px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm text-gray-700 hover:bg-gray-50"
      >
        {label}
        <FiChevronDown
          className={`w-4 h-4 transition-transform ${
            active ? "rotate-180" : ""
          }`}
        />
      </button>
      {active && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg">
          {options.map((opt: string) => (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-xl last:rounded-b-xl"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
