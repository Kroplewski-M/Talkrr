import { Logo } from "../components/svg/Logo"
import { Link } from "react-router-dom"


export const Login = ()=>{
    return(
        <section className="min-h-[100vh] w-[100vw]">
            <Link to="/">
                <div className="hover:cursor-pointer flex w-[200px] mx-auto">
                    <div className="flex self-center ml-5">
                        <Logo width={40} height={40} color="#46ddb5"/>
                    </div>
                    <h1 className="text-accent font-bold text-[34px] flex self-center">Talkrr</h1> 
                </div>
            </Link>
        </section>
    )
}