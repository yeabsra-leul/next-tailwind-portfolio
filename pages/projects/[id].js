import { useRouter } from 'next/router'
import Image from 'next/image'
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"
import web6 from "../../public/web6.png"
import Layout from '../layout'
import Link from 'next/link'
import IoChevronBackSharp, { IoIosArrowBack, IoMdArrowBack, IoMdBackspace } from "react-icons/io"


export default function ProjectDetail(){

    const router = useRouter()
    const {id} = router.query
    // id.toString()
    var imagePath = `/../../public/${id}`;
    const fullPath = imagePath + ".png"
    console.log(id)

    let imgUrl = {
        web1:web1,
        web2:web2,
        web3:web3,
        web4:web4,
        web5:web5,
        web6:web6,
    }

    return(
            <div className='mt-6 mx-10'>
                <Link href={"/"} className='ml-15 text-3xl text-teal-500 mt-10 hover:text-gray-400' ><IoIosArrowBack/></Link>
                <div className='flex items-center flex-col gap-6 min-h-screen mt-10'>
                    <h1 className='text-5xl text-teal-500'>Project {id}</h1>
                    <Image src={imgUrl[id]} width={500} height={500} />
                    <h3 className='text-teal-600 pt-5'>Description</h3>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eius, alias omnis dolorem aut modi quidem, iste sunt voluptas hic itaque illum nostrum doloremque rem!</p>
                </div>
            </div>
        
    )
}