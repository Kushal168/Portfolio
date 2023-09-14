import React, { Children } from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light'
    >
        <Layout className='py-8 flex items-center justify-between'>
            <span className='font-semibold'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center font-semibold'>
            Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;<Link  className='underline underline-offset-2' href="/">Kushal</Link>
            </div>
            <Link href="https://www.linkedin.com/in/kushal-goyal-316367207" target='blank' className='underline underline-offset-2 font-semibold'>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
