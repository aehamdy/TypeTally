import React, { useRef } from "react";

interface TextAreaProps {
  setTextContent: (text: string) => void;
  textContent: string;
  selectedLimit: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  setTextContent,
  textContent,
  selectedLimit,
}) => {
  const highlightRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  const handleClear = () => {
    setTextContent("");
  };

  const handleScroll = () => {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  const highlightText = (text: string) => {
    const safeText = text.replace(/\n$/g, "\n ");
    const withinLimit = safeText.slice(0, selectedLimit);
    const excess = safeText.slice(selectedLimit);

    const greenSpan = withinLimit
      ? `<span style="color:green">${withinLimit}</span>`
      : "";
    const redSpan = excess ? `<span style="color:red">${excess}</span>` : "";

    return greenSpan + redSpan;
  };

  return (
    <div className="relative w-full">
      <div
        className={`absolute ${
          textContent ? "-top-6" : "top-0"
        } end-0 w-22 h-8 bg-[#e5e7eb] rounded-t-lg transition-all duration-500`}
      >
        <div className="relative w-full h-full flex items-center justify-center gap-3">
          <button type="button" className="group p-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:text-blue-500 transition-colors duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="group p-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:text-red-500 transition-colors duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916C15.75 2.253 14.247.75 12 .75S8.25 2.253 8.25 4.5v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <div className="absolute w-2 h-2 start-0 top-[53%] -translate-x-[45%] border-4 border-t-transparent border-s-transparent border-e-transparent border-b-[#e5e7eb] rounded-full z-50"></div>
        </div>
      </div>

      {/* Highlight Layer */}
      <div
        ref={highlightRef}
        className="absolute w-full top-0 left-0 inset-0 px-4 py-3 overflow-auto whitespace-pre-wrap break-words rounded-lg text-left shadow-none"
        style={{
          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          backgroundColor: "#e5e7eb",
          pointerEvents: "none",
          border: "1px solid transparent",
        }}
        dangerouslySetInnerHTML={{ __html: highlightText(textContent) }}
      />

      {/* Textarea */}
      <textarea
        name="text-content"
        ref={textareaRef}
        value={textContent}
        onChange={handleChange}
        onScroll={handleScroll}
        placeholder="Enter your text..."
        rows={8}
        className="relative w-full px-4 py-3 text-transparent bg-transparent rounded-lg resize-none focus:outline-none placeholder:text-black caret-black"
        style={{
          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
        }}
      />
    </div>
  );
};

export default TextArea;
