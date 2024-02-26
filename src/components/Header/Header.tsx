"use client";

import Link from "next/link";

import { useState } from "react";

const Menu = ({
  lines,
  showMenu,
  setShowMenu,
}: {
  lines: number;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}) => {
  return (
    <>
      <input
        type="checkbox"
        id="menu-checkbox"
        className="size-[52px] cursor-pointer"
        onChange={() => setShowMenu(!showMenu)}
      />
      <div className="size-[52px] bg-secondary cursor-pointer absolute right-6 pointer-events-none flex flex-col gap-1 items-center justify-center">
        {new Array(lines).fill(0).map((line, index) => (
          <span
            key={index}
            className="block bg-white w-[42px] h-1 rounded-md"
          ></span>
        ))}
      </div>
    </>
  );
};

const Overlay = ({ showMenu, setShowMenu }: { showMenu: boolean; setShowMenu: (value: boolean) => void; }) => {
  return (
    <section
      className={
        "absolute h-1/3 bg-secondary w-[60%] right-0 z-10 top-[104px] origin-top-right " +
        `${
          showMenu ? "scale-100 animate-openMenu" : "scale-0 animate-closeMenu"
        }`
      }
    >
      <nav id="nav-menu" className="absolute top-6 right-5">
        <ul className="flex flex-col gap-6 font-bold text-xl text-right">
          <li>
            <Link href="/" onClick={() => setShowMenu(!showMenu)}>
              Home -
            </Link>
          </li>
          <li>
            <Link href="/experience" onClick={() => setShowMenu(!showMenu)}>
              Experience -
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setShowMenu(!showMenu)}>
              Contact Me -
            </Link>
          </li>
          <li>
            <Link href="/about-me" onClick={() => setShowMenu(!showMenu)}>
              About Me -
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="container p-[1.5em] bg-primary max-h-28 flex items-center justify-between">
      <hgroup>
        <Link href="/">
          <h1 className="text-2xl text-primary font-bold">Rhythm Sood</h1>
          <h3 className="text-secondary">Graduate Software Engineer</h3>
        </Link>
      </hgroup>
      <Overlay showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Menu lines={3} showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};
