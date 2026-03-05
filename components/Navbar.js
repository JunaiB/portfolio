"use client";

import Link from "next/link";


export default function Navbar(){
    return(
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <div>
                <Link href="#skills">Skills</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </nav>
    )
}