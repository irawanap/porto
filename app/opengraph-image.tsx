import { ImageResponse } from "next/og";

export const alt = "Irawan Aji Pangestu — Developer & Product Thinker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 600, color: "#6e6e73" }}>
          Irawan Aji Pangestu
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 900,
            color: "#1d1d1f",
          }}
        >
          Building ideas into experiences.
        </div>
        <div style={{ marginTop: 32, fontSize: 32, color: "#6e6e73" }}>
          Developer. Problem Solver. Product Thinker.
        </div>
      </div>
    ),
    { ...size },
  );
}
