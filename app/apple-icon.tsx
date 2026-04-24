import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#121624",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 32 32" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="11" fill="none" stroke="#6366F1" strokeWidth="1.25" strokeOpacity="0.5" />
          <circle cx="16" cy="16" r="6" fill="none" stroke="#6366F1" strokeWidth="1.5" />
          <line x1="5" y1="16" x2="27" y2="16" stroke="#6366F1" strokeWidth="1.25" strokeOpacity="0.6" />
          <circle cx="16" cy="16" r="2" fill="#4338CA" />
          <circle cx="27" cy="16" r="1.75" fill="#A3E635" />
        </svg>
      </div>
    ),
    size,
  );
}
