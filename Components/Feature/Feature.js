import React from 'react'
import Image from 'next/image'
export const Feature = (props) => {
  return (
    <>


<div className='flex w-full overflow-hidden mb-10 about' id={props.ID}>
<div className='flex flex-col w-1/3 justify-end m-auto about-left'>
    <h1 className='flex justify-center flex-col text-3xl mb-10 font-semibold'>{props.heading}</h1>
 <ul>
    <li className='list-none mb-2'>{props.listone}</li>
    <li className='list-none'>{props.listwo}</li>
    
    
 </ul>
     </div>
    
    <div className=' flex justify-start w-1/2 about-right'> 
    <iframe width="560" height="315" className='video' src= {props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    </div>
    </>
  )
}
