import { LoginForm } from "../components/LoginForm"
import { Logo } from "../components/svg/Logo"
import { Link } from "react-router-dom"
import { LoginIcon } from "../components/svg/LoginIcon"
import { User } from "../components/svg/User"

export const Login = ()=>{
    return(
        <section className="min-h-[100vh] w-[100vw] pb-16">
            <div className="md:flex ">
                <div className="md:w-[50vw]">
                    <Link to="/">
                        <div className="hover:cursor-pointer flex w-[200px] mx-auto">
                            <div className="flex self-center ml-5">
                                <Logo width={40} height={40} color="#46ddb5"/>
                            </div>
                            <h1 className="text-accent font-bold text-[34px] flex self-center">Talkrr</h1> 
                        </div>
                    </Link>
                    <div className="mt-16 flex -space-x-8 w-[180px] mx-auto hover:cursor-pointer">
                        <div className="rotate-[-10deg]">
                            <LoginIcon width={80} height={80} fill="#46ddb5" />
                        </div>
                        <p className="font-bold text-center text-primaryText/90 text-[35px] pt-5 z-10">Login</p>
                    </div>
                    <LoginForm />
                    <div className=" mt-16 w-[170px] mx-auto ">
                        <p className="text-primary/60 font-semibold text-[18px]">Don't have an account and want to register?</p>
                        <div className="w-[170px] h-[40px]">
                            <button className="block w-[170px] h-[40px] font-semibold border-accent/80 border-dashed border-2 relative z-50 mt-10 hover:font-bold text-primary/80 hover:shadow-xl">Register</button>
                        </div>

                    </div>

                </div>
                <div className="hidden md:inline md:w-[50vw] md:h-[100vh] relative ">
                    <div className="bg-[url('./assets/loginBg.jpg')] absolute w-[100%] h-[100%] bg-cover grayscale"></div>
                    <div className="w-[100%] h-[100%] grid place-content-center bg-navBg/60 rounded-md z-50 relative">
                        <div className="w-[100px] h-[100px] mx-auto mb-[30px] -mt-16">
                            <User width={100} height={100} outline="#333333"/>
                        </div>
                        <p className=" text-[25px] font-semilight">Login to you're account and continue messaging now!</p>

                    </div>
                </div>
            </div>
        </section>
    )
}