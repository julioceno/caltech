import { ReactNode } from "react";

interface NotchCardProps {
  children?: ReactNode;
  className?: string;
  notchSize?: number;
  cornerRadius?: number;
  notchBgClassName?: string;
  notchSquareClassName?: string;
  notchIcon?: ReactNode;
}

export default function NotchCard({
  children,
  className = "",
  notchSize = 50,
  cornerRadius = 10,
  notchBgClassName = "bg-white",
  notchSquareClassName = "bg-primary",
  notchIcon,
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
        className={`absolute bottom-0 right-0 ${notchBgClassName}`}
        style={{
          width: notchSize,
          height: notchSize,
          borderTopLeftRadius: cornerRadius,
        }}
      />

      <div
        className={`absolute right-0 pointer-events-none ${notchBgClassName}`}
        style={{
          width: cornerRadius,
          height: cornerRadius,
          bottom: notchSize,
          maskImage: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, black ${cornerRadius}px)`,
          WebkitMaskImage: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, black ${cornerRadius}px)`,
        }}
      />

      <div
        className={`absolute bottom-0 pointer-events-none ${notchBgClassName}`}
        style={{
          width: cornerRadius,
          height: cornerRadius,
          right: notchSize,
          maskImage: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, black ${cornerRadius}px)`,
          WebkitMaskImage: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, black ${cornerRadius}px)`,
        }}
      />

      <div
        className={`absolute ${notchSquareClassName} rounded-lg flex items-center justify-center`}
        style={{
          width: notchSize - 8,
          height: notchSize - 8,
          right: 4,
          bottom: 4,
        }}
      >
        {notchIcon}
      </div>
    </div>
  );
}