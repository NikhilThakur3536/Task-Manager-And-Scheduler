"use client"

import { FaCheckDouble } from "react-icons/fa";
import { motion } from "framer-motion";

interface RoleProps {
    role: string;
    selectedRole: string | null;
    onRoleSelect: (hole: string | null) => void;
}

export const RoleComponent = ({ role, selectedRole, onRoleSelect }: RoleProps) => {
    const isSelected = selectedRole === role;

    const roleSelectionHandler = () => {
        onRoleSelect(isSelected ? null : role);
        console.log(role)
    };
 
    return (
        <div className="flex justify-center items-center ml-24 transform translate-x-6">
            <div className="z-20 h-full w-full grid grid-row-4 grid-cols-2 place-items-center">
                <motion.div
                    className="relative m-2 rounded-2xl w-72 h-20 cursor-pointer"
                    onClick={roleSelectionHandler}
                    initial={{ y: 0 }}
                    whileHover={{ y: -10, boxShadow: "20px 20px 30px 20px rgba(50, 50, 50, 0.48)" }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                >
                    <div className="absolute z-50 bg-black w-full h-full rounded-2xl">
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={roleSelectionHandler}
                            className="absolute w-12 h-12 rounded-full appearance-none cursor-pointer border-4 border-rose-400 left-4 top-2 transform translate-y-1"
                        />
                        {isSelected && <FaCheckDouble className="absolute left-6 top-6 text-rose-400 transform translate-x-1" size={25} />}
                        <div className="flex justify-center items-center w-72 h-20 rounded-2xl">
                            <h3 className={`${isSelected ? "text-rose-400" : "text-white"} text-muli font-[700] text-3xl transform translate-x-2 -translate-y-1`}>
                                {role}
                            </h3>
                        </div>
                    </div>
                    <div className="absolute z-30 bg-gray-300 w-full h-full rounded-2xl top-4 left-4" />
                </motion.div>
            </div>
        </div>
    );
};
