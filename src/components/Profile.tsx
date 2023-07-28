import { useUserInfo } from "../context/User"
import { Close } from "./svg/Close";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useMessagesInfo } from "../context/Messages";
import { useState } from "react";
interface ProfileProps{
    close: ()=>void,
}

export const Profile = ({close}:ProfileProps)=>{
    const {userInfo,logoutUser} = useUserInfo();
    const {unselectMessage,unselectUserMessage} = useMessagesInfo();
    const navigate = useNavigate();
    const UserSignOut = async()=>{
        const auth = getAuth();
        try{
            await signOut(auth);
            unselectMessage();
            unselectUserMessage();
            logoutUser();
            navigate("/");
        }catch(error){
            console.log(error);
        }
    }
    const [loadedImg,setLoadedImg]=useState(false);
    return(
        <section className="fixed top-0 z-[50] w-[100vw] h-[100vh] backdrop-blur-md">
            <div className="w-[100%] h-[100%] grid place-content-center">
                <div className="w-[270px] pb-10 rounded-md bg-accent mx-auto mt-10 pt-10 relative">
                    <div className="absolute right-2 top-2 width-[30px] height-[30px] hover:cursor-pointer" onClick={close}>
                        <Close width={30} height={30} fill="#000000" />
                    </div>
                    <div className="w-[80px] h-[80px] mx-auto">
                        <img src={userInfo.photoUrl} alt="" className={`w-[100%] h-[100%] rounded-full  ${loadedImg?(""):("hidden")}`} onLoad={()=>setLoadedImg(true)}/>
                        <div className={` ${loadedImg?("hidden"):("")} text-primaryText/70 w-[100%] h-[100%] grid place-content-center bg-black/20 rounded-full text-[10px]`}>loading..</div>
                    </div>
                    <p className="font-bold text-[20px] text-center mt-6">{userInfo.displayName}</p>
                    <p className="font-semibold text-[15px] text-center mt-3 ">{userInfo.email}</p>
                    <div className="w-[200px] h-[35px] mx-auto mt-10" onClick={UserSignOut}>
                        <button className="w-[100%] h-[100%] font-semibold border-solid border-signOutBtn border-2 rounded-md hover:bg-signOutBtn hover:text-secondaryText">SignOut</button>
                    </div>
                </div>

            </div>
        </section>

    )
}