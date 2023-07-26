import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { useUserInfo } from "./User";
import {onSnapshot,doc} from "firebase/firestore";
import { db } from "../firebase";


interface selectedUserProps{
    displayName:string,
    photoUrl:string,
    uid:string,
}
interface MessagesProvider{
    messages:object|undefined,
    selectedUser:selectedUserProps|null,
    setSelectedUserMessages:(selectedUser:selectedUserProps)=>void,
    unselectUserMessage:()=>void,
    selectedMessage:string,
    unselectMessage:()=>void
    selectMessage:(id:string)=>void,
}
interface MessagesProviderProps{
    children:ReactNode,
}
const MessagesProvider = createContext({} as MessagesProvider);

export const useMessagesInfo = ()=>{
    return useContext(MessagesProvider);
}

export const MessagesContext = ({children}:MessagesProviderProps)=>{
    const [messages,setMessages] = useState<object|undefined>({});
    const [selectedMessage,setSelectedMessage] = useState<string>("");
    const [selectedUser,setSelectedUser] = useState<selectedUserProps|null>(null);

    const {userInfo} = useUserInfo();

    useEffect(()=>{
        if(userInfo.uid!=""){
            const unsub = onSnapshot(doc(db,"userChats",userInfo.uid), (doc)=>{
                setMessages(doc.data());
            });
            return ()=>{
                unsub();
            }
        }
    },[userInfo.uid])

    const unselectMessage = ()=>{ 
        setSelectedMessage("");
    }
    const selectMessage = (id:string)=>{
        setSelectedMessage(id);
    }
    const setSelectedUserMessages=(selectedUser:selectedUserProps)=>{
        setSelectedUser(selectedUser);
    }
    const unselectUserMessage=()=>{
        setSelectedUser(null);
    }
    return <MessagesProvider.Provider value={{messages,selectedMessage,unselectMessage,selectMessage,selectedUser,setSelectedUserMessages,unselectUserMessage}} >
        {children}
    </MessagesProvider.Provider>
}
