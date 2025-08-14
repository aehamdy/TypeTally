import { useState } from "react";
import DropdownSelector from "./DropdownSelector";
import TextArea from "./TextArea";

const dropdownOptions = [
  {
    label: "250 Chars",
    value: "250",
  },
  {
    label: "400 Chars",
    value: "400",
  },
  {
    label: "Enter Custom Value",
    value: "custom",
  },
];

const MainContent = () => {
  const [selectedOption, setSelectedOption] = useState<string>("250");
  const [customOptionValue, setCustomOptionValue] = useState<string>("");
  const [textContent, setTextContent] = useState<string>("");

  return (
    <div className="flex flex-col pt-40 lg:pt-15 w-full h-full lg:w-1/2 mx-auto px-5 lg:px-2">
      <div className="space-y-6">
        {/* Dropdown Section */}
        <div className="w-full">
          <h3 className="block text-sm font-medium text-white mb-2">
            Select Typing Metric
          </h3>

          <div className="flex justify-between items-center gap-4">
            <div className="w-1/2 md:w-1/3">
              <DropdownSelector
                dropdownOptions={dropdownOptions}
                setSelectedOption={setSelectedOption}
                selectedOption={selectedOption}
              />
            </div>

            <div className="w-1/2 md:w-1/3">
              {selectedOption === "custom" && (
                <input
                  type="number"
                  name="custom-value"
                  value={customOptionValue}
                  onChange={(e) => setCustomOptionValue(e.target.value)}
                  onBlur={(e) => setSelectedOption(e.target.value)}
                  className="w-full py-3 px-2 bg-gray-200 border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              )}
            </div>
          </div>
        </div>

        {/* Text Area Section */}
        <div className="w-full">
          <TextArea
            setTextContent={setTextContent}
            textContent={textContent}
            selectedLimit={
              selectedOption !== "custom"
                ? parseInt(selectedOption || "0", 10)
                : parseInt(customOptionValue || "0", 10)
            }
          />
        </div>

        {/* Optional: Display current selections for debugging */}
        {(selectedOption || textContent) && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Current Status:
            </h3>
            {selectedOption && (
              <p className="text-sm text-gray-600">
                Selected: {selectedOption}
              </p>
            )}
            {textContent && (
              <p className="text-sm text-gray-600">
                Text length: {textContent.length} characters
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
