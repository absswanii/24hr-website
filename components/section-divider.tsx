import { cn } from "@/lib/utils"

type SectionDividerProps = {
  className?: string
  type?: "wave" | "curve" | "triangle" | "arrow" | "zigzag"
  flip?: boolean
  position?: "top" | "bottom"
  fillClassName?: string
}

export function SectionDivider({
  className,
  type = "wave",
  flip = false,
  position = "bottom",
  fillClassName = "fill-white",
}: SectionDividerProps) {
  const dividerContent = {
    wave: (
      <svg
        className={cn(fillClassName, "absolute w-full h-full", flip && "transform rotate-180")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    ),
    curve: (
      <svg
        className={cn(fillClassName, "absolute w-full h-full", flip && "transform rotate-180")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    ),
    triangle: (
      <svg
        className={cn(fillClassName, "absolute w-full h-full", flip && "transform rotate-180")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,256L1440,0L1440,320L0,320Z"></path>
      </svg>
    ),
    arrow: (
      <svg
        className={cn(fillClassName, "absolute w-full h-full", flip && "transform rotate-180")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,288L720,32L1440,288L1440,320L0,320Z"></path>
      </svg>
    ),
    zigzag: (
      <svg
        className={cn(fillClassName, "absolute w-full h-full", flip && "transform rotate-180")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,197.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    ),
  }

  const positionClass = position === "top" ? "top-0" : "bottom-0"

  return (
    <div className={cn("relative h-16 md:h-24 w-full overflow-hidden", positionClass, className)}>
      {dividerContent[type]}
    </div>
  )
}
