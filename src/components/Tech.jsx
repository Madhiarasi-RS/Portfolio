import { DiJava } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiEclipseide } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants=(duration) => ({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
});


const Tech = () => {
  return (
    <>
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl text-neutral-300">Programming Language</motion.h1>
        <motion.div 
         whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
 <motion.div 
 variants={iconVariants(2.5)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <DiJava className="text-7xl text-[#f89820]" /> {/* Java orange */}
</motion.div>
<motion.div
variants={iconVariants(3)} 
 initial="initial"
 animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiJavascript className="text-7xl text-[#f7df1e]" /> {/* JavaScript yellow */}
</motion.div>
<motion.div 
variants={iconVariants(5)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiMysql className="text-7xl text-[#4479A1]" />
</motion.div>
      </motion.div>
    </div>
    

    <div className="border-b border-neutral-800 pb-24">
        <motion.h1  whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
             className="my-20 text-center text-4xl text-neutral-300">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
<motion.div 
variants={iconVariants(2)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
             <motion.div 
             variants={iconVariants(3)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <TbBrandNextjs className="text-7xl text-white" /> {/* Next.js monochrome (white text) */}
</motion.div>
            <motion.div 
  variants={iconVariants(5)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiMongodb className="text-7xl text-[#47A248]" /> {/* MongoDB green */}
</motion.div>
           <motion.div 
           variants={iconVariants(2.5)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <FaNodeJs className="text-7xl text-[#339933]" /> {/* Node.js green */}
</motion.div>
<motion.div 
variants={iconVariants(3)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiExpress className="text-7xl text-[#000FFF]" /> {/* Express is black/white by default */}
</motion.div>
            <motion.div 
            variants={iconVariants(5)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <BiLogoPostgresql className="text-7xl text-[#336791]" /> {/* PostgreSQL blue */}
</motion.div>
<motion.div variants={iconVariants(2.5)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiTailwindcss className="text-7xl text-[#06B6D4]" />
</motion.div>

<motion.div variants={iconVariants(3)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiFramer className="text-7xl text-white" />
</motion.div>
        </motion.div>
    </div>
    

    <div className="border-b border-neutral-800 pb-24">
        <motion.h1  whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
             className="my-20 text-center text-4xl text-neutral-300">Tools</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
<motion.div variants={iconVariants(5)} 
 initial="initial"
 animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4">
  <FaGitAlt className="text-7xl text-[#f05032]" /> {/* Git orange */}
</motion.div>
<motion.div variants={iconVariants(2)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiEclipseide className="text-7xl text-[#2C2255]" /> 
</motion.div>
<motion.div variants={iconVariants(3)} 
 initial="initial"
 animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4">
  <FaPython className="text-7xl text-[#3776AB]" /> 
</motion.div>
<motion.div variants={iconVariants(5)} 
 initial="initial"
 animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiGooglecolab className="text-7xl text-[#F44336]" />
</motion.div>
        </motion.div>
    </div>


    </>
  )
}

export default Tech