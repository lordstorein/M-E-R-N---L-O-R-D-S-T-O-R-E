import { Block } from "../components/Block"
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { Footer } from "../components/footer"

export const Aftereffect = ()=>{

    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const path = isLoggedIn()
        if(path){
          navigate(path)
        }
      }, [isLoggedIn, navigate])

      
      
      // const checkoutHandler = async (amount, productId)=>{
      //   const {data:{key}} = await axios.get("https://mern-api-livid.vercel.app/api/auth/getkey")

      //   const {data:{order}} = await axios.post("https://mern-api-livid.vercel.app/api/auth/checkout",{
      //     amount,
      //     productId
      //   })

      //   const options = {
      //     key,
      //     amount: order.amount,
      //     currency: "INR",
      //     name: "LORDSTORE",
      //     description: "Editors are here",
      //     order_id: order.id,
      //     callback_url: `https://mern-api-livid.vercel.app/api/auth/paymentverification?productId=${productId}`,
      //     prefill: {
      //       name: "",
      //       email: "",
      //       contact: "",
      //     },
      //     notes: {
      //       "address": "Razorpay corporate office"
      //     },
      //     theme: {
      //       "color": "#4d61fc"
      //     }
      //   };
      //   const razor = new window.Razorpay(options);
      //   razor.open();
      // }

    return <>
    <section className='min-h-[100vh] flex flex-col bg-[#f0f0f0] pt-[40px]'>
      <>
        <Block link={'https://cosmofeed.com/vp/66229898544a270013e827c5'}  amount={29} img={"/images/five.jpg"} heading={'After Effect & Plugins'} title={'let your creativity out with this one'} productId={'ae1'}/>

        <Block amount={149} img={"/images/daymm.webp"} heading={'Daymm cc'} title={"Don't worry your reaction won't be 'moye moye' after buying this"} productId={'ae2'}/>

        <Block amount={129} img={"/images/cc_00000.webp"} heading={'W cc'} title={"Don't buy if you need this instead, buy if you don't need this"} productId={'ae3'}/>

        <Block amount={99} img={"/images/Goat_Cc_00000.jpg"} heading={'Goat cc'} title={"Try it out, you'll love it"} productId={'ae4'}/>

        <Block amount={49} img={"/images/blue_00000.webp"} heading={'Good cc'} title={"Skip the panic, buy the fun!"}  productId={'ae5'}/>

      </>
      <Footer/>
   
    </section>
    </>
}