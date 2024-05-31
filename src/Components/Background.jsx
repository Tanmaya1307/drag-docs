import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-full'>
            <div className="absolute top-[5%] w-full py-10 text-zinc-500 text-xl flex justify-center">Documents.</div>
            <h1 className='text-[12vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-zinc-900 leading-none tracking-tighter font-semibold'>Docs.</h1>
        </div>
    </>
  )
}

export default Background
