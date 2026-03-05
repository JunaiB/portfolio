"use client"

import TypingText from "./TypingText"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero(){

return(

<motion.section
className="hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1>Hello I'm Junaitha</h1>

<TypingText/>

<p>I build modern websites using Next.js and React</p>

<Link href="#contact">
    <button>Hire Me</button>
</Link>

</motion.section>

)

}