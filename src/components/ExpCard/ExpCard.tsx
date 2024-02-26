import Link from "next/link";

export const ExpCard = ({
  title,
  desc,
  period,
  bgImg,
  file,
}: {
  title: string;
  desc: string;
  period: string;
  bgImg: string;
  file: string;
}) => {

  return (
        <li className="w-[290px] h-[450px] bg-white shadow-sm rounded-md mx-3 mt-2">
          <figure
            className="w-full h-[210px] bg-contain bg-no-repeat relative"
            style={{ backgroundImage: bgImg }}
          >
            <Link
              href={file}
              target="_blank"
              className="absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-button text-white rounded-md text-sm w-30 h-10 p-2 flex items-center justify-center shadow-md"
            >
              View Certificate
            </Link>
          </figure>
          <dl className="p-2 flex flex-col gap-3">
            <dt className="text-[14px] font-semibold flex items-center justify-between">
              {title} <span className="text-[8px] font-regular">{period}</span>
            </dt>
            <dd>
              <p className="text-[10px] text-justify">{desc}</p>
            </dd>
          </dl>
        </li>
  );
};
