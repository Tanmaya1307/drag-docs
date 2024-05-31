import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc:"Lorem ipsum dolo sit amet, consectetur adipisicing.",
      filesize:".9mb",
      close:false,
      tag:{isopen:true,tagtitle:"Download Now",tagcolor:"green"}
    },
    {
      desc:"Lorem ipsum dolo sit amet, consectetur adipisicing.",
      filesize:".9mb",
      close:false,
      tag:{isopen:true,tagtitle:"Download Now",tagcolor:"blue"}
    },
    {
      desc:"Lorem ipsum dolo sit amet, consectetur adipisicing.",
      filesize:".9mb",
      close:false,
      tag:{isopen:true,tagtitle:"Upload",tagcolor:"green"}
    }
  ]
  return (
    <>
        <div ref={ref} className="w-full h-full fixed bg-sky500 z-[3] flex gap-5 flex-wrap p-5">
          {data.map((items,index)=>(
            <Card data={items} reference={ref}/>
          ))}
        </div>
    </>
  )
}

export default Foreground
