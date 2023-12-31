import AnimatedText from '@/components/AnimatedText'
import { Github } from '@/components/Icons'
import Layout from '@/components/Layout'
import { Festive } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projects1 from "../../public/images/projects/crypto-screener-cover-image.jpg"


const FeaturedProjects = ({type, title, summary, img, link, github}) =>{
    return(
       <article className='w-full flex items-center justify-between rounded-br-2xl border border-solid border-dark
       bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
       '>

       <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
       rounded-br-2xl dark:bg-light'
       />
          
        <Link href={link} target="blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
        >
            {/* we can also add framer image here just to add propertry like whileHover or Transition*/}
            <Image src={img} alt={title} className='w-full h-auto'
            while
             priority
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font medium text-xl dark:text-primaryDark'> {type} </span>
                <Link href={link} target="blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link className='w-10' href={github} target="blank"> <Github/>  </Link>
                <Link className='ml-4 rounded-lg bg-dark text-light px-6 text-lg font-semibold w-30 h-10 p-2 dark:text-dark dark:bg-light' 
                href={link} target="blank">Visit Project</Link>
                </div>
            </div>
       </article>
    )
}

const Project = ({title, type, img, link, github })=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
       rounded-br-2xl dark:bg-light'
       />
              <Link href={link} target="blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <Image src={img} alt={title} className='w-full h-auto'></Image>
        </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary font medium text-xl dark:text-primaryDark'> {type} </span>
                <Link href={link} target="blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold '>{title}</h2>
                </Link>
               
                <div className=' w-full mt-2 flex items-center justify-between'>

                <Link className=' text-10 font-semibold w-30 h-10 pt-2 hover:underline' href={link} target="blank">
                    Visit 
                </Link>

                <Link className='w-8'href={github} target="blank"> {" "}
                 <Github/>{" "} 
                </Link>
                </div>
            </div>
        </article>
    )
}


const projects = () => {
  return (
      <>
      <Head>
        <title>Kushal | About page</title>
        <meta name='discription' content='any discription' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'> 
        <Layout className='pt-16'>
            <AnimatedText text=" Imagination Trumps Knowledge!" 
            className='mb-16'
            />

            <div className='grid grid-cols-12 gap-24 gap-y-32'>
                <div className='col-span-12'>
                <FeaturedProjects title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}

                />
                </div>



                <div className='col-span-6'>
                <Project title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}
                />
                </div>

                <div className='col-span-6'>
                    <Project title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}
                />
                </div>

                <div className='col-span-12'>
                <FeaturedProjects title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}

                />
                </div>
                <div className='col-span-6'>
                <Project title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}
                />
                </div>
                <div className='col-span-6'>
                <Project title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}
                />
                </div>
            </div>

        </Layout>
        
      </main>
      </>
   
  )
}

export default projects
