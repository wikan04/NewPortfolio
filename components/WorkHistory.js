import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/work";
import Image from "next/image";
import SkillComponent from "./SkillComponent";

const WorkHistory = () => {
  return (
    <SectionWrapper>
      <Heading>Work History</Heading>
      {data.map(
        ({ id, image, role, company, type, date, desc, skills, options }) => (
          <div className="mt-6 flex gap-x-6" key={id}>
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-zinc-700">
              <Image
                src={image}
                fill
                className="w-full h-full object-cover"
                alt={`${role} at ${company}`}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-black dark:text-white capitalize font-bold text-base">
                {role}
              </h2>
              <span className="capitalize text-sm font-bold text-zinc-500">
                {company}
              </span>
              <div className="flex items-center gap-x-1">
                <span className="text-black dark:text-white capitalize text-sm font-bold">
                  {type}
                </span>
                <span className="text-black dark:text-white">-</span>
                <span className="text-black dark:text-white capitalize text-sm font-bold">
                  {date}
                </span>
              </div>
              <div className="capitalize text-sm md:text-base dark:text-white text-zinc-600 ">
                {desc}
              </div>
              {skills && skills.length > 0 && (
                <div className="flex gap-2 flex-wrap my-2">
                  {skills.map(({ id, ...skill }) => (
                    <SkillComponent key={id} skill={skill} />
                  ))}
                </div>
              )}
              {options && options.length > 0 && (
                <ul className="mt-2">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className="text-zinc-900 text-base font-semibold dark:text-zinc-400"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )
      )}
    </SectionWrapper>
  );
};

export default WorkHistory;
