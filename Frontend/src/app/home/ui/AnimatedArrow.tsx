import { motion } from "framer-motion"

export const AnimatedArrow = () => {
    return(
        <div className="z-50">
            <svg className="absolute top-1/2 left-6 w-[150px]" viewBox="0 0 72 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                d="M7.2849 28.7037C7.67101 29.0951 8.30417 29.0968 8.69911 28.7073L15.135 22.36C15.5299 21.9705 15.5371 21.3374 15.151 20.9459C14.7649 20.5544 14.1317 20.5527 13.7368 20.9422L8.01599 26.5843L2.4231 20.9133C2.03699 20.5218 1.40383 20.5202 1.00889 20.9097C0.613956 21.2992 0.606798 21.9323 0.992906 22.3238L7.2849 28.7037ZM7.31655 -0.00255647L7 27.9958L9 28.001L9.31654 0.00255647L7.31655 -0.00255647Z" stroke="black" strokeWidth="2" fill="none"
                initial={{pathLength:0,}}
                whileInView={{pathLength:1}}
                transition={{duration:3}}
                />
                <motion.path d="M8 1H72" stroke="black" 
                    initial={{pathLength:0,}}
                    animate={{pathLength:1,}}
                    transition={{duration:2}}
                />
            </svg>
        </div>

    )
}