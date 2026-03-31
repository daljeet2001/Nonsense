"use client"

import { motion } from "framer-motion";

export default function Header(){
    return(
        <div className="flex flex-col justify-between h-[50vh]">

            <div className="flex items-center justify-between">

                <motion.div className="text-[26px] [font-family:var(--font-fragment-mono)] cursor-pointer" whileHover={{scale:1.5,x:30}} transition={{duration:0.5, ease:"easeOut"}}>ABOUT</motion.div>
                    <motion.div className="cursor-pointer text-[26px] [font-family:var(--font-fragment-mono)]" whileHover={{scale:1.5,x:-30}} transition={{duration:0.5,ease:"easeOut"}}>DIRECTIONS</motion.div>

            </div>

            <h1 className="text-center text-[200px] [font-family:var(--font-rubik-bubble)] tracking-widest leading-[1.2]">NONSENSE</h1>


               <div className="flex items-center justify-between">

                <div className="text-sm [font-family:var(--font-fragment-mono)]">A new fashion company</div>
                    <div className="text-sm [font-family:var(--font-fragment-mono)]">@nonsensefashion</div>

            </div>

        


            

        </div>
    )
}