import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Card = ({
  url,
  homepage,
  image,
  children,
}: {
  url: string;
  homepage: string;
  image: string;
  children: React.ReactNode;
}) => {
  return (
    <figure className="rounded-md">
      <Link href={url} target="_blank">
        <Image
          alt="repo image"
          src={image}
          width={200}
          height={200}
          className="w-full rounded-md"
        />
      </Link>
      <figcaption className="p-1">
        <dt>
          <Link
            target="_blank"
            href={homepage}
            className="text-lg font-semibold"
          >
            {children}
          </Link>
        </dt>
        <dt className="flex gap-2 items-center">
          <Link target="_blank" href={url ?? ""}>
            <Image src="/github-logo.svg" alt="github" width={75} height={27} />
          </Link>
          <Link href={homepage ?? ""} target="_blank">
            <Image src="/web-logo.svg" alt="web" width={35} height={30} />
          </Link>
        </dt>
        <dd className="line-clamp-4 text-nowrap mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          nihil expedita porro quaerat eligendi eum fugiat illum. Iusto repellat
          qui accusantium deserunt consequuntur impedit ad nisi perspiciatis
          natus. Sapiente nobis repellendus assumenda aliquid quidem error fugit
          enim pariatur dolorem vel.
        </dd>
      </figcaption>
    </figure>
  );
};
