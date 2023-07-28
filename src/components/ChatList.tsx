import { UserMessage } from "./UserMessage"
import { useUserInfo } from "../context/User"
import { Profile } from "./Profile";
import { useState } from "react";
import { SearchUsers } from "./SearchUsers";
import { useMessagesInfo } from "../context/Messages";


interface ChatListProps{
    showMessage:()=>void,
}

export const ChatList = ({showMessage}:ChatListProps)=>{
    const {userInfo} = useUserInfo();
    const [showProfile, setShowProfile] = useState(false);
    const [isSearching,setIsSearching] = useState(false);
    const {messages,selectMessage,setSelectedUserMessages} = useMessagesInfo();

    interface selectedUserProps{
        displayName:string,
        photoUrl:string,
        uid:string,
    }
    const handleUserClick = (messsagesID:string, selectedUserInfo:selectedUserProps)=>{
        selectMessage(messsagesID);
        showMessage();
        setSelectedUserMessages(selectedUserInfo);
        // setTimeout(() => {
        // }, 1);
    }
    const [loadedImg,setLoadedImg]=useState(false);
    return(
        <section className="w-[100vw] md:w-[400px] h-[100vh] overflow-y-scroll bg-primaryButton/30">
            <div className="pt-[10px] px-[10px] ">
                <div className="flex self-center space-x-2 hover:cursor-pointer" onClick={()=>setShowProfile(true)}>
                    <img src={userInfo.photoUrl} alt="" className={`w-[40px] h-[40px] rounded-full ${loadedImg?(""):("hidden")}`} onLoad={()=>setLoadedImg(true)}/>
                    <div className={` ${loadedImg?("hidden"):("")} text-primaryText/70 w-[40px] h-[40px] grid place-content-center bg-black/20 rounded-full text-[10px]`}>loading..</div>
                    <p className="text-primaryText md:pt-[5px] font-bold">{userInfo.displayName}</p>
                </div>
            </div>
            <hr className="mt-[10px] opacity-[0.5]"/>
            <div className="">
                <SearchUsers setIsSearching={(e:boolean)=>setIsSearching(e)}/>
            </div>
            {
                isSearching?(<></>):(<>
                    {
                        Object.entries(messages!)?.sort((a:any,b:any)=> b[1].date - a[1].date).map((chat:any)=>(
                            <div key={chat[1].userInfo.uid} className="" onClick={()=>handleUserClick(chat[0],chat[1].userInfo)}>
                                <UserMessage name={chat[1].userInfo.displayName} photoUrl={chat[1].userInfo.photoUrl} message={chat[1]?.lastMessage?.message} />
                            </div>
                        ))
                    }
                                    
                </>)
            }

            {
                showProfile?(<Profile close={()=> setShowProfile(false)} />):(<></>)
            }
        </section>
    )
}