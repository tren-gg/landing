import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          backgroundColor: "#070708",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 20,
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
