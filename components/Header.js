"use client";

import data from "../data/header";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  const { image, name, jobTitle, address, experience, education } = data;
  return (
    <header className="flex items-center flex-wrap md:flex-row flex-col gap-y-9 gap-x-8 pb-7">
      <div className="w-[200px] md:w-[150px] h-[200px] md:h-[150px] relative rounded-full overflow-hidden">
        <Image
          src={image}
          fill
          alt="Wikan Profile Image"
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-black capitalize text-violet-700 dark:text-white">
          {name}
        </h1>
        <h3 className="mt-2 text-lg md:text-xl font-semibold md:font-bold capitalize dark:text-zinc-400">
          {jobTitle}
        </h3>
        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2">
          <HeaderInfo
            Icon={
              <FaMapMarkerAlt
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={address}
          />
          <HeaderInfo
            Icon={
              <BsTerminalFill
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={experience}
          />
          <HeaderInfo
            Icon={
              <IoIosSchool
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={education}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
