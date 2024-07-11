import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Expirence from '@/components/Expirence'
import Education from '@/components/Education'

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
        <title>Kushal | About page</title>
        <meta name='discription' content='any discription' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light '>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose" className='mb-16'></AnimatedText>
        <div className='grid 2-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
            <p className='font-medium'>
            I&apos;m Kushal Goyal, a Full Stack web developer with 1 year of experience. 
            My expertise spans JavaScript, React, Node.js, MongoDB, SQL etc. enabling me to develop robust and intuitive solutions. 
            At Kenstel Networks, I contributed to the Kensel Cloud Enterprise project, demonstrating my proficiency in JavaScript development and proactive 
            problem-solving. I&apos;ve led projects like Mail-Mastery, a seamless email platform, and a Blog App that enhanced user engagement through intuitive design.
            I hold a B.Tech in Computer Science and Engineering from Deenbandhu Chhotu Ram University, where I honed my skills
             in software engineering and innovation.


            </p>

            <p className='font-medium my-4'>
            Outside of work, I&apos;m passionate about continuous learning and have solved over 250 problems on Leetcode. 
            I&apos;ve also volunteered at Savera School, supporting education initiatives for underprivileged students. 
            With a commitment to excellence and user-centric design, Im eager to leverage my skills and experience 
            to drive success in your next digital project.
            </p>

            <p className='font-medium'>
            I&apos;ve also volunteered at Savera School, supporting education initiatives for underprivileged students.
            I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
            
          </div >

      {/* add a profile pichture for about page*/}
      <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
      dark:bg-dark dark:border-light
      '>
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
          <Image src={profilePic} alt='Refresh it' className='w-full h-auto rounded-2'
           priority
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
      </div>

      <div className='col-span-2 flex flex-col items-end justify-between'>

      

        <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={10}></AnimatedNumbers>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>projects complete</h2>
        </div>

        <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={1}></AnimatedNumbers>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>years of expirence </h2>
        </div>
        {/* <div className='flex flex-col items-end justify-center '>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={50}></AnimatedNumbers>+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 '>satisfied clients</h2>
        </div> */}
        
        </div>
        
        </div>
        <Skills/>
        </Layout>
        
        {/* must add expirence here */}
        <Expirence/>
        <Education/>
      </main>
    </div>
  )
}

export default about
