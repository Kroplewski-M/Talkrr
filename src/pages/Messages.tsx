import { ChatList } from "../components/ChatList"
import { Profile } from "../components/Profile"


export const Messages = ()=>{

    return(
        <section className="w-[100vw] h-[100vh] flex">
            <div className="border">
                <ChatList />
            </div>
            <div className="border w-[100%] bg-accent/10 hidden md:inline">
                <div className="w-[100%] h-[100%] grid place-content-center">
                    <p className="font-semibold text-primaryText/50 text-[25px]">Choose a chat to get started!</p>
                </div>
            </div>
        </section>
    )
}