import React from 'react'

const Details = ({posiiton,comapny,companyLink, time, address, work})=>{
    return(
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
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
            </div>
        </li>
    )
}

const Expirence = () => {
  return (
    <div className='my-64'>
     <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Expirence
        </h2>

        <div className='w-[75%] mx-auto relative'>
            <div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col justify-between ml-4'>
                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                >
                </Details>
                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                >
                </Details>
                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                >
                </Details>
                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                >
                </Details>
                <Details
                posiiton="software Engineer" comapny="Google"
                companyLink="www.google.com" time="2022-present" address="Mountian View"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                >
                </Details>
                
            </ul>
        </div>

    </div>
  )
}

export default Expirence
