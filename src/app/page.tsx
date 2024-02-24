import Image from "next/image";
import Link from "next/link";

//component imports
import { Card } from "@/components/Card/Card";

import { useStore } from "@/lib/store";

export default async function Home() {
  const { repos } = useStore;

  const images: { [key: number]: string } = {
    0: "/image-2.png",
    1: "/image-3.png",
    2: "/image-4.png",
  };

  return (
    <section className="container w-full">
      <figure className="flex items-center justify-around py-3 px-6">
        <Image
          src="/profile_pic_mobile.svg"
          alt="profile_pic"
          width={150}
          height={150}
          className="profile_pic"
        />
        <figcaption>
          <hgroup className="text-[28px] font-bold">
            <h1 className="title">Hi, My name is</h1>
            <h3 className="text-name_heading title-name">Rhythm Sood</h3>
          </hgroup>
        </figcaption>
      </figure>
      <section className="flex flex-col p-4">
        <h1 className="font-bold text-xl">About Me</h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          placeat autem velit inventore libero eligendi labore quod fugiat
          exercitationem magnam voluptatem vel fugit quasi eum nihil dicta
          voluptatum repudiandae odit unde fuga! Illo est dolorem ipsam quod
          numquam quam voluptas?
        </p>
      </section>
      <section className="">
        <h1 className="text-5xl font-bold text-secondary p-4">Explore</h1>
        <h3 className="px-4 py-1 mt-2 flex items-center gap-3 text-2xl font-bold">Projects <span className="text-[12px]"><Link href="/experience" className="underline">view all {`>`}</Link></span></h3>
      </section>
      <ul className="flex overflow-x-scroll p-3 mb-3">
        {[repos[7], repos[1], repos[4]].map((repo, index: number) => {
          return (
            <li
              key={index + 10}
              className="min-w-[60%] rounded-md ring-1 ring-[#373535] m-1"
            >
              <Card
                url={repo.html_url}
                homepage={repo.homepage}
                image={images[index]}
              >
                {repo.name}
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
