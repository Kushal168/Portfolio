import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '/src/components/Logo'
import { useRouter } from 'next/router'
import {TwitterIcon,Github,Linkedin,Discord } from './Icons'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href,title,className =""})=>{
    const router = useRouter();
    // console.log(router)
    //it give us a property of asPath which shows the URL on which the user is
    return(
        <Link href={href} className={`${className} relative group` }>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}
            >
                &nbsp;
                </span>
        </Link>
    )
}

const Navbar = () => {

    const[mode,setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light'
    >
        <nav>
            <CustomLink href="/" title="Home" className='mr-4 font-semibold'/>
            <CustomLink href="/about" title="about" className='mx-4 font-semibold' />
            <CustomLink href="/projects" title="projects" className='mx-4 font-semibold'/>
            {/* <CustomLink href="/articles" title="articles" className='ml-4 font-semibold'/> */}
            </nav>
        
        <nav className='flex items-center hustify-center flex-wrap'>
            <motion.a href='http://twitter.com' target='blank' whileHover={{y:-2}} className="w-6 mx-3" whileTap={{scale:2}}><TwitterIcon/></motion.a>
            <motion.a href='http://github.com' target='blank' whileHover={{y:-2}} className="w-6 mx-3" whileTap={{scale:2}}><Github/></motion.a>
            <motion.a href='http://linkedin.com' target='blank'whileHover={{y:-2}} className="w-6 mx-3" whileTap={{scale:2}}><Linkedin/></motion.a> 
            <motion.a href='http://discord.com' target='blank' whileHover={{y:-2}} className="w-6 mx -3" whileTap={{scale:2}}><Discord/></motion.a>

            <button onClick={()=>{setMode(mode === "light" ? "dark" : "light")}}
            // className='ml-3 flex items-center justify-center rounded-full p-1 '
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
                {/* {
                    mode === "dark" ? <SunIcon className="fill-dark"></SunIcon> : <MoonIcon className="fill-dark"></MoonIcon>
                } */}
            eh

            </button>
              
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50% ]'>
            <Logo/>
        </div>
    </header>
    )
  }
  

export default Navbar;
