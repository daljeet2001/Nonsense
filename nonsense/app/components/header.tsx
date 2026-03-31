"use client"

import { motion } from "framer-motion";

export default function Header(){
    return(
        <div className="flex flex-col gap-6">

            <div className="flex items-center justify-between">

                <motion.div className=" text-[15px] md:text-lg lg:text-[26px] [font-family:var(--font-fragment-mono)] cursor-pointer" whileHover={{scale:1.5,x:30}} transition={{duration:0.5, ease:"easeOut"}}>ABOUT</motion.div>
                    <motion.div className="text-[15px] md:text-lg lg:text-[26px] cursor-pointer  [font-family:var(--font-fragment-mono)]" whileHover={{scale:1.5,x:-30}} transition={{duration:0.5,ease:"easeOut"}}>DIRECTIONS</motion.div>

            </div>

            <h1 className="text-center text-[55px] md:text-[122px] lg:text-[200px] [font-family:var(--font-rubik-bubble)] tracking-widest leading-[1.45] md:leading-[1.2] break-words">NONSENSE</h1>


               <div className="flex items-center justify-between">

                <div className=" text-xs md:text-sm [font-family:var(--font-fragment-mono)]">A new fashion company</div>
                    <div className="text-xs md:text-sm [font-family:var(--font-fragment-mono)]">@nonsensefashion</div>

            </div>

        


            

        </div>
    )
}