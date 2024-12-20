"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { langauges } from "@/@/_data/skills";

const Skills: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        My Skills
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Below are some of the tools and technologies I have experience with:
      </p>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, staggerChildren: 0.2 },
          },
        }}
      >
        {langauges.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-900 hover:scale-105 hover:shadow-lg transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={skill.img}
              alt="okok"
              className="h-16 w-16 mb-4"
              height={40}
              width={40}
            />
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
