import { Logo } from "./svg/Logo"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useUserInfo } from "../context/User";
export const Nav = ()=>{
    const location = useLocation();
    const {userInfo} = useUserInfo();
    return(
        <>
            <nav className={`w-[100wv] h-[50px] bg-navBg flex ${location.pathname=='/login'||location.pathname=='/register'?'hidden':'visible'}`}>
                <div className="hover:cursor-pointer flex">
                    <div className="flex self-center ml-5">
                        <Logo width={30} height={30} color="#ffffff"/>
                    </div>
                    <Link to="/" className="flex self-center">
                        <h1 className="text-logo font-bold text-[24px] ">Talkrr</h1> 
                    </Link>
                </div>
               <div className="flex flex-row-reverse w-[100%]">
                {
                    userInfo.uid == ''?(
                    <>
                        <Link to="/login" className="flex self-center">
                            <p className="mr-5 font-bold text-secondaryText hover:cursor-pointer">Login/Register</p>
                        </Link>
                    </>):(
                    <>
                    </>)
                }

               </div>
            </nav>
        </>
    )
}