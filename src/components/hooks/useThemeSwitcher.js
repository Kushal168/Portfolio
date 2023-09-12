import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    //css media feature
    const preferDarkQuery = "(prefer-color-scheme: dark)"
    const[mode,setMode] = useState("")

    useEffect(()=>{
        const mediaQuery = window.matchMedia(preferDarkQuery)
        //  storing user preference in local storage
        const userPref = window.localStorage.getItem("theme")

        const handleChange =()=>{
            if(userPref){
                let check = userPref ==='dark'? "dark" : "light"
            }

        }

        mediaQuery.addEventListener("change",handleChange)

    },[])

  return (
    <div>
      
    </div>
  )
}

export default useThemeSwitcher
