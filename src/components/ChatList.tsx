import { UserMessage } from "./UserMessage"
import { useUserInfo } from "../context/User"
import { Profile } from "./Profile";
import { useState } from "react";
import { SearchUsers } from "./SearchUsers";


export const ChatList = ()=>{
    const {userInfo} = useUserInfo();
    const [showProfile, setShowProfile] = useState(false);

    return(
        <section className="w-[100vw] md:w-[400px] h-[100vh] overflow-y-scroll bg-primaryButton/30">
            <div className="pt-[10px] px-[10px] ">
                <div className="flex self-center space-x-2 hover:cursor-pointer" onClick={()=>setShowProfile(true)}>
                    <img src={userInfo.photoUrl} alt="" className="w-[40px] h-[40px] rounded-full"/>
                    <p className="text-primaryText md:pt-[5px] font-bold">{userInfo.displayName}</p>
                </div>
            </div>
            <hr className="mt-[10px] opacity-[0.5]"/>
            <div className="">
                <SearchUsers />
            </div>
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

            {
                showProfile?(<Profile close={()=> setShowProfile(false)} />):(<></>)
            }
        </section>
    )
}