"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050608] text-white",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-60 blur-[10px] will-change-transform [--aurora:repeating-linear-gradient(100deg,#60a5fa_10%,#c4b5fd_15%,#93c5fd_20%,#ddd6fe_25%,#38bdf8_30%)] [--dark-gradient:repeating-linear-gradient(100deg,#050608_0%,#050608_7%,transparent_10%,transparent_12%,#050608_16%)] [--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.95)_7%,transparent_10%,transparent_12%,rgba(255,255,255,0.95)_16%)] [background-image:var(--dark-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute after:inset-0 after:[animation:aurora_60s_linear_infinite] after:[background-attachment:fixed] after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:content-[''] after:mix-blend-difference",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
          )}
        />
      </div>
      {children}
    </div>
  );
}
