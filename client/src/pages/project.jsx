import { Block } from "../components/Block"
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { Footer } from "../components/footer"


export const Project = ()=>{
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
        <Block amount={29} img={"/images/gojo thumbnail_00000.jpg"} heading={'Project file'} title={'Nashe se chadh gyi - Satoru Gojo'} checkoutHandler={checkoutHandler} productId={'p1'}/>

        <Block amount={49} img={'/images/narutoshion.jpg'} heading={'Project file'} title={'dheere dheere se - Naurto & Shion'} checkoutHandler={checkoutHandler} productId={'p2'}/>
      </>
      <Footer/>
   
    </section>
    </>
}