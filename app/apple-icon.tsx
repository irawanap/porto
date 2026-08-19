import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontSize: 64,
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {siteConfig.shortName}
      </div>
    ),
    { ...size },
  );
}
