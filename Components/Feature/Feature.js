import React from 'react'
import Image from 'next/image'
export const Feature = (props) => {
  return (
    <>


    <div className='flex w-full overflow-hidden about my-20' id={props.ID}>
    <div className='flex flex-col w-2/3 justify-end m-auto  feature-left '>
    <iframe  className='video' width="560" height="315" src= {props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
    </div>
    <div className=' flex flex-col justify-start  item-center feature-ul w-1/3 m-auto'>  
    <h1 className='flex justify-center flex-col text-center text-xl mb-10 font-semibold'>{props.heading}</h1>
 <ul className='w-2/3 feature-ul m-auto'>
    <li className='list-none mb-2'>{props.listone}</li>
    <li className='list-none'>{props.listwo}</li>
    
 </ul>



    </div>
    </div>
    </>
  )
}
