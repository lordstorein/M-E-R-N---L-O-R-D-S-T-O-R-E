import { Block } from "../components/Block"
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { Footer } from "../components/footer"


export const Alightmotion = ()=>{
    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const path = isLoggedIn()
        if(path){
          navigate(path)
        }
      }, [isLoggedIn, navigate])

      
      
      const checkoutHandler = async (amount, productId)=>{
        const {data:{key}} = await axios.get("https://mern-api-livid.vercel.app/api/auth/getkey")

        const {data:{order}} = await axios.post("https://mern-api-livid.vercel.app/api/auth/checkout",{
          amount,
          productId
        })

        const options = {
          key,
          amount: order.amount,
          currency: "INR",
          name: "LORDSTORE",
          description: "Editors are here",
          order_id: order.id,
          callback_url: `https://mern-api-livid.vercel.app/api/auth/paymentverification?productId=${productId}`,
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          notes: {
            "address": "Razorpay corporate office"
          },
          theme: {
            "color": "#4d61fc"
          }
        };
        const razor = new window.Razorpay(options);
        razor.open();
      }

    return <>
    <section className='min-h-[100vh] flex flex-col bg-[#f0f0f0] pt-[40px]'>
      <>
        <Block amount={149} img={"/images/three.jpg"} heading={'Dark cc'} title={'This cc is not darker than your future'} checkoutHandler={checkoutHandler} productId={'am1'}/>

        <Block amount={99} img={'/images/one.jpg'} heading={'Gian cc'} title={'Gian hai aap, fr'} checkoutHandler={checkoutHandler} productId={'am2'}/>

        <Block amount={49} img={'/images/two.jpg'} heading={'Light cc'} title={'Gora pakora cc'} checkoutHandler={checkoutHandler} productId={'am3'}/>
      </>
      <Footer/>
   
    </section>
    </>
}