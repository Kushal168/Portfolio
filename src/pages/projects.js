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
                <FeaturedProjects title="Mail-Mastery"
                summary=" Enjoy a user-friendly email management platform that closely emulates Gmail’s essential features, making
                it easy to compose, send, and receive emails seamlessly. Experience a seamless email management solution that
                offers an intuitive interface for a smooth and enjoyable email experience.."
                link="https://kushalgoyal-gmail-clone.netlify.app"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}

                />
                </div>

                <div className='col-span-12'>
                <FeaturedProjects title="Chat-App"
                summary="Develop an innovative chat application using Socket.io and Node.js, providing real-time communication
                capabilities. Implemented secure user authentication with unique roomname for a private and personalized
                chat experience. Enforced a strict no-profanity policy to maintain a respectful and safe environment for users.
                Integrated features for users to easily share their current location, enhancing connectivity and communication
                within the chat."
                link="https://kushal-new-chit-chat.glitch.me"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}

                />
                </div>
                <div className='col-span-12'>
                <FeaturedProjects title="Blog-App"
                summary="Spearheaded the development of an innovative blog app, resulting in a significant increase in user engagement within the first month. Successfully implemented user-friendly features, contributing to a notable
                rise in the number of published articles. Established a vibrant community of readers, fostering a substantial
                increase in user interactions through comments."
                link="https://kushal-blog-app.netlify.app"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}

                />
                </div>



                <div className='col-span-6'>
                <Project title="weather-app"
                link="https://github.com/Kushal168/weather-app"
                type="Featured Project"
                github="https://github.com/Kushal168"
                img={projects1}
                />
                </div>

                <div className='col-span-6'>
                    <Project title="FoodiePal"
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
