"use client";

import { useEffect, useRef } from "react";

type AsciiFlowBackgroundProps = {
  className?: string;
};

const GLYPHS = ["─", "╲", "│", "╱", "·", "+", "×"];
const DENSITY = 14;

function hash(x: number, y: number) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

function noise(x: number, y: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = smooth(xf);
  const v = smooth(yf);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);

  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}

export default function AsciiFlowBackground({
  className = "",
}: AsciiFlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let animationFrame = 0;
    let columns = 0;
    let rows = 0;
    const cellWidth = DENSITY;
    const cellHeight = Math.round(DENSITY * 1.6);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.ceil(window.innerWidth * dpr);
      canvas.height = Math.ceil(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.font = `${DENSITY}px "Geist Mono", SFMono-Regular, Menlo, Consolas, monospace`;
      context.textBaseline = "top";
      columns = Math.ceil(window.innerWidth / cellWidth);
      rows = Math.ceil(window.innerHeight / cellHeight);
    };

    const paint = (time: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const t = time * 0.00018;
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          const n = noise(x * 0.06, y * 0.06 + t * 6);
          const m = noise(x * 0.02 + 100, y * 0.02 + t * 2 - 50);
          const angle = n * Math.PI * 2;
          const index =
            Math.floor((angle / (Math.PI * 2)) * GLYPHS.length) %
            GLYPHS.length;

          if (m > 0.78) context.fillStyle = "rgba(255,255,255,0.80)";
          else if (m > 0.66) context.fillStyle = "rgba(232,232,232,0.55)";
          else if (m > 0.55) context.fillStyle = "rgba(232,232,232,0.18)";
          else if (m > 0.42) context.fillStyle = "rgba(120,120,120,0.35)";
          else context.fillStyle = "rgba(60,60,60,0.55)";

          context.fillText(GLYPHS[index], x * cellWidth, y * cellHeight);
        }
      }

      animationFrame = window.requestAnimationFrame(paint);
    };

    resize();
    paint(0);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0 h-full w-full", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
