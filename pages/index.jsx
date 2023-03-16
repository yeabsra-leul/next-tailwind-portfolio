import Head from 'next/head'
import {BsAirplaneFill, BsDiscord, BsFillMoonStarsFill, BsTelegram} from "react-icons/bs"
import { AiFillAccountBook, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import avatar from "../public/dev-ed-wave.png"
import Image from 'next/image'

import Link from 'next/link'
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState } from 'react'
import { saveAs } from 'file-saver'
import Layout from './layout'


export default function Home() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' px-10 md:px-20 lg:px-40 dark:bg-gray-900 ease-in duration-300' >
        <section className='min-h-screen '>
        <nav className='py-14 mb-14 flex justify-between dark:text-white px-10'>
            <h1 className=' text-xl font-burtons'><span className='hover:text-teal-500 ease-in duration-300'>YE </span><span className='hover:text-teal-500 ease-in duration-300 '>AB</span></h1>
            <ul className='flex items-center'>
              <Link href="#" className='cursor-pointer text-2xl'><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}/></Link>
              <a download href={"Yeabsra Leulseged CV.pdf"} className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md ml-9'>Resume</a>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-teal-600 text-5xl py-2 font-medium md:text-6xl'>Yeabsra</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Fullstack Developer</h3>
            <p className='text-md py-5 text-gray-800 leading-8 md:text-xl max-w-lg mx-auto dark:text-gray-100'>I am a FreeLancer, I make a Fullstack  Resposive Websites and Develop Cross-platform Android Apps <span className='block'>Join Me on my socials below <a href="/projects/about">about</a></span></p>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-white'>
            <BsDiscord className='hover:-translate-y-5 ease-in duration-300' />
            <AiFillLinkedin className='hover:-translate-y-5 ease-in duration-300' />
            <AiFillTwitterCircle className='hover:-translate-y-5 ease-in duration-300'/>
            <BsTelegram className='hover:-translate-y-5 ease-in duration-300'/>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
            <Image src={avatar} layout='fill' objectFit='cover' />
          </div>
        </section>
        <section className='min-h-screen'>
          <div className='dark:text-white'>
            <h3 className='text-3xl py-1'> Sercives i Provide</h3>
            <p className='text-md leading-8 text-gray-800 dark:text-gray-50'>I make Web and Mobile app Designs tailor-made as per your needs and requirements  <span className='text-teal-500'>soluta </span> cupiditate omnis. Tempora tempore consequatur, dolorum non rem exercitationem!</p>
            <p className='text-md leading-8 text-gray-800'>
              I offer from a wide range of services, including brand design and
              programming</p>
          </div>
          <div className='lg:flex gap-10 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100}/> 
              <h3 className='text-lg font-medium pt-8 pb-2'>Amazing Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs following core
                design theory</p>
              <h4 className='py-4 text-teal-600'>Design Tools I use</h4> 
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100}/> 
              <h3 className='text-lg font-medium pt-8 pb-2'>Interactive UI</h3>
              <p className='py-2'>Do you have an idea for your next great website? Let's make it a
                reality.</p>
              <h4 className='py-4 text-teal-600'>Design Tools I use</h4> 
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100}/> 
              <h3 className='text-lg font-medium pt-8 pb-2'>Fluid Websites</h3>
              <p className='py-2'> Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.</p>
              <h4 className='py-4 text-teal-600'>Design Tools I use</h4> 
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>
        <section className='min-h-screen'>
        <div className='dark:text-white'>
            <h3 className='text-3xl py-1'> Portfolio</h3>
            <p className='text-md leading-8 text-gray-800 dark:text-white'>I have been invlolved in many FullStack projects and made many personal ones. Below are some of the projects i made  <span className='text-teal-500'>soluta </span> The Designs are user-friendly and responsive</p>
            <p className='text-md leading-8 text-gray-800 dark:text-white'>
              You can click and go to each project</p>
          </div>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap '>
            <div className='basis-1/3 flex-1 '>
              <a href="/projects/web1">
                <Image src={web1} className='rounded object-cover' width={"100%"} height={"100%"} id='web1'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 '>
              
              <a href="/projects/web2">
                  <Image src={web2} className='rounded object-cover' width={"100%"} height={"100%"} id='web2'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 '>
              <a href="/projects/web3">
                  <Image src={web3} className='rounded object-cover' width={"100%"} height={"100%"} id='web3'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 '>
              <a href="/projects/web4">
                  <Image src={web4} className='rounded object-cover' width={"100%"} height={"100%"} id='web4'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 '>
              <a href="/projects/web5">
                  <Image src={web5} className='rounded object-cover' width={"100%"} height={"100%"} id='web5'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 '>
              <a href="/projects/web6">
                <Image src={web6} className='rounded object-cover' width={"100%"} height={"100%"} id='web6'/>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}
