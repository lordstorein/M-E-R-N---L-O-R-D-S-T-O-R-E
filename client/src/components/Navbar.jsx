import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

    const showSideBar = ()=>{
        const mob = document.querySelector('#mob').style.display = 'flex'
    }

    const closeSideBar = ()=> {
        const mob = document.querySelector('#mob').style.display = 'none'
    }


export const Navbar = ({text})=>{

    useGSAP(()=>{
        gsap.from('#nav',{
            y: -40,
            opacity: 0,
            duration: .7  
        })
    })
   

  return <>

        <section className='font-[600]'>
            <div id='nav' className="bg-white h-[50px] flex justify-between items-center sm:px-5 px-3 fixed w-screen z-50 top-0">
                <div>
                    <img src="/images/Lordstore Logo.png" className='w-[150px]'/>
                </div>
                <div>
                    <ul className='gap-[3vw] sm:flex hidden mr-5'>
                    <Link to='/'><li className='font-inter  text-[13px] cursor-pointer'> Home </li></Link>
                        <Link to='/aftereffect'><li className='font-inter  text-[13px] cursor-pointer'>Aftereffect</li></Link>
                        <Link to='/alightmotion'><li className='font-inter  text-[13px] cursor-pointer'>Alightmotion</li></Link>
                        <Link to='/projects'><li className='font-inter  text-[13px] cursor-pointer'>Projects</li></Link>
                        <Link to='/others'><li className='font-inter  text-[13px] cursor-pointer'>Others</li></Link>
                    </ul>
                    <FontAwesomeIcon id='menu' onClick={showSideBar} className='sm:hidden flex cursor-pointer' icon={faBars}/>
                </div>
            </div>
            
            <div id='mob' className='hidden  justify-end'>
            <div className='fixed z-[52] bg-white h-full w-[960px'>
                <FontAwesomeIcon onClick={closeSideBar} id='x' className='ml-[200px] mr-3 mb-3 mt-7 cursor-pointer' icon={faX}/>
                <ul className='flex flex-col gap-6'>
                    <Link to='/'><li className='font-inter cursor-pointer px-6 text-[15px]'>Home</li></Link>
                    <Link to='/aftereffect'><li className='font-inter cursor-pointer px-6 text-[15px]'>Aftereffect</li></Link>
                    <Link to='/alightmotion'><li className='font-inter cursor-pointer px-6 text-[15px]'>Alightmotion</li></Link>
                    <Link to='projects'><li className='font-inter cursor-pointer px-6 text-[15px]'>Project</li></Link>
                    <Link to='others'><li className='font-inter cursor-pointer px-6 text-[15px]'>Others</li></Link>
                </ul>
            </div>
            </div>

            <div className='bg-[#4d61fc] flex h-[50px] mt-[50px] justify-center items-center font-inter text-white'>
                <p>{text}</p>
            </div>
        </section>
    </>
}