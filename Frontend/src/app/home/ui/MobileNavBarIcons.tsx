"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconProps } from "@/data/Data";

export const MobileNavBarIcons = ({ icon: Icon, label }: IconProps) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", duration:.2 }}
        whileTap={{scale:0.9}}
      >
        <Icon className="text-white hover:text-yellow-300" size={30} />
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0,y:10 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0}}
          transition={{ duration: 0.2 }}
          className="absolute bottom-10 font-poppins text-yellow-400 text-xs w-fit-content bg-black px-2 py-1 rounded-lg"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};
