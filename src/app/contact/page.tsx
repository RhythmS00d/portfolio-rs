import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  let submitText = "Send";

  async function handleFormSubmit() {
    "use server";

    redirect("/contact/success")
  }

  const inputStyle = "rounded-md px-2 py-3 shadow-sm shadow-[#373535]";

  return (
    <>
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <form action={handleFormSubmit} className="flex flex-col gap-3">
        <ul className="flex flex-col gap-4">
          <li className={inputStyle}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="w-full outline-none"
            />
          </li>
          <li className={inputStyle}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-full outline-none"
            />
          </li>
          <li className={inputStyle}>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              placeholder="Enter Message here"
              required
              minLength={20}
              className="w-full outline-none"
            ></textarea>
          </li>
        </ul>
        <button
          type="submit"
          className="w-24 h-10 bg-button text-white font-semibold text-lg flex items-center justify-center rounded-md"
        >
          {submitText}
        </button>
      </form>
    </>
  );
}
