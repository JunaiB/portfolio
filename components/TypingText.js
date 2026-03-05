"use client"

import { useState, useEffect } from "react"

export default function TypingText(){

const words = ["Frontend Developer","WordPress Developer","UI Designer"]

const [wordIndex,setWordIndex] = useState(0)
const [text,setText] = useState("")
const [isDeleting,setIsDeleting] = useState(false)

useEffect(()=>{

const current = words[wordIndex]

const timer = setTimeout(()=>{

if(!isDeleting){
setText(current.substring(0,text.length+1))
}else{
setText(current.substring(0,text.length-1))
}

if(!isDeleting && text === current){
setTimeout(()=>setIsDeleting(true),1000)
}

else if(isDeleting && text === ""){
setIsDeleting(false)
setWordIndex((wordIndex+1) % words.length)
}

},100)

return ()=> clearTimeout(timer)

},[text,isDeleting,wordIndex])

return(
<h2 className="typing">{text}|</h2>
)

}