import React from 'react'
import { easeInOut, motion, scale } from "motion/react"
import '../App.css'

const second = () => {
  return (
    <div className="w-full h-screen flex flex-col items-start justify-center gap-4">
      <motion.div initial={{ opacity: 1, x:0, rotateZ:360  }} animate={{ opacity: 1, x:900, rotateZ:0 }} transition={{delay:0.8, duration:3, ease:"anticipate"}} className="w-22.5 h-25 bg-blue-800 rounded-[10%] flex items-center justify-center"></motion.div>
      <motion.div initial={{ opacity: 1, x:[0,0,0,0,0], y:[0,0,0,0,0], rotateZ:360  }} animate={{ opacity: 1, x:[0,200,200,0,0], y:[0,0,-200,-200,0], rotateZ:0 }} transition={{delay:0.8, duration:3, repeat:Infinity, ease:easeInOut}} className="w-22.5 h-25 bg-blue-800 rounded-[100%] flex items-center justify-center"></motion.div>
      <motion.div whileDrag={{ scale: 0.5 }} drag dragConstraints={{ left: 0, right:1000, top: 0, bottom:0 }} transition={{ duration:0.8, ease:easeInOut}} className="w-22.5 h-25 bg-blue-800 rounded-[10%] flex items-center justify-center cursor-grab"></motion.div>
    </div>
  )
}

export default second
