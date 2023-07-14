import { UserMessage } from "./UserMessage"
import { useUserInfo } from "../context/User"
import { Profile } from "./Profile";
import { useEffect, useState } from "react";
import { SearchUsers } from "./SearchUsers";
import {onSnapshot,doc} from "firebase/firestore";
import { db } from "../firebase";

export const ChatList = ()=>{
    const {userInfo} = useUserInfo();
    const [showProfile, setShowProfile] = useState(false);
    const [isSearching,setIsSearching] = useState(false);
    const [chats,setChats] = useState<any>([]);

    useEffect(()=>{
        const unsub = onSnapshot(doc(db,"userChats",userInfo.uid), (doc)=>{
            setChats(doc.data());
            console.log(doc.data());
        });

        return ()=>{
            unsub();
        }
    },[userInfo.uid])

    console.log(chats);
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
                <SearchUsers setIsSearching={(e:boolean)=>setIsSearching(e)}/>
            </div>
            {
                isSearching?(<></>):(<>
                    <UserMessage />                
                </>)
            }

            {
                showProfile?(<Profile close={()=> setShowProfile(false)} />):(<></>)
            }
        </section>
    )
}