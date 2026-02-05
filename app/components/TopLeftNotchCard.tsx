import { ReactNode } from "react";

interface TopLeftNotchCardProps {
  children?: ReactNode;
  label?: ReactNode;
  className?: string;
  topNotchWidth?: number;
  topNotchHeight?: number;
  bottomNotchSize?: number;
  cornerRadius?: number;
  notchBgColor?: string;
  cardBgColor?: string;
}

export default function TopLeftNotchCard({
  children,
  label,
  className = "",
  topNotchWidth = 130,
  topNotchHeight = 80,
  bottomNotchSize = 70,
  cornerRadius = 10,
  notchBgColor = "#ffffff",
  cardBgColor = "#d1d5db",
}: TopLeftNotchCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* ── Label no recorte superior esquerdo ── */}
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

      {/* ── Corpo do card ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: cornerRadius,
          backgroundColor: cardBgColor,
        }}
      >
        {/* Conteúdo */}
        <div
          className="relative h-full"
          style={{
            padding: `${topNotchHeight + 16}px 24px ${bottomNotchSize + 16}px 24px`,
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

      {/* ── Curvas côncavas do recorte superior esquerdo ── */}
   
     

      {/* ── Recorte inferior direito (notch) ── */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: bottomNotchSize,
          height: bottomNotchSize,
          backgroundColor: notchBgColor,
          borderTopLeftRadius: cornerRadius,
        }}
      />

      {/* ── Curvas côncavas do recorte inferior direito ── */}
      <div
        className="absolute right-0 pointer-events-none"
        style={{
          width: cornerRadius,
          height: cornerRadius,
          bottom: bottomNotchSize,
          background: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, ${notchBgColor} ${cornerRadius}px)`,
        }}
      />
      <div
        className="absolute bottom-0 pointer-events-none"
        style={{
          width: cornerRadius,
          height: cornerRadius,
          right: bottomNotchSize,
          background: `radial-gradient(circle at 0 0, transparent ${cornerRadius}px, ${notchBgColor} ${cornerRadius}px)`,
        }}
      />

      {/* ── Quadrado decorativo no recorte inferior direito ── */}
      <div
        className="absolute bg-primary rounded-lg pointer-events-none"
        style={{
          width: bottomNotchSize - 8,
          height: bottomNotchSize - 8,
          right: 4,
          bottom: 4,
        }}
      />
    </div>
  );
}
