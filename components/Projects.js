"use client"

import { motion } from "framer-motion"

export default function Projects(){

return(

<section id="projects" className="projects">

<h2>Projects</h2>

<div className="cards">

<motion.div whileHover={{scale:1.05}} className="card">
<h3>Portfolio Website</h3>
<p>Built with Next.js</p>
</motion.div>

<motion.div whileHover={{scale:1.05}} className="card">
<h3>Landing Page</h3>
<p>Responsive UI</p>
</motion.div>

<motion.div whileHover={{scale:1.05}} className="card">
<h3>Blog UI</h3>
<p>React blog layout</p>
</motion.div>

</div>

</section>

)

}