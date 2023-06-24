import { Messaging } from "../components/svg/messaging"


export const Home = ()=>{

    return(
        <section className="w-[100vw] min-h-[100vh] bg-background">
            <h1 className="font-bold text-[50px] text-accent text-center mt-16">Talkrr</h1>
            <p className="font-light w-[80%] text-accent/80 mx-auto mt-[10px]">Instantly connect with friends and family and enjoy instant chatting.</p>
            <div className="w-[100px] h-[30px] mx-auto mt-5">
                <button 
                className="w-[100%] h-[100%] bg-secondaryButton border-2 border-dashed hover:border-solid border-primaryButton rounded-sm text-primaryText font-light hover:font-normal"
                >
                Start Now!
                </button>
            </div>
            <div className="flex space-x-3 mt-10 ml-5">
                <Messaging width={80} height={80} fill="#46ddb5" />
                <p className="text-[10px] w-[200px] mt-[10px] text-primaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi quos dignissimos.</p>
            </div>

        </section>
    )
}