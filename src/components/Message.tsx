import { useState } from "react";
import { useMessagesInfo } from "../context/Messages";
import { useUserInfo } from "../context/User";
import { ImagePreview } from "./ImagePreview";

interface messageProps{
    message?:string,
    senderId:string,
    date:Date,
    img?:string,
}
export const Message = ({message, senderId,date,img}:messageProps)=>{
    const {selectedUser} = useMessagesInfo();
    const {userInfo} = useUserInfo();
    const dateMessage = new Date(Number(JSON.stringify(date)) * 1000).toLocaleTimeString();
    const [previewImg,setPreviewImg] = useState(false);

    return(
        <div>
            <div className={`flex mt-5 ${senderId == userInfo.uid?("flex-row-reverse"):("")} `}>
                <div className={`w-[30px] h-[30px] ${senderId == userInfo.uid?("mr-5"):("ml-[10px]")}`}>
                    <img src={senderId==userInfo.uid?userInfo.photoUrl:selectedUser?.photoUrl} alt="" className="w-[100%] h-[100%] rounded-full"/>
                </div>
                <div className="w-fit max-w-[300px] pl-[5px] pr-[10px] py-[10px] rounded-md bg-accent mx-[10px]">
                    {
                        img !=undefined?(<>
                        <img src={img} alt="" className="w-[100px] hover:cursor-pointer" onClick={()=>setPreviewImg(true)}/>
                        </>):(<></>)
                    }
                    <p>{message}</p>
                </div>
                <p className="text-[12px] text-primaryText/50">{dateMessage}</p>
            </div>
            {
                previewImg?<ImagePreview ImgUrl={img} close={()=>setPreviewImg(false)}/>:<></>
            }
            
        </div>
    )
}