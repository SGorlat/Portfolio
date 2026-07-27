import { useEffect, useRef } from "react";
import "../style/BackgroundGlyphs.css";

const GLYPHS = [
  "{ }",
  "< / >",
  "=>",
  "const",
  "class",
  "this.",
  "[ ]",
  ";",
  "#",
  "$_",
  "if()",
  "npm",
];
const COLORS = ["#7fffd4", "#32aedf"];
const DENSITY = 70; // nº de partículas — sube/baja para más o menos efecto

function BackgroundGlyphs() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let particles = [];
    let rafId = null;
    let lastT = null;

    function resize() {
      const w = window.innerWidth,
        h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeParticles() {
      const w = window.innerWidth,
        h = window.innerHeight;
      particles = Array.from({ length: DENSITY }, () => {
        const r = Math.random();
        const depth = r < 0.5 ? 0 : r < 0.85 ? 1 : 2;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: [11, 15, 20][depth] + Math.random() * 4,
          speed: [5, 10, 17][depth] + Math.random() * 4,
          drift: (Math.random() - 0.5) * 8,
          opacity: [0.05, 0.09, 0.14][depth] + Math.random() * 0.03,
        };
      });
    }

    function draw(dt) {
      const w = window.innerWidth,
        h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.textBaseline = "middle";
      for (const p of particles) {
        if (dt) {
          p.y -= p.speed * dt;
          p.x += p.drift * dt;
          if (p.y < -20) {
            p.y = h + 20;
            p.x = Math.random() * w;
          }
          if (p.x < -40) p.x = w + 40;
          if (p.x > w + 40) p.x = -40;
        }
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillText(p.glyph, p.x, p.y);
      }
      ctx.globalAlpha = 1;
    }

    function tick(t) {
      if (lastT === null) lastT = t;
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      draw(dt);
      rafId = requestAnimationFrame(tick);
    }

    resize();
    makeParticles();

    if (reduceMotion) {
      draw(0);
    } else {
      rafId = requestAnimationFrame(tick);
    }

    function onResize() {
      resize();
      makeParticles();
      if (reduceMotion) draw(0);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-glyphs" aria-hidden="true" />;
}

export default BackgroundGlyphs;
