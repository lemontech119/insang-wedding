"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";

const RUN_DISTANCE = 70;
const PADDING = 50;
const lastRun = { current: 0 };
const THROTTLE_MS = 80;

export default function AgreementGame() {
  const [agreed, setAgreed] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 220, y: 80 });
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(noPosition);
  positionRef.current = noPosition;

  const runAwayFrom = useCallback((clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    const { x: btnX, y: btnY } = positionRef.current;
    const dist = Math.hypot(mouseX - btnX, mouseY - btnY);
    if (dist > RUN_DISTANCE) return;
    const now = Date.now();
    if (now - lastRun.current < THROTTLE_MS) return;
    lastRun.current = now;
    const angle = Math.atan2(btnY - mouseY, btnX - mouseX);
    const runDist = 120 + Math.random() * 60;
    let newX = btnX + Math.cos(angle) * runDist;
    let newY = btnY + Math.sin(angle) * runDist;
    const maxX = rect.width - PADDING;
    const maxY = rect.height - PADDING;
    newX = Math.max(PADDING, Math.min(maxX, newX));
    newY = Math.max(PADDING, Math.min(maxY, newY));
    setNoPosition({ x: newX, y: newY });
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      runAwayFrom(e.clientX, e.clientY);
    },
    [runAwayFrom]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        runAwayFrom(t.clientX, t.clientY);
      }
    },
    [runAwayFrom]
  );

  const runAway = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const newX = PADDING + Math.random() * Math.max(0, rect.width - PADDING * 2);
    const newY = PADDING + Math.random() * Math.max(0, rect.height - PADDING * 2);
    setNoPosition({ x: newX, y: newY });
  }, []);

  const handleYes = () => {
    setAgreed(true);
  };

  if (agreed) {
    return (
      <div className="text-center py-12">
        <p className="font-[var(--font-serif)] text-xl text-stone-700 mb-6">
          동의해 주셔서 감사합니다! 🙌
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-stone-100 mb-8 max-w-[800px] mx-auto">
        <p className="text-center text-stone-700 font-[var(--font-serif)] text-lg mb-8">
          오늘 동원이에게 도시락통을 돌려준다.
        </p>

        <div
          ref={containerRef}
          className="relative min-h-[560px] h-80 rounded-xl bg-stone-50/80 border border-stone-100"
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          <button
            type="button"
            onClick={handleYes}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-full bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-colors shadow-sm"
          >
            예
          </button>
          <button
            type="button"
            onMouseEnter={runAway}
            onFocus={runAway}
            onTouchStart={runAway}
            className="absolute px-6 py-3 rounded-full border-2 border-red-200 bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-all duration-150 ease-out shadow-sm select-none"
            style={{
              left: noPosition.x,
              top: noPosition.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            아니오
          </button>
        </div>
      </div>
    </>
  );
}
