import { Link } from "react-router-dom"
export const Footer = ()=>{
    return<>
        <div className='font-inter bg-[#4d61fc] h-[80px] mt-auto text-white flex justify-center items-center flex-col gap-3'>
            <div>
                <ul className='flex justify-center items-center gap-8 sm:text-[15px] text-[13px] ' >
                    <Link to='https://instagram.com/lordstore.shop'  target="_blank"><li className='cursor-pointer'>Instagram</li></Link>
                    <Link to=''><li className='cursor-pointer'>Youtube</li></Link>
                    <Link to='https://instagram.com/axelod.ae' target="_blank"><li className='cursor-pointer'>Admin</li></Link>
                </ul>
            </div>
            <div >
                <p className='sm:text-[15px] text-[13px]'>Designed by <strong><u>ASHISH</u></strong></p>
            </div>
        </div>
    </>
}