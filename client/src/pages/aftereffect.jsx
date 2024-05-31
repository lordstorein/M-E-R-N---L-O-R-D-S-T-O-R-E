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

      
      
      const checkoutHandler = async (amount, productId)=>{
        const {data:{key}} = await axios.get("http://localhost:5000/api/auth/getkey")

        const {data:{order}} = await axios.post("http://localhost:5000/api/auth/checkout",{
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
          callback_url: `http://localhost:5000/api/auth/paymentverification?productId=${productId}`,
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
        <Block  amount={29} img={"/images/five.jpg"} heading={'After Effect & Plugins'} title={'let your creativity out with this one'} checkoutHandler={checkoutHandler} productId={'ae1'}/>

        <Block amount={149} img={"/images/daymm.webp"} heading={'Daymm cc'} title={"Don't worry your reaction won't be 'moye moye' after buying this"} checkoutHandler={checkoutHandler} productId={'ae2'}/>

        <Block amount={129} img={"/images/cc_00000.webp"} heading={'W cc'} title={"Don't buy if you need this instead, buy if you don't need this"} checkoutHandler={checkoutHandler} productId={'ae3'}/>

        <Block amount={99} img={"/images/Goat_Cc_00000.jpg"} heading={'Goat cc'} title={"Try it out, you'll love it"} checkoutHandler={checkoutHandler} productId={'ae4'}/>

        <Block amount={49} img={"/images/blue_00000.webp"} heading={'Good cc'} title={"Skip the panic, buy the fun!"} checkoutHandler={checkoutHandler} productId={'ae5'}/>

      </>
      <Footer/>
   
    </section>
    </>
}