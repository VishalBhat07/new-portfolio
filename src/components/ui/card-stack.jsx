import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function wrapIndex(n, len) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i, active, len, loop) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack({
  items,
  initialIndex = 0,
  maxVisible = 7,
  cardWidth = 520,
  cardHeight = 340,
  overlap = 0.48,
  spreadDeg = 48,
  perspectivePx = 1100,
  depthPx = 140,
  tiltXDeg = 12,
  activeLiftPx = 22,
  activeScale = 1.04,
  inactiveScale = 0.93,
  springStiffness = 280,
  springDamping = 28,
  loop = true,
  autoAdvance = false,
  intervalMs = 2800,
  pauseOnHover = true,
  showDots = true,
  className,
  onChangeIndex,
  renderCard,
}) {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len));
  const [hovering, setHovering] = React.useState(false);

  React.useEffect(() => { setActive((a) => wrapIndex(a, len)); }, [len]);
  React.useEffect(() => { if (!len) return; onChangeIndex?.(active, items[active]); }, [active]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len || !canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len || !canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || !len) return;
    if (pauseOnHover && hovering) return;
    const id = window.setInterval(
      () => { if (loop || active < len - 1) next(); },
      Math.max(700, intervalMs),
    );
    return () => window.clearInterval(id);
  }, [autoAdvance, intervalMs, hovering, pauseOnHover, reduceMotion, len, loop, active, next]);

  if (!len) return null;
  const activeItem = items[active];

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage */}
      <div
        className="relative w-full"
        style={{ height: Math.max(420, cardHeight + 80) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Ambient glow washes */}
        <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-48 w-[70%] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 w-[76%] rounded-full bg-black/20 blur-3xl" aria-hidden="true" />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{ perspective: `${perspectivePx}px` }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              if (abs > maxOffset) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 10;
              const z = -abs * depthPx;
              const isActive = off === 0;
              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;
              const rotateX = isActive ? 0 : tiltXDeg;
              const zIndex = 100 - abs;

              const dragProps = isActive ? {
                drag: "x",
                dragConstraints: { left: 0, right: 0 },
                dragElastic: 0.18,
                onDragEnd: (_e, info) => {
                  if (reduceMotion) return;
                  const travel = info.offset.x;
                  const v = info.velocity.x;
                  const threshold = Math.min(160, cardWidth * 0.22);
                  if (travel > threshold || v > 650) prev();
                  else if (travel < -threshold || v < -650) next();
                },
              } : {};

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute bottom-0 rounded-2xl overflow-hidden shadow-2xl will-change-transform select-none",
                    isActive
                      ? "border-2 border-tokyo-purple/50 cursor-grab active:cursor-grabbing"
                      : "border border-white/[0.06] cursor-pointer",
                  )}
                  style={{ width: cardWidth, height: cardHeight, zIndex, transformStyle: "preserve-3d" }}
                  initial={reduceMotion ? false : { opacity: 0, y: y + 40, x, rotateZ, rotateX, scale }}
                  animate={{ opacity: 1, x, y: y + lift, rotateZ, rotateX, scale }}
                  transition={{ type: "spring", stiffness: springStiffness, damping: springDamping }}
                  onClick={() => setActive(i)}
                  {...dragProps}
                >
                  <div
                    className="h-full w-full"
                    style={{ transform: `translateZ(${z}px)`, transformStyle: "preserve-3d" }}
                  >
                    {renderCard
                      ? renderCard(item, { active: isActive })
                      : <DefaultFanCard item={item} active={isActive} />}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      {showDots && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {items.map((it, idx) => (
              <button
                key={it.id}
                onClick={() => setActive(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === active
                    ? "w-5 bg-tokyo-purple"
                    : "w-2 bg-white/20 hover:bg-white/40",
                )}
                aria-label={`Go to ${it.title}`}
              />
            ))}
          </div>
          {activeItem.href && (
            <a
              href={activeItem.href}
              target="_blank"
              rel="noreferrer"
              className="text-tokyo-text-dim hover:text-white transition"
              aria-label="Open link"
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Default card renderer ────────────────────────────────────────────────────
function DefaultFanCard({ item, active }) {
  return (
    <div className="relative h-full w-full bg-tokyo-card">
      {/* Image — always shown */}
      <div className="absolute inset-0">
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className={cn(
              "h-full w-full object-cover transition-all duration-500",
              active ? "scale-100 grayscale-0 brightness-100" : "scale-105 grayscale brightness-[0.35]",
            )}
            draggable={false}
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-tokyo-card">
            <span className="text-4xl font-bold text-tokyo-text-dim">
              {item.title?.[0]?.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Dark vignette overlay on inactive */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          active ? "opacity-0" : "opacity-100 bg-black/50",
        )}
      />

      {/* Bottom gradient — active only */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content — active only */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        {/* Tag badge */}
        {item.tag && (
          <span
            className={cn(
              "mb-2 w-fit terminal-text text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-all duration-300",
              active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              item.tag === "Live Website"
                ? "bg-tokyo-cyan/25 text-tokyo-cyan"
                : item.tag === "In Progress"
                  ? "bg-tokyo-yellow/25 text-tokyo-yellow"
                  : "bg-white/10 text-white/60",
            )}
            style={{ transitionDelay: active ? "50ms" : "0ms" }}
          >
            {item.tag}
          </span>
        )}

        {/* Title */}
        <div
          className={cn(
            "truncate text-xl font-bold text-white uppercase tracking-tighter transition-all duration-300",
            active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{ transitionDelay: active ? "110ms" : "0ms" }}
        >
          {item.title}
        </div>

        {/* Description */}
        {item.description && (
          <div
            className={cn(
              "mt-1 line-clamp-2 text-sm text-white/70 transition-all duration-300",
              active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            )}
            style={{ transitionDelay: active ? "170ms" : "0ms" }}
          >
            {item.description}
          </div>
        )}

        {/* Buttons */}
        <div
          className={cn(
            "mt-3 flex gap-2 flex-wrap transition-all duration-300",
            active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{ transitionDelay: active ? "220ms" : "0ms" }}
        >
          {item.githubHref && (
            <a
              href={item.githubHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="terminal-text text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded bg-white/10 border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              Source
            </a>
          )}
          {item.href && item.href !== item.githubHref && (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="terminal-text text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded bg-tokyo-cyan text-tokyo-bg hover:bg-tokyo-purple transition-colors"
            >
              Launch ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
