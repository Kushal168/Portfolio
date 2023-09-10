import React, { useRef } from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({posiiton,comapny,companyLink, time, address, work})=>{
    const ref  = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
          <LiIcon reference={ref}/> 
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{posiiton}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-primary capitalize'
                >@{comapny}</a></h3>
                <span className='capitalize font-medium text-dark/75 '>
                <h3>{time} | {address}</h3>
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Expirence = () => {
    const ref = useRef()
    const {scrollYProgress} =useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
     <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
        </h2>

        <div  ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                />

                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                />

                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
               />
               
                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                />

                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                /> 
                
            </ul>
        </div>

    </div>
  )
}

export default Expirence
