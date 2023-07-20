import { Back } from "./svg/Back"
import { useMessagesInfo } from "../context/Messages"
import { useUserInfo } from "../context/User"
import { useEffect, useState } from "react";
import { Timestamp, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { UploadImg } from "./svg/UploadImg";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

interface ChatUserProps{
    back:()=>void,
}
export const ChatUser=({back}:ChatUserProps)=>{
    const {selectedMessage,selectedUser} = useMessagesInfo();
    const {userInfo} = useUserInfo();
    const [messages,setMessages] = useState<any>([]);
    
    const [text,setText] = useState("");
    const [img,setImg] = useState<File | null>(null);

    useEffect(()=>{
        if(selectedMessage != '' && selectedMessage != undefined){
            const unsub = onSnapshot(doc(db,"chats",selectedMessage),(doc)=>{
                if(doc.exists()){
                    setMessages(doc.data().messages);
                }
            })

            return ()=>{
                unsub();
            }
        }

    },[selectedMessage]);

    const changeImg = (e:any)=>{
        if(e.target.files[0] !=undefined){
            setImg(e.target.files[0]);
        }
        console.log(e.target.files[0]);
    }   

    const metadata = {
        contentType: 'image/jpeg',
      };
    const sendMessage = async()=>{
        try{
            if(img){
                
                const storageRef = ref(storage, uuidv4());
                const uploadTask = await uploadBytesResumable(storageRef,img,metadata);
    
                const downloadUrl = await getDownloadURL(uploadTask.ref);
    
                await updateDoc(doc(db,"chats",selectedMessage),{
                    messages:arrayUnion({
                        id: uuidv4(),
                        text:text,
                        senderId:userInfo.uid,
                        date:Timestamp.now(),
                        img:downloadUrl,
                    })
                })
    
            }else{
                await updateDoc(doc(db,"chats",selectedMessage),{
                    messages:arrayUnion({
                        id: uuidv4(),
                        text:text,
                        senderId:userInfo.uid,
                        date:Timestamp.now(),
                    })
                })
            }
        }catch(error){
            console.log(error);
        }finally{
            setText("");
        }
    }
    const handleKey = (e:any)=>{
        if(e.key == "Enter"){
            sendMessage();
        }
    }
    const setMessageValue = (e:any)=>{
        setText(e.target.value);
    }
    return(
        <>
            <div className="w-[100%] h-[100%] relative">
                <div className="absolute top-0 w-[100%] h-[50px] bg-accent/80 flex border border-black/50">
                    <div onClick={back} className="w-[50px] h-[50px] md:hidden pt-[10px] pl-[5px]">
                        <Back width={30} height={30} fill="#000000" />
                    </div>
                    <div className="flex">
                        <img src={selectedUser?.photoUrl} alt="" className="w-[40px] h-[40px] rounded-full flex self-center md:ml-5"/>
                    </div>
                    <p className="flex self-center ml-[10px] font-semibold">{selectedUser?.displayName}</p>
                </div>
                <div className="pt-16 h-[80%] overfloy-y-scroll">
                    <p>messages</p>
                    <p>{JSON.stringify(messages)}</p>
                </div>
                <div className="absolute bottom-0 w-[100%] h-[100px] bg-accent/10 flex pt-5" >
                    <input type="text" className="w-[80%] h-[40px] pl-5 bg-black/0 focus:outline-none text-primaryText font-semibold" placeholder="Type something..." value={text} onKeyDown={handleKey} onChange={setMessageValue}/>
                    <div className="mr-5 w-[40px] h-[35px]">
                        <label htmlFor="img" className="hover:cursor-pointer">
                            <UploadImg width={40} height={40} fill="#333333"/>
                        </label>
                            <input type="file" name="img" id="img" accept="image/png, image/jpeg" onChange={changeImg} className="w-[100%] h-[100%] bg-accent font-semibold hidden" />
                    </div>
                    <div className="mr-5 w-[100px] h-[35px]">
                        <button className="w-[100%] h-[100%] bg-accent font-semibold" onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}