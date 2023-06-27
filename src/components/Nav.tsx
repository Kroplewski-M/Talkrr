import { Logo } from "./svg/Logo"
import { useLocation } from 'react-router-dom'

export const Nav = ()=>{
    const location = useLocation();

    return(
        <>
            <nav className={`w-[100wv] h-[50px] bg-navBg flex ${location.pathname=='/login'||location.pathname=='/register'?'hidden':'visible'}`}>
                <div className="hover:cursor-pointer flex">
                    <div className="flex self-center ml-5">
                        <Logo width={30} height={30} color="#ffffff"/>
                    </div>
                    <h1 className="text-logo font-bold text-[24px] flex self-center">Talkrr</h1> 
                </div>
               <div className="flex flex-row-reverse w-[100%]">
                <p className="flex self-center mr-5 font-bold text-secondaryText hover:cursor-pointer">Login/Register</p>
               </div>
            </nav>
        </>
    )
}