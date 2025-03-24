"use client";

import { FaCheckDouble } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import { useFormData } from "@/app/customhooks/useFormData";

interface RoleProps {
    role: string;
    selectedRole: string | null;
    onRoleSelect: (role: string | null) => void;
}

export const RoleComponent = ({ role, selectedRole, onRoleSelect }: RoleProps) => {
    const isSelected = selectedRole === role;
    const formState = useFormData({ role: "" });

    // Store previous data reference to prevent unnecessary updates
    const prevDataRef = useRef(formState.data);

    // ✅ Optimized role selection handler
    const roleSelectionHandler = useCallback(() => {
        const newRole = isSelected ? "" : role;
        console.log("Role being set:", newRole); // 🔹 Logs before update

        onRoleSelect(isSelected ? null : role);
        formState.dataHandler({
            target: { name: "role", value: newRole }
        } as React.ChangeEvent<HTMLInputElement>);

        // Log data only if it has changed
        if (prevDataRef.current !== formState.data) {
            console.log("Updated Data State:", formState.data);
            prevDataRef.current = formState.data; // Update reference
        }
    }, [isSelected, role, onRoleSelect, formState.dataHandler]);

    return (
        <div className="flex justify-center items-center ml-24 transform translate-x-6">
            <div className="z-20 h-full w-full grid grid-row-4 grid-cols-2 place-items-center">
                <motion.div
                    className="relative m-2 w-72 h-20 cursor-pointer rounded-2xl"
                    onClick={roleSelectionHandler}
                    initial={{ y: 0 }}
                    whileHover={{ y: -10, boxShadow: "20px 20px 30px 20px rgba(50, 50, 50, 0.48)" }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                >
                    {/* Main Role Selection Container */}
                    <div className="absolute z-50 bg-black w-full h-full rounded-2xl">
                        <input
                            name="role"
                            type="checkbox"
                            value={role}
                            checked={isSelected}
                            onChange={roleSelectionHandler}
                            className="absolute left-4 top-2 w-12 h-12 cursor-pointer appearance-none rounded-full border-4 border-rose-400 transform translate-y-1"
                        />
                        {isSelected && <FaCheckDouble className="absolute left-6 top-6 text-rose-400 transform translate-x-1" size={25} />}
                        <div className="flex justify-center items-center w-72 h-20 rounded-2xl">
                            <h3 className={`text-3xl font-bold ${isSelected ? "text-rose-400" : "text-white"}`}>
                                {role}
                            </h3>
                        </div>
                    </div>
                    {/* Shadow Effect */}
                    <div className="absolute z-30 bg-gray-300 w-full h-full rounded-2xl top-4 left-4" />
                </motion.div>
            </div>
        </div>
    );
};
