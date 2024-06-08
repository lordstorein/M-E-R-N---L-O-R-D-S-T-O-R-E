import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export const Home = ()=>{

    const {checkToken} = useAuth()
    const navigate = useNavigate()
    useGSAP(()=>{
        
        gsap.from('#heading',{
            y: 50,
            opacity: 0,
            duration: 1,
            delay:.8
        })
        gsap.from('#Ashish',{
            x: 20,
            opacity: 0,
            delay: 1.8,
            duration: .7
        })
        gsap.from('#logo',{
            y: 50,
            opacity: 0,
            duration: 1
        })
        gsap.from('#Intos',{
            y: 50,
            opacity: 0,
            duration: 1,
            delay:2.3
        })
        gsap.from('#Into',{
            y: 50,
            opacity: 0,
            duration: 1,
            delay:2.3
        })
        gsap.from('#footer',{
            y: 50,
            opacity: 0,
            duration: 1,
            delay:2.5
        })

    })

    const handleCheck = ()=>{
        const path = checkToken()
        if (path){
            navigate(path)
        }
    }

    return <>
        <section className='bg-[url("/images/index-image1.jpeg")] bg-cover h-screen bg-no-repeat font-inter'>
            <div className=' min-h-[50px] flex justify-start items-center'>
                <h1 id='logo' className='text-white ml-[3.5vw] text-[22px]'>Lordstore</h1>
            </div>
            <div className='sm:min-h-[25vw] min-h-[30vw] mt-10 pl-[3vw]  inline-block'>
                <h1 id='heading' className='sm:text-[10vw] text-[16vw] sm:leading-[10vw] leading-[15vw] font-[600] text-white'>PROS <br />
                ARE HERE
                </h1>
                <h5 id='Ashish' className='text-right font-bold sm:text-[1.3vw] text-gray-100'>MADE BY ASHISH</h5>
            </div>
            <div className="sm:pt-0 pt-[15vw]">
                <h5 id='Intos' className='text-end sm:pr-[60px] pr-[35px] sm:text-[1em] text-[3.5vw] text-white'>THINGS ARE AVAILABLE</h5>
                <h5 onClick={handleCheck} id='Into' className='cursor-pointer text-end sm:pr-[60px] pr-[35px] sm:text-[1em] text-[3.5vw] underline decoration-solid text-white'>Get into it<u className='cursor-pointer'> <FontAwesomeIcon icon={faSquareArrowUpRight}/></u></h5>
            </div>
            <div id='footer' className='border-solid border-t-white border-t-[1px] sm:px-10 px-[3vw] min-h-[50px] fixed bottom-0 z-40 w-screen flex justify-between items-center'>
                <div className='sm:text-[15px] text-[12px]'>
                    <h3 className='text-white'>Lordstore</h3>
                </div>
                <div >
                    <ul className='flex justify-center items center gap-5'>
                        <Link to='/privacypolicy'><li className='cursor-pointer sm:text-[15px] text-[10px] text-white'>Privacy Policy</li></Link>
                        <Link to='/refundpolicy'><li className='cursor-pointer sm:text-[15px] text-[10px] text-white'>Refund policy</li></Link>
                        <Link to='/termsandconditions'><li className='cursor-pointer sm:text-[15px] text-[10px] text-white'>Terms&conditions</li></Link>
                    </ul>
                </div>
            </div>
        </section>
    </>
}