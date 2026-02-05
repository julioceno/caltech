import { ReactNode } from "react";

interface NotchCardProps {
  children?: ReactNode;
  className?: string;
  notchSize?: number;
  cornerRadius?: number;
  notchBgColor?: string;
}

export default function NotchCard({
  children,
  className = "",
  notchSize = 50,
  cornerRadius = 10,
  notchBgColor = "#ffffff",
}: NotchCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: cornerRadius }}
      >
        {children}
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