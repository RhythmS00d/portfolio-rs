'use client'
import { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import "animate.css"

export default function Success() {
  const [startAnimation, setStartAnimation] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <h1 className="px-4 text-2xl font-semibold mb-4">Your message is sent</h1>
      {!startAnimation && (
        <MdEmail
          className="size-40 animate__animated animate__backOutRight"
          onAnimationEnd={() => setStartAnimation(true)}
        />
      )}
      {startAnimation && (
        <FaThumbsUp className="size-40 animate__animated animate__backInRight" />
      )}
    </div>
  );
}
