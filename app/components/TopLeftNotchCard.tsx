import { ReactNode } from "react";

interface TopLeftNotchCardProps {
  children?: ReactNode;
  label?: ReactNode;
  className?: string;
  notchSize?: number;
  cornerRadius?: number;
  notchBgColor?: string;
  cardBgColor?: string;
}

export default function TopLeftNotchCard({
  children,
  label,
  className = "",
  notchSize = 60,
  cornerRadius = 10,
  notchBgColor = "#ffffff",
  cardBgColor = "#d1d5db",
}: TopLeftNotchCardProps) {
  const topNotchWidth = notchSize * 2;
  const topNotchHeight = notchSize;
  return (
    <div className={`relative ${className}`}>
      {label && (
        <div
          className="absolute z-10"
          style={{
            top: topNotchHeight / 2,
            left: topNotchWidth / 2,
            transform: "translate(-50%, -50%)",
          }}
        >
          {label}
        </div>
      )}

      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: cornerRadius,
          backgroundColor: cardBgColor,
        }}
      >
        <div
          className="relative h-full"
          style={{
            padding: `${topNotchHeight + 16}px 24px ${notchSize + 16}px 24px`,
          }}
        >
          {children}
        </div>
      </div>

      {/* ── Recorte superior esquerdo (notch) ── */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: topNotchWidth,
          height: topNotchHeight,
          backgroundColor: notchBgColor,
          borderBottomRightRadius: cornerRadius,
        }}
      />

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
