import Link from 'next/link'
import React from 'react'
import Logo from '/src/components/Logo'
import { useRouter } from 'next/router'
import TwitterIcon from './Icons'

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
            `}>
                &nbsp;
                </span>
        </Link>
    )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="about" className='mx-4' />
             <CustomLink href="/projects" title="projects" className='mx-4'/>
            <CustomLink href="/articles" title="articles" className='ml-4'/>
            </nav>
        
        <nav>
            <Link href='/' target='blank'><TwitterIcon/></Link>
            <Link href='/' target='blank'>T</Link>
            <Link href='/' target='blank'>T</Link>
            <Link href='/' target='blank'>T</Link>
            <Link href='/' target='blank'>T</Link>
            <Link href='/' target='blank'>T</Link>  
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50% ]'>
            <Logo/>
        </div>
    </header>
    )
  }
  

export default Navbar;
