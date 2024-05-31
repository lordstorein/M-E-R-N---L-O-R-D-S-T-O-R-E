
export const Block = ({amount, checkoutHandler, productId, heading, title, img}) => {
    return <>
        <section className='h-fit sm:px-[25px] px-[10px] z-1 font-inter font-[500]'>

            {/* 1st */}
            <div className='shadow-[2px_9px_49px_-17px rgba(0,0,0,0.1)] grid sm:grid-cols-12 grid-cols-1 mb-[50px]'>
                <div className='bg-white sm:col-span-5 sm:rounded-l-md rounded-t-md flex justify-center items-center p-[10px] sm:min-h-[22vw] min-h-[40vw]'>
                    <img className='rounded-md' src={img} />
                </div>
                <div className='px-3 py-1 bg-white sm:col-span-7 sm:rounded-r-md sm:rounded-b-none rounded-b-md sm:min-h-[22vw] min-h-[26vw]'>
                    <h1 className='sm:text-[4vw] text-[5.5vw]' >{heading}</h1>
                    <h1 className='sm:text-[2vw] text-[3vw]' >{title}</h1>
                    <div className='mt-[2vw]' >
                        <button className="bg-[#4d61fc] border-solid border-r-black  border-r-[1.5px] sm:text-[1.2vw] text-[2.5vw] text-white sm:px-[5vw] sm:py-[1vw] px-[6.5vw] py-[1.5vw]" >₹ {amount}</button>
                        <button onClick={()=>checkoutHandler(amount, productId)} className='bg-[#4d61fc]  border-r-black  sm:text-[1.2vw] text-[2.5vw] text-white sm:px-[5vw] sm:py-[1vw] px-[6.5vw] py-[1.5vw] '>Buy</button>
                    </div>
                </div>
            </div>

        
            {/* 2st */}

        </section>

    </>
}
