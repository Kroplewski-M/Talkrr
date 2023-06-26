import { Clock } from "../components/svg/Clock"
import { Messaging } from "../components/svg/Messaging"


export const Home = ()=>{

    return(
        <section className="w-[100vw] min-h-[100vh] bg-background">
            <div className="w-[100vw] mx-auto md:w-[700px] ">
                <h1 className="font-bold text-[50px] text-accent text-center mt-16
                md:text-[90px] md:text-left">Talkrr</h1>
                <p className="font-semibold w-[80%] text-accent/80 mx-auto mt-[10px] text-center
                md:text-[30px] md:text-left md:mx-0">Instantly connect with friends and family and enjoy instant chatting.</p>
                <div className="w-[100px] h-[30px] md:w-[200px] md:h-[40px] mx-auto mt-5 md:mx-0 md:mt-10">
                    <button 
                    className="w-[100%] h-[100%] bg-secondaryButton border-2 border-dashed hover:border-solid border-primaryButton rounded-sm text-primaryText font-light hover:font-normal"
                    >
                    Start Now!
                    </button>
                </div>

            </div>
            <div className="md:flex md:mt-16 md:space-x-5 md:w-[730px] md:mx-auto">
                <div className="w-[80%] h-[100px] bg-accent/30 backdrop-blur-md rounded-md mx-auto mt-10 
                md:mt-0 md:w-[350px] md:h-[150px]">
                    <div className="flex space-x-3 pt-[15px]">
                        <Messaging width={80} height={80} fill="#46ddb5" />
                        <p className="text-[10px] w-[200px] mt-[10px] text-primaryText md:text-[18px] md:w-[250px]">Add friends and instantly connect with them with this fast, reliable and secure messaging service.</p>
                    </div>
                </div>
                <div className="w-[80%] h-[100px] bg-accent/30 backdrop-blur-md rounded-md mx-auto mt-5 
                md:mt-0 md:w-[350px] md:h-[150px]">
                    <div className="flex space-x-3 pt-[15px]">
                        <p className="text-[10px] w-[200px] mt-[15px] text-primaryText pl-5 md:text-[18px] md:w-[250px]">Get started as soon as in 5 minutes just create and account and start chatting!</p>
                        <Clock width={80} height={80} fill="#46ddb5" />
                    </div>
                </div>
            </div>
            <div className="mt-10 md:mt-16 w-[200px] mx-auto text-primaryText md:w-[500px] md:flex md:space-x-5">
                <div className="">
                    <p className="text-center md:text-left font-semibold md:mb-[10px]">Create an account now! and start chatting.</p>
                    <button 
                    className="w-[100%] md:w-[250px] h-[100%] md:h-[50px] mt-[10px] bg-secondaryButton border-2 border-dashed hover:border-solid border-primaryButton rounded-sm text-primaryText font-light hover:font-normal"
                    >
                    Register!
                    </button>
                </div>
                <div className="">
                    <p className="text-center md:text-left font-semibold mt-5 md:mt-0 md:mb-[10px]">Or log back in to your accountand continue talking!</p>
                    <button 
                    className="w-[100%] h-[100%] md:w-[250px] md:h-[50px] mt-[10px] bg-secondaryButton border-2 border-dashed hover:border-solid border-primaryButton rounded-sm text-primaryText font-light hover:font-normal"
                    >
                    Login
                    </button>

                </div>
            </div>
        </section>
    )
}