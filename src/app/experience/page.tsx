import { ResumeViewer } from "@/components/ResumeViewer";
import { ExpCard } from "@/components/ExpCard";

import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaRust } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export default function experience() {
  const languageLogos = [
    <IoLogoJavascript
      className="size-[30px]"
      color="white"
      title="Javascript"
    />,
    <FaJava className="size-[30px]" color="white" title="Java" />,
    <FaDocker className="size-[30px]" color="white" title="Docker" />,
    <FaReact className="size-[30px]" color="white" title="React" />,
    <FaRust className="size-[30px]" color="white" title="Rust" />,
    <FaSwift className="size-[30px]" color="white" title="Swift" />,
    <FaAws className="size-[30px]" color="white" title="AWS" />,
  ];

  const ibm_desc = `I engineered a responsive frontend interface for a
                    healthcare blockchain application, resulting in a 15%
                    improvement in user engagement metrics. By using React.js
                    and the IBM Carbon framework, I implemented features that
                    improved application responsiveness by 20%. I collaborated
                    with backend and blockchain teams to integrate data at 30
                    integration points within the specified timeline.
                    Additionally, I strengthened authentication and
                    authorization mechanisms, leading to a 25% reduction in
                    security vulnerabilities and enhanced healthcare data
                    protection.`;
  const kreativstorm_desc = `During my frontend training at Kreativstorm, I honed my skills in building modern web interfaces. I worked on various projects that focused on enhancing user experience and interface design. By leveraging cutting-edge technologies like React.js and CSS frameworks, I developed responsive and visually appealing UI components. I actively collaborated with peers and mentors to implement best practices in frontend development, resulting in a significant improvement in my coding proficiency and design aesthetics.`;

  return (
    <section className="w-full h-full p-3">
      <ResumeViewer />
      <dl className="p-3 mt-2">
        <dt className="text-[24px] font-semibold">Expertise</dt>
        <div className="flex items-center justify-between">
          {languageLogos.map((logo, index) => (
            <dd
              key={index + 10}
              className="bg-primary p-1 rounded-md cursor-pointer"
            >
              {logo}
            </dd>
          ))}
        </div>
      </dl>
      <div className="overflow-y-scroll scroll-smooth">
        <h1 className="text-2xl font-semibold px-3 mt-3">Past Experience</h1>
        <ul className="flex gap-1 min-w-expCard">
          <ExpCard
            title="Frontend Trainee"
            desc={kreativstorm_desc}
            period="01/2024 - 02/2024"
            bgImg='url("/kreativstorm-cert.svg"'
            file="kreativstorm.pdf"
          />
          <ExpCard
            title="Open Project Developer"
            desc={ibm_desc}
            period="07/2022 - 11/2022"
            bgImg='url("/ibm.svg")'
            file="ibm.pdf"
          />
        </ul>
      </div>
    </section>
  );
}
