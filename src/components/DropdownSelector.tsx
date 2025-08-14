import { useState } from "react";

type DropdownOption = {
  label: string;
  value: string;
};

interface DropdownSelectorProps {
  setSelectedOption: (option: string) => void;
  selectedOption: string;
  dropdownOptions: DropdownOption[];
}

const DropdownSelector = ({
  dropdownOptions,
  setSelectedOption,
  selectedOption,
}: DropdownSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    console.log(value);
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className={`relative`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption !== "custom"
            ? `${selectedOption} Characters`
            : `Custom Value`}
        </span>
        <svg
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {dropdownOptions.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option.value)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
