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
          textContent ? "-top-5" : "top-0"
        } end-0 w-22 h-7 bg-[#e5e7eb] rounded-t-lg transition-all duration-500`}
      >
        <div className="relative w-full h-full">
          <div className="absolute w-2 h-2 start-0 top-[50%] -translate-x-[49%] border-4 border-t-transparent border-s-transparent border-e-transparent border-b-[#e5e7eb] rounded-full z-50"></div>
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
