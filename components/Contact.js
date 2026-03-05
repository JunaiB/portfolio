"use client"

import { motion } from "framer-motion"

export default function Contact(){

return(

<motion.section
id="contact"
className="contact"
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1}}
viewport={{once:true}}
>

<h2>Contact</h2>

<form className="contact-form">

<input type="text" placeholder="Full Name" required />

<input type="email" placeholder="Email Address" required />

<textarea placeholder="Your Message" rows="5"></textarea>

<button type="submit">Send Message</button>

</form>

</motion.section>

)

}