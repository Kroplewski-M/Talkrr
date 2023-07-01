import { Logo } from "../components/svg/Logo"
import { LoginIcon } from "../components/svg/LoginIcon"
import { Link } from "react-router-dom"
import { RegisterForm } from "../components/RegisterForm"

export const Register = ()=>{

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
                        <p className="font-bold text-center text-primaryText/90 text-[35px] pt-5 z-10">Register</p>
                    </div>
                    <RegisterForm />
                    <div className=" mt-16 w-[170px] ml-5 md:mx-auto md:w-[500px]">
                        <p className="text-primary/60 font-semibold text-[18px]">Already have an account? Login now!</p>
                        <div className="w-[170px] h-[40px]">
                            <Link to='/login'>
                                <button className="block w-[170px] h-[40px] font-semibold border-accent/80 border-dashed border-2 relative z-50 mt-10 hover:font-bold text-primary/80 hover:shadow-xl">Login</button>
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="hidden md:inline md:w-[50vw] md:h-[100vh] relative ">
                    <div className="bg-[url('./assets/registerBg.jpg')] absolute w-[70%] h-[70%] bg-contain bg-no-repeat grayscale mt-16"></div>
                    <div className="w-[100%] h-[100%] grid place-content-center bg-navBg/60 rounded-md z-50 relative">

                        <p className=" text-[25px] font-semilight">Create an account now and start connecting!</p>

                    </div>
                </div>
            </div>
        
        </section>
    )
}