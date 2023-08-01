import { Back } from "./svg/Back"
import { useMessagesInfo } from "../context/Messages"
import { useUserInfo } from "../context/User"
import { useEffect, useRef, useState } from "react";
import { Timestamp, arrayUnion, doc, onSnapshot, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { UploadImg } from "./svg/UploadImg";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Message } from "./Message";
import { Close } from "./svg/Close";

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
    }   

    const metadata = {
        contentType: 'image/jpeg',
      };
    const sendMessage = async()=>{
        const message = text;
        setText("");
        try{
            if(img){
                
                const storageRef = ref(storage, uuidv4());
                const uploadTask = await uploadBytesResumable(storageRef,img,metadata);
    
                const downloadUrl = await getDownloadURL(uploadTask.ref);
    
                await updateDoc(doc(db,"chats",selectedMessage),{
                    messages:arrayUnion({
                        id: uuidv4(),
                        text:message,
                        senderId:userInfo.uid,
                        date:Timestamp.now(),
                        img:downloadUrl,
                    })
                })
    
            }else{
                await updateDoc(doc(db,"chats",selectedMessage),{
                    messages:arrayUnion({
                        id: uuidv4(),
                        text:message,
                        senderId:userInfo.uid,
                        date:Timestamp.now(),
                    })
                })
                await updateDoc(doc(db,"userChats",userInfo.uid),{
                    [selectedMessage + ".lastMessage"]:{
                        message
                    },
                    [selectedMessage+".date"]: serverTimestamp(),
                });
                if(selectedUser != undefined){
                    await updateDoc(doc(db,"userChats",selectedUser.uid),{
                        [selectedMessage + ".lastMessage"]:{
                            message
                        },
                        [selectedMessage+".date"]: serverTimestamp(),
                    });
                }
            }
        }catch(error){
            console.log(error);
        }finally{
            setImg(null);
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
    const refs = useRef<null | HTMLDivElement>(null);
    useEffect(()=>{
        refs.current?.scrollIntoView({behavior:"smooth"});
    },[messages])

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
                <div className="pt-16 h-[80%] overflow-y-auto">
                    {
                        messages.map((message:any)=>(
                            <div key={message.id} ref={refs}>
                                <Message message={message?.text} senderId={message.senderId} img={message?.img} date={message.date.seconds} />
                            </div>
                        ))
                    }
                </div>
                <div className="absolute bottom-0 w-[100%] h-[100px] bg-accent/10 pt-5 " >
                    <div className="flex absolute -mt-5 ml-5">
                        <p className=" font-light text-primaryText">{img?.name}</p>
                        {
                            img != null?(<>
                                <div className="hover:cursor-pointer" onClick={()=>setImg(null)}>
                                    <Close width={30} height={30} fill="#FF0000" />
                                </div>
                            </>):(<></>)
                        }

                    </div>
                    <div className="flex">
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
            </div>
        </>
    )
}