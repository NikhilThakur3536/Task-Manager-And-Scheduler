"use client";

import { FaCheckDouble } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import { useFormData } from "@/app/customhooks/useFormData";
import axios from "axios";

// Define the expected props for the component
interface RoleProps {
    role: string; // The role name
    selectedRole: string | null; // The currently selected role
    onRoleSelect: (role: string | null) => void; // Function to update selected role
    userID:string,
}

export const RoleComponent = ({ role, selectedRole, onRoleSelect, userID }: RoleProps) => {
    // Check if the role is currently selected
    const isSelected = selectedRole === role;
    
    // Use custom hook for managing form state
    const { data, dataHandler } = useFormData({ role: "" });
    
    // Store previous data to prevent unnecessary re-renders
    const prevDataRef = useRef(data);

    // Function to handle role selection
    const handleRoleSelection = useCallback(async() => {
        const newRole = isSelected ? "" : role; // Toggle selection
        console.log("Role being set:", newRole); // Log the new role selection

        // Update selected role state
        onRoleSelect(newRole || null);
        
        // Update form state
        dataHandler({ target: { name: "role", value: newRole } } as React.ChangeEvent<HTMLInputElement>);

        try{
            const response= await axios.post("http://localhost:3001/auth/roles",{
              userID:userID,
              role:newRole,
            })
            
            if(response){
                console.log(response.data)
            }
        }catch{

        }

        // Log data changes only if they occur
        if (prevDataRef.current !== data) {
            console.log("Updated Data State:", data);
            prevDataRef.current = data;
        }
    }, [isSelected, role, onRoleSelect, data, dataHandler]);

    return (
        <div className="flex justify-center items-center ml-24 translate-x-6">
            {/* Animated container for role selection */}
            <motion.div
                className="relative m-2 w-72 h-20 cursor-pointer rounded-2xl"
                onClick={handleRoleSelection} // Handle click event
                initial={{ y: 0 }} // Initial position
                whileHover={{ y: -10, boxShadow: "20px 20px 30px 20px rgba(50, 50, 50, 0.48)" }} // Hover animation
                transition={{ duration: 0.3, ease: "easeIn" }} // Smooth transition
            >
                {/* Main selection box */}
                <div className="absolute z-50 bg-black w-full h-full rounded-2xl flex justify-center items-center">
                    {/* Hidden checkbox for selection */}
                    <input
                        name="role"
                        type="checkbox"
                        value={role}
                        checked={isSelected}
                        onChange={handleRoleSelection}
                        className="absolute left-4 top-2 w-12 h-12 cursor-pointer appearance-none rounded-full border-4 border-rose-400 transform translate-y-1"
                    />
                    
                    {/* Check icon displayed when role is selected */}
                    {isSelected && <FaCheckDouble className="absolute left-6 top-6 text-rose-400 ml-1" size={25} />}
                    
                    {/* Display the role name with dynamic styling */}
                    <h3 className={`text-3xl font-bold ${isSelected ? "text-rose-400" : "text-white"}`}>{role}</h3>
                </div>
                
                {/* Background shadow effect for depth */}
                <div className="absolute z-30 bg-gray-300 w-full h-full rounded-2xl top-4 left-4" />
            </motion.div>
        </div>
    );
};
