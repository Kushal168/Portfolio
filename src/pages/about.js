import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Expirence from '@/components/Expirence'

// seperate commponents for numbers 
const AnimatedNumbers = ({value})=>{
 const ref =  useRef(null);

//these hooks provided by framer motion
 const motionValue = useMotionValue(0);
 const springValue = useSpring(motionValue,{duration:3000});
 const isInView = useInView(ref,{once:true });

 useEffect(()=>{
  if(isInView){
    motionValue.set(value);
  }
 },[isInView,value,motionValue])

 useEffect(()=>{
  springValue.on("change",(latest)=>{
    // console.log(latest)
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest .toFixed(0)
    }
  })
 },[springValue,value])


  return <span ref={ref}></span>
}

const about = () => {
  return (
    <div>
      <Head>
        <title>Ksuhal | About page</title>
        {/* <meta name='discription' content='any discription' /> */}
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose" className='mb-16'></AnimatedText>
        <div className='grid 2-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
            <p className='font-medium'>
            Hi, I&apos;m Kushal Goyal, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
            new and innovative ways to bring my clients&apos; visions to life.
            </p>

            <p className='font-medium my-4'>
            I believe that design is about more than just making things look pretty – it&apos;s about solving problems and 
            creating intuitive, enjoyable experiences for users.
            </p>

            <p className='font-medium'>
            Whether I&apos;m working on a website, mobile app, or 
            other digital product, I bring my commitment to design excellence and user-centered thinking to 
            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
            
          </div >

      {/* add a profile pichture for about page*/}
      <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
          <Image src={profilePic} alt='Refresh it' className='w-full h-auto rounded-2'></Image>
      </div>

      <div className='col-span-2 flex flex-col items-end justify-between'>

      <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={50}></AnimatedNumbers>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
        </div>

        <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={40}></AnimatedNumbers>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75'>projects complete</h2>
        </div>

        <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={4}></AnimatedNumbers>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75'>years of expirence </h2>
        </div>
        
        </div>
        
        </div>
        <Skills/>
        </Layout>
        
        {/* must add expirence here */}
        <Expirence/>
      </main>
    </div>
  )
}

export default about
