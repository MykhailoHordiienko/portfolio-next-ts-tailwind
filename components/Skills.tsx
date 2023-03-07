import React from "react";
import { motion } from "framer-motion";
import SkillComponent from "./SkillComponent";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3> */}
      <div className="grid grid-cols-3 gap-5">
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
      </div>
    </motion.div>
  );
};

export default Skills;