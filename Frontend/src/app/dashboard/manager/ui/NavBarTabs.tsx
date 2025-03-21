"use client";

import { motion } from "framer-motion";
import { NavBarTabsProps } from "../data/data";
import { useState } from "react";

export const NavBarTabs = ({ icon: Icon, Tab, isFull }: NavBarTabsProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.div
      className="relative flex items-center w-full h-12 px-4 rounded-xl cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      whileHover={{
        backgroundColor: "rgba(174, 177, 180, 0.22)",
        color: "rgba(68, 134, 248, 0.84)",
      }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      {/* Hover Circle Effect */}
      {isHover && (
        <motion.div
          className="absolute left-2 w-10 h-10 rounded-full bg-black"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -40, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      )}

      {/* Icon Section */}
      <motion.div
        className="flex items-center justify-center m-4"
        animate={{ color: isHover ? "rgba(68, 134, 248, 0.84)" : "gray" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Icon size={22} className="z-10" />
      </motion.div>

      {/* Tab Name (Hidden when `isFull` is `false`) */}
      {isFull && (
        <motion.span
          className="ml-4 font-muli text-medium"
          animate={{
            color: isHover ? "rgba(68, 134, 248, 0.84)" : "rgb(105, 103, 103)",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {Tab}
        </motion.span>
      )}
    </motion.div>
  );
};
