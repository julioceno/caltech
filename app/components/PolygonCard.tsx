import { ReactNode } from "react";

interface PolygonCardProps {
  children?: ReactNode;
  className?: string;
  notchSize?: number;
  cornerRadius?: number;
  notchBgColor?: string;
  cardBgColor?: string;
}

export default function PolygonCard({
  children,
  className = "",
  notchSize = 60,
  cornerRadius = 10,
  notchBgColor = "#ffffff",
  cardBgColor = "bg-primary",
}: PolygonCardProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`overflow-hidden ${cardBgColor}`}
        style={{
          borderRadius: cornerRadius,
          minHeight: notchSize + 32,
        }}
      >
        <div
          style={{
            paddingBottom: notchSize + 16,
          }}
        >
          {children}
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0"
        style={{
          width: notchSize,
          height: notchSize,
          backgroundColor: notchBgColor,
          borderTopLeftRadius: cornerRadius,
        }}
      />

      <div
        className="absolute right-0 pointer-events-none"
        style={{
          width: cornerRadius,
          height: cornerRadius,
          bottom: notchSize,
          background: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, ${notchBgColor} ${cornerRadius}px)`,
        }}
      />

      <div
        className="absolute bottom-0 pointer-events-none"
        style={{
          width: cornerRadius,
          height: cornerRadius,
          right: notchSize,
          background: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, ${notchBgColor} ${cornerRadius}px)`,
        }}
      />

      <div
        className="absolute bg-primary rounded-lg pointer-events-none"
        style={{
          width: notchSize - 8,
          height: notchSize - 8,
          right: 4,
          bottom: 4,
        }}
      />
    </div>
  );
}
