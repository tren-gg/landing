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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#070708",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          t
        </div>
      </div>
    ),
    { ...size },
  );
}
