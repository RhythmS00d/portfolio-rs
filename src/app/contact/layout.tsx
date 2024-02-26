import Link from "next/link";

import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="p-4 flex flex-col gap-3 h-full justify-between">
      <menu className="flex flex-col items-center w-full mb-3">
        <dt className="text-2xl font-semibold text-name_heading">
          Let's start a conversation
        </dt>
        <dd className="w-full flex flex-col items-center mt-2">
          <ul className="flex items-center justify-around w-full p-2">
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/rhythm-sood/"
              >
                <FaLinkedin
                  className="size-10 bg-primary rounded-md p-1"
                  color="white"
                />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://discord.gg/rjgT4A2j">
                <FaDiscord
                  className="size-10 bg-primary rounded-md p-1"
                  color="white"
                />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com/rhythm_sood/"
              >
                <FaInstagram
                  className="size-10 bg-primary rounded-md p-1"
                  color="white"
                />
              </Link>
            </li>
          </ul>
        </dd>
      </menu>
      {children}
      <section className="my-3">
        <h1 className="text-xl font-semibold">Want to know more about me!</h1>
        <ul className="my-2">
          <li className="flex gap-2 items-center text-md font-light">
            <h3>Give me a call: </h3>
            <Link href="tel:+61 450294324" className="font-semibold">
              +61 450294324
            </Link>
          </li>
          <li className="flex gap-2 items-center text-md font-light">
            <h3>Write me an email: </h3>
            <Link
              href="mailto: rhythmsood1@gmail.com"
              className="font-semibold"
            >
              rhythmsood1@gmail.com
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
}
