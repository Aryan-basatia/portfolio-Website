import React, { useState, useEffect } from "react";

const TypingAnimation = ({ texts, speed = 100, displayDuration = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timer;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
      } else {
        // Text is fully typed, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, displayDuration);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
      } else {
        // Text is fully deleted, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    displayText,
    currentTextIndex,
    texts,
    speed,
    displayDuration,
  ]);

  return <span>{displayText}</span>;
};

export default TypingAnimation;
