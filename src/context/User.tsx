import { createContext, ReactNode, useContext, useState } from "react";

interface userProps{
    uid:string,
    email:string,
    photoUrl:string,
    displayName:string,
}
interface UserProvider {
    userInfo:userProps,
    loginUser: (info: userProps )=>void,
    logoutUser: ()=> void,
}
interface userProviderProps{
    children: ReactNode,
}
const UserProvider = createContext({} as UserProvider);

export const useUserInfo = ()=>{
    return useContext(UserProvider);
}
export const UserContext = ({children}: userProviderProps)=>{
    const [userInfo,setUserInfo] = useState<userProps>({uid:'',email:'',photoUrl:'',displayName:''});

    const loginUser = (info:userProps)=>{
        setUserInfo({
            uid:info.uid,
            email:info.email,
            photoUrl:info.photoUrl,
            displayName:info.displayName,
        })
    }
    const logoutUser = ()=>{
        setUserInfo({uid:'',email:'',photoUrl:'',displayName:''});
    }

    return  <UserProvider.Provider value={{loginUser,logoutUser,userInfo}}>
                {children}
            </UserProvider.Provider>
}