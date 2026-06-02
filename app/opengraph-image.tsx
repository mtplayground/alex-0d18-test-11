import { ImageResponse } from "next/og";

import { seoDefaults } from "@/lib/seo";

export const dynamic = "force-static";
export const alt = `${seoDefaults.siteName}: ${seoDefaults.tagline}`;
export const size = {
  width: seoDefaults.ogImage.width,
  height: seoDefaults.ogImage.height,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "linear-gradient(135deg, #14204a 0%, #1e40af 58%, #14b8a6 100%)",
        color: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, Helvetica, sans-serif",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(249, 250, 251, 0.26)",
          borderRadius: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "34px",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#99f6e4",
            fontSize: "30px",
            fontWeight: 700,
            letterSpacing: "0",
          }}
        >
          Agent Team for Founders
        </div>
        <div
          style={{
            fontSize: "112px",
            fontWeight: 800,
            letterSpacing: "0",
            lineHeight: 0.9,
          }}
        >
          {seoDefaults.siteName}
        </div>
        <div
          style={{
            color: "#dbeafe",
            fontSize: "44px",
            fontWeight: 500,
            letterSpacing: "0",
            lineHeight: 1.2,
            maxWidth: "820px",
          }}
        >
          {seoDefaults.tagline}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
