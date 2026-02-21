/**
 * Заголовок с глитч-эффектом при появлении в зоне видимости.
 * Один раз при первом входе в viewport запускает GlitchedWriter (расшифровка/скрембл).
 * Доступность: текст передаётся в родительский заголовок через aria-label или видимый fallback.
 */

import { useEffect, useRef, useState } from "react";

export interface GlitchHeadingProps {
  /** Текст, который будет показан с эффектом glitch при появлении. */
  text: string;
  /** Дополнительные классы для контейнера. */
  className?: string;
  /** Пресет GlitchedWriter: 'encrypted' | 'default' | 'zalgo' | 'neo' | 'bitbybit' | 'cosmic' | 'typewriter' | 'terminal' | 'nier'. */
  preset?:
    | "encrypted"
    | "default"
    | "zalgo"
    | "neo"
    | "bitbybit"
    | "cosmic"
    | "typewriter"
    | "terminal"
    | "nier";
}

export default function GlitchHeading({
  text,
  className = "",
  preset = "encrypted",
}: GlitchHeadingProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || started) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        setStarted(true);
        observer.disconnect();

        import("glitched-writer")
          .then(({ default: GlitchedWriter }) => {
            const writer = new GlitchedWriter(el, preset, () => {});
            writer.write(text).catch((err) => {
              console.error("[GlitchHeading]", err);
              el.textContent = text;
            });
          })
          .catch((err) => {
            console.error("[GlitchHeading] load", err);
            el.textContent = text;
          });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, preset, started]);

  return (
    <span ref={containerRef} className={className} aria-hidden={false}>
      {text}
    </span>
  );
}
