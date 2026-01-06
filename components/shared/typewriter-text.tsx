"use client";

import { useState, useEffect, useCallback } from "react";

type TypewriterTextProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const tick = useCallback(() => {
    const currentWord = words[currentWordIndex];
    if (isDeleting) {
      setCurrentText(currentWord.substring(0, currentText.length - 1));
    } else {
      setCurrentText(currentWord.substring(0, currentText.length + 1));
    }
  }, [currentWordIndex, currentText, isDeleting, words]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(words[0]);
      return;
    }

    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, tick, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion]);

  return (
    <span className="text-[#2563EB]">
      {currentText}
      <span className="inline-block w-[2px] h-[0.9em] bg-[#2563EB] ml-0.5 animate-pulse align-middle" />
    </span>
  );
}

