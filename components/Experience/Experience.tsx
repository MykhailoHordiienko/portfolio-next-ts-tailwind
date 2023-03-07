import React from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center">
      <ChevronLeftIcon className="text-[#F7AB0A]/10 w-36 absolute -left-10" />
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
      <ChevronRightIcon className="text-[#F7AB0A]/10 w-36 absolute -right-10" />
    </motion.div>
  );
};

export default Experience;