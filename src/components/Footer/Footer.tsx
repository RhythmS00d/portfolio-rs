import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full h-20 bg-primary flex items-center justify-center flex-col">
      <span className="text-white font-sans font-bold">&copy; Copyright</span>
      <span className="text-white font-light text-sm">
        Made by Rhythm Sood
      </span>
      <nav className="hidden lg:block">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
        </ul>
        <ol>
          <li>
            <Link href="https://github.com/RhythmS00d">
              {/* TODO: add icon */}
              Github
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/rhythm-sood/">
              {/* TODO: add icon */}
              LinkedIn
            </Link>
          </li>
        </ol>
      </nav>
    </footer>
  );
};
