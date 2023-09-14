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
                let check = userPref ==="dark"? "dark" : "light"
                setMode(check);

                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }
                else{
                    document.documentElement.classList.remove("dark")
                }
            }
            else{
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check);
                window.localStorage.setItem(
                    "theme",
                    check
                );
                if(check === "dark")  {
                    document.documentElement.classList.add("dark")
                }
                else{
                    document.documentElement.classList.remove("dark")
                 }
            }

        } 

        //checking the condition on first load as well
        handleChange();

        mediaQuery.addEventListener("change",handleChange);

        return ()=>{
            mediaQuery.removeEventListener("change", handleChange)
        }

    },[])

    //update the value in the local storage
    // useEffect(()=>{
    //     if(mode == "dark"){
    //         window.localStorage.setItem("theme","dark");
    //         document.documentElement.classList.add("dark")
    //     }
    //     else{
    //         window.localStorage.setItem("theme","light");
    //         document.documentElement.classList.remove("dark")
    //     }
    // },[mode])
    
    useEffect(() => {
        setTimeout(() => {
            if (mode === "dark") {
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
            } else {
                window.localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
            }
        }, 100); // Adjust the delay as needed
    }, [mode]);

  return (
    // <div>
      [mode , setMode]
    // </div>
  )
}

export default useThemeSwitcher
