import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

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
            Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
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
            
          </div>
        </div>
        </Layout>
      </main>
    </div>
  )
}

export default about
