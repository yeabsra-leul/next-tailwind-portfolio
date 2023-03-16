import {BsFillMoonStarsFill} from "react-icons/bs"
import Link from "next/link"


export default function Layout({children}){
    return(
        <body>
            <nav className='py-14 mb-14 flex justify-between dark:text-white px-10'>
            <h1 className=' text-xl font-burtons'><span className='hover:text-teal-500 ease-in duration-300'>YE </span><span className='hover:text-teal-500 ease-in duration-300 '>AB</span></h1>
            <ul className='flex items-center'>
              <Link href="#" className='cursor-pointer text-2xl'><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}/></Link>
              <a download href={"Yeabsra Leulseged CV.pdf"} className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md ml-9'>Resume</a>
            </ul>
          </nav>
          {children}
        </body>
        
    )
}