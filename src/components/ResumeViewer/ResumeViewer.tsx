import Link from "next/link";

export const ResumeViewer = () => {
  const buttonStyle =
    "w-20 h-10 bg-button text-white font-semibold text-[12px] flex items-center justify-center rounded-md px-2 text-center";

  return (
    <figure
      className="w-full h-[200px] bg-no-repeat flex items-end"
      style={{
        backgroundImage: 'url("/resume.svg")',
        backgroundSize: "100% 100%",
      }}
    >
      <figcaption className="w-full">
        <ul className="flex items-center justify-around w-full mb-2">
          <li>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyle}
            >
              View
            </Link>
          </li>
          <li>
            <Link
              href="/resume.pdf"
              target="_blank"
              download
              className={buttonStyle}
            >
              Download PDF
            </Link>
          </li>
          <li>
            <Link
              href="/resume-tex.zip"
              download
              target="_blank"
              className={buttonStyle}
            >
              Download TEX
            </Link>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
};
