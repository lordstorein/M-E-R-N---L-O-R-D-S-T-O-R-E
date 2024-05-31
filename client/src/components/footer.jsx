import { Link } from "react-router-dom"
export const Footer = ()=>{
    return<>
        <div className='font-inter bg-[#4d61fc] h-[80px] mt-auto text-white flex justify-center items-center flex-col gap-3'>
            <div>
                <ul className='flex justify-center items-center gap-8 sm:text-[15px] text-[13px] ' >
                    <Link to='/termsandconditions'><li className='cursor-pointer'>Terms&conditions</li></Link>
                    <Link to='/privacypolicy'><li className='cursor-pointer'>Privacy Policy</li></Link>
                    <Link to='/refundpolicy'><li className='cursor-pointer'>Refund Policy</li></Link>
                </ul>
            </div>
            <div >
                <p className='sm:text-[15px] text-[13px]'>Designed by <strong><u>ASHISH</u></strong></p>
            </div>
        </div>
    </>
}