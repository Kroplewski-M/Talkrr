import { useMessagesInfo } from "../context/Messages";
import { useUserInfo } from "../context/User";

interface messageProps{
    message?:string,
    senderId:string,
    date:string,
    img?:string,
}
export const Message = ({message, senderId,date,img}:messageProps)=>{
    const {selectedUser} = useMessagesInfo();
    const {userInfo} = useUserInfo();

    return(
        <div className={`flex mt-5 ${senderId == userInfo.uid?("flex-row-reverse"):("")} `}>
            <div className={`w-[30px] h-[30px] ${senderId == userInfo.uid?("mr-5"):("ml-[10px]")}`}>
                <img src={senderId==userInfo.uid?userInfo.photoUrl:selectedUser?.photoUrl} alt="" className="w-[100%] h-[100%] rounded-full"/>
            </div>
            <div className="w-fit max-w-[300px] pl-[5px] pr-[10px] py-[10px] rounded-md bg-accent mx-[10px]">
                {
                    img !=undefined?(<>
                    <img src={img} alt="" className="w-[100px]"/>
                    </>):(<></>)
                }
                <p>{message}</p>
            </div>
        </div>
    )
}