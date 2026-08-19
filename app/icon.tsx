import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          borderRadius: 12,
        }}
      >
        {siteConfig.shortName}
      </div>
    ),
    { ...size },
  );
}
