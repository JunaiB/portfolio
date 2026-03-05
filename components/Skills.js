"use client"

import { motion } from "framer-motion"

export default function Skills(){

    return(

        <motion.section
        id="skills"
        className="skills"
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        >

        <h2>Skills</h2>

        <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Next.js</div>
            <div className="skill-card">WordPress</div>
        </div>

        </motion.section>

)

}