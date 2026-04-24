import { ImageResponse } from "next/og";

export const alt = "OneOps — Summoning software into existence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #121624 0%, #1C2232 50%, #121624 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Ambient indigo glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-150px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(67,56,202,0.5) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Lime accent glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-150px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(163,230,53,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
          }}
        >
          <svg viewBox="0 0 32 32" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="11" fill="none" stroke="#6366F1" strokeWidth="1.25" strokeOpacity="0.5" />
            <circle cx="16" cy="16" r="6" fill="none" stroke="#6366F1" strokeWidth="1.5" />
            <line x1="5" y1="16" x2="27" y2="16" stroke="#6366F1" strokeWidth="1.25" strokeOpacity="0.6" />
            <circle cx="16" cy="16" r="2" fill="#4338CA" />
            <circle cx="27" cy="16" r="1.75" fill="#A3E635" />
          </svg>
          <div
            style={{
              color: "#F3F6FB",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            OneOps
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Headline */}
        <div
          style={{
            color: "#F3F6FB",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex" }}>We are no longer</div>
          <div style={{ display: "flex" }}>writing code.</div>
          <div style={{ display: "flex", color: "#A3E635" }}>We are summoning it.</div>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#C4CAE3",
            fontSize: 28,
            marginTop: 32,
            display: "flex",
            zIndex: 1,
          }}
        >
          The operating substrate for founder-led scale-ups.
        </div>
      </div>
    ),
    size,
  );
}
