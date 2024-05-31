import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({data,reference}) => {
  return (
        <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{scale:0.9}} 
        dragTransition={{ bounceStiffness: 600 }}
        className="relative flex-shrink-0 w-48 h-56 bg-zinc-900/90 rounded-[45px] text-white px-6 py-7 overflow-hidden">
          <FaRegFileLines/> 
          <p className="text-xs leading-tight mt-6">{data.desc}</p>
          <div className="footer absolute bottom-0 left-0 w-full">
            <div className="flex items-center justify-between px-6 py-5">
              <h5>{data.filesize}</h5>
              <span className='w-6 h-6 bg-zinc-600 rounded-[20px] flex items-center justify-center'>
                {data.close? <IoIosClose/> :<LuDownload color="#fff" size="0.7rem"/>}
              </span>
            </div>
            {data.tag.isopen &&
            <div className={`tag w-full h-11 ${data.tag.tagcolor === "blue"? "bg-blue-600" : "bg-green-400"} flex items-center justify-center`}>
              <h3 className="text-sm text-bold">{data.tag.tagtitle}</h3>
            </div>}
          </div>
        </motion.div>
  )
}   

export default Card