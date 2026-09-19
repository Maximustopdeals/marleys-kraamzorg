"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-berry-dark/12">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 group transition-colors duration-150 hover:bg-primary/[0.02]"
        aria-expanded={isOpen}
      >
        <span className="font-cinzel text-base md:text-lg uppercase tracking-wide text-berry-dark text-left pr-4">
          {item.question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 text-berry-dark transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-5">
          <p className="text-berry-dark/80 text-sm md:text-base leading-relaxed font-body">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={activeIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}
