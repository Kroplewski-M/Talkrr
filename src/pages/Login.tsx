import { LoginForm } from "../components/LoginForm"
import { Logo } from "../components/svg/Logo"
import { Link } from "react-router-dom"
import { LoginIcon } from "../components/svg/LoginIcon"

export const Login = ()=>{
    return(
        <section className="h-[100vh] w-[100vw]">
            <Link to="/">
                <div className="hover:cursor-pointer flex w-[200px] mx-auto">
                    <div className="flex self-center ml-5">
                        <Logo width={40} height={40} color="#46ddb5"/>
                    </div>
                    <h1 className="text-accent font-bold text-[34px] flex self-center">Talkrr</h1> 
                </div>
            </Link>
            <div className="mt-16 flex -space-x-8 w-[180px] mx-auto">
                <div className="rotate-[-10deg]">
                    <LoginIcon width={80} height={80} fill="#46ddb5" />
                </div>
                <p className="font-bold text-center text-primaryText/90 text-[35px] pt-5 z-10">Login</p>
            </div>
            <LoginForm />
            <div className="absolute bottom-0  h-[300px] w-[300px] rotate-[10deg] overflow-hidden">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#46DDB5" d="M40.4,-29.5C51.3,-18.5,58.5,-1.8,57.4,17.2C56.3,36.2,47.1,57.3,31.8,63.9C16.5,70.4,-4.8,62.3,-25.9,52.6C-47.1,42.9,-68.1,31.6,-70,17.5C-72,3.5,-54.9,-13.4,-40.1,-25.3C-25.3,-37.2,-12.6,-44.2,1.1,-45C14.7,-45.9,29.5,-40.6,40.4,-29.5Z" transform="translate(100 100)" />
                    </svg>

            </div>
        </section>
    )
}