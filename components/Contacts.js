import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaRegUserCircle,
} from "react-icons/fa";
import Heading from "./Heading";
import data from "@/data/contact";
import SectionWrapper from "./SectionWrapper";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  instagram: FaInstagram,
  cv: FaRegUserCircle,
};

const colorMap = {
  linkedin: "text-[#0a66c2]",
  youtube: "text-[#ff0000]",
  instagram: "text-[#c32aa3]",
  facebook: "text-[#1877f2]",
  behance: "text-[#003ECB]",
};

const Contacts = () => {
  return (
    <SectionWrapper>
      <Heading>Contacts</Heading>
      <div className="flex flex-wrap item-center gap-5">
        {data.map((contact) => {
          const IconComponent = iconMap[contact.name];
          const iconColor =
            colorMap[contact.name] || "text-black dark:text-white";

          return (
            <Link
              href={contact.link}
              key={contact.id}
              target="_blank"
              className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
            >
              {IconComponent && (
                <IconComponent size={18} className={iconColor} />
              )}
              <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                {contact.label}
              </span>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Contacts;
