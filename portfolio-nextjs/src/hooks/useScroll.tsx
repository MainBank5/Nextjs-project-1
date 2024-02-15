import {useState, useEffect} from 'react'

export const useScroll = () => {
    const [isScrolling, setIsScrollin] = useState(false)

   useEffect(() => {
    const handleScroll = () => {
        setIsScrollin(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
   }, [])

   return isScrolling;
}