import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tren - C++ Minecraft Utility";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070708",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 140,
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            tren.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#b8b8be",
              marginTop: 32,
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            A sleek C++ Minecraft utility with combat controls, visuals, Blink packet modes, and secure configs.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#5b5b64",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
            }}
          >
            tren.gg
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 16,
              color: "#5b5b64",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
            }}
          >
            <span>Combat</span>
            <span>Visuals</span>
            <span>Blink</span>
            <span>Configs</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
