import { ReactNode } from "react";

interface PolygonCardProps {
  children?: ReactNode;
  className?: string;
  notchSize?: number;
  notchWidth?: number;
  notchHeight?: number;
  cornerRadius?: number;
  notchBgColor?: string;
  cardBgColor?: string;
  notchContent?: ReactNode;
}

export default function PolygonCard({
  children,
  className = "",
  notchSize = 60,
  notchWidth,
  notchHeight,
  cornerRadius = 16,
  notchBgColor = "#ffffff",
  cardBgColor = "bg-primary",
  notchContent,
}: PolygonCardProps) {
  const width = notchWidth ?? notchSize;
  const height = notchHeight ?? notchSize;

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`overflow-hidden ${cardBgColor}`}
        style={{
          borderRadius: cornerRadius,
          minHeight: height + 32,
        }}
      >
        <div
          style={{
            paddingBottom: height + 16,
          }}
        >
          {children}
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0"
        style={{
          width: width,
          height: height,
          backgroundColor: notchBgColor,
          borderTopLeftRadius: cornerRadius,
        }}
      />

      <div
        className="absolute right-0 pointer-events-none"
        style={{
          width: cornerRadius,
          height: cornerRadius,
          bottom: height,
          background: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, ${notchBgColor} ${cornerRadius}px)`,
        }}
      />

      <div
        className="absolute bottom-0 pointer-events-none"
        style={{
          width: cornerRadius,
          height: cornerRadius,
          right: width,
          background: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, ${notchBgColor} ${cornerRadius}px)`,
        }}
      />

      {notchContent && (
        <div
          className="absolute bottom-0 right-0 flex items-center justify-center"
          style={{
            width: width,
            height: height,
          }}
        >
          {notchContent}
        </div>
      )}
    </div>
  );
}
