"use client";

interface StarIconProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
  fillColor?: string;
  strokeColor?: string;
}

export function StarIcon({
  size = "md",
  className,
  animate = false,
  fillColor = "#9A1E61",
  strokeColor = "#E8D5C4",
}: StarIconProps) {
  const sizeMap = { sm: 16, md: 24, lg: 40, xl: 64 };
  const s = sizeMap[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animate ? "animate-spin-slow" : ""} ${className || ""}`.trim()}
    >
      <path
        d="M12 0C12 0 13.5 8.5 15 10C16.5 11.5 24 12 24 12C24 12 16.5 12.5 15 14C13.5 15.5 12 24 12 24C12 24 10.5 15.5 9 14C7.5 12.5 0 12 0 12C0 12 7.5 11.5 9 10C10.5 8.5 12 0 12 0Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function SparkleSymbol({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block text-primary animate-pulse-star ${className || ""}`.trim()}
      style={{ fontSize: "1.2em" }}
    >
      ✧
    </span>
  );
}
