import React from 'react'
import { useState } from 'react'
import { easeInOut, easeOut, motion } from "motion/react"
import '../App.css'

const first = () => {
    const [addbox, setaddbox] = useState([{ "test": "" }])
    const addboxhandler = () => {
        setaddbox([...addbox, { "test": "" }])
    }

    return (
        <>
            <div className="App w-full h-screen flex flex-col items-center justify-center gap-4">
                <div className="w-[99%] h-[99%] bg-gray-200 rounded-lg flex items-center justify-center text-2xl font-bold">
                    <div>
                        <motion.button className='px-4 py-2 bg-blue-500 text-white rounded-lg' onClick={() => addboxhandler()} whileTap={{ scale: 1.2 }} transition={{ duration:0.8, ease:easeOut}}>Add Box</motion.button>
                        <div className="w-full h-full flex items-center justify-start gap-4 p-4 flex-wrap">
                            {addbox.map((item, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.2, background: "#eacbcb" }} transition={{ duration: 0.9, ease: easeInOut }} whileTap={{ scale: 0.9 }} className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-xl font-bold">
                                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, ease: easeInOut }} whileHover={{ color: "blue" }} className="text-2xl font-bold">Box {index + 1}</motion.h1>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default first
