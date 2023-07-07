import { UserMessage } from "./UserMessage"
import { useUserInfo } from "../context/User"

export const ChatList = ()=>{
    const {userInfo} = useUserInfo();

    return(
        <section className="w-[100vw] md:w-[400px] h-[100vh] overflow-y-scroll bg-primaryButton/30">
            <div className="flex pt-[10px] px-[10px] ">
                <div className="flex self-center space-x-2 hover:cursor-pointer">
                    <img src={userInfo.photoUrl} alt="" className="w-[40px] h-[40px] rounded-full"/>
                    <p className="text-primaryText md:pt-[5px] font-bold">{userInfo.displayName}</p>
                </div>
                <div className="grow pt-[5px]">
                    <div>
                        <p className="hover:bg-accent/70 text-primaryText hover:cursor-pointer bg-background/70 rounded-md w-[120px] ml-auto text-center">Add Friends</p>
                    </div>
                </div>

            </div>
            <hr className="mt-[10px] opacity-[0.5]"/>

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