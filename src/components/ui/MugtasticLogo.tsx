interface Props {
  className?: string;
  variant?: "color" | "white";
}

export default function MugtasticLogo({ className = "", variant = "color" }: Props) {
  const isWhite = variant === "white";
  return (
    <div className={`flex flex-col items-center leading-none select-none ${className}`}>
      <div className="flex items-center gap-0.5">
        {[
          { letter: "M", color: isWhite ? "#fff" : "#E91E8C" },
          { letter: "U", color: isWhite ? "#fff" : "#00B4B4" },
          { letter: "G", color: isWhite ? "#fff" : "#1B2A4A" },
          { letter: "T", color: isWhite ? "#fff" : "#FF6B35" },
          { letter: "A", color: isWhite ? "#fff" : "#F0A500" },
          { letter: "S", color: isWhite ? "#fff" : "#00B4B4" },
          { letter: "T", color: isWhite ? "#fff" : "#E91E8C" },
          { letter: "I", color: isWhite ? "#fff" : "#7B4FBE" },
          { letter: "C", color: isWhite ? "#fff" : "#F0A500" },
        ].map(({ letter, color }, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded border-2 flex items-center justify-center font-black text-sm"
            style={{
              borderColor: isWhite ? "rgba(255,255,255,0.4)" : "#D4AF37",
              color,
              backgroundColor: isWhite ? "rgba(255,255,255,0.1)" : "#fff",
            }}
          >
            {letter}
          </div>
        ))}
        {/* Mug handle */}
        <div
          className="w-5 h-8 border-4 rounded-r-full ml-0.5 relative"
          style={{
            borderColor: isWhite ? "rgba(255,255,255,0.8)" : "#1B2A4A",
            borderLeft: "none",
            backgroundColor: "transparent",
          }}
        />
      </div>
      <p
        className="text-xs mt-1 font-semibold italic tracking-wider"
        style={{ color: isWhite ? "rgba(255,255,255,0.8)" : "#E91E8C", fontFamily: "Georgia, serif" }}
      >
        Where <em>Personalities</em> Pour Out
      </p>
    </div>
  );
}
