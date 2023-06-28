import { LoginForm } from "../components/LoginForm"
import { Logo } from "../components/svg/Logo"
import { Link } from "react-router-dom"
import { LoginIcon } from "../components/svg/LoginIcon"

export const Login = ()=>{
    return(
        <section className="min-h-[100vh] w-[100vw] bg-gradient-to-t from-accent pb-10">
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
            <div className=" mt-16 w-[170px] mx-auto">
                <p className="text-secondaryText/80 font-semibold text-[18px]">Don't have an account and want to register?</p>
                <div className="w-[170px] h-[40px]">
                    <button className="block w-[170px] h-[40px] font-semibold border-secondaryButton/80 border-dashed border-2 relative z-50 mt-10 hover:font-bold text-secondaryText/80">Register</button>
                </div>

            </div>
        </section>
    )
}