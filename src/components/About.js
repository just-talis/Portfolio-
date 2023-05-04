import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[black] text-gray-100'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-950'>About</p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div>
                        <p>Hi, I'm Esther Simon, nice to meet you. Please take a look around.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About