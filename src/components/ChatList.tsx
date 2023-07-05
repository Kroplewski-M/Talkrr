import { UserMessage } from "./UserMessage"


export const ChatList = ()=>{

    return(
        <section className="w-[100vw] md:w-[400px] h-[100vh] overflow-y-scroll bg-primaryButton/30">
            <p className="font-semibold text-right mr-[10px] mt-[10px] text-primaryText hover:cursor-pointer">Add Friends</p>
            <hr  className="mt-[10px] opacity-[0.5]"/>

            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />


        </section>
    )
}