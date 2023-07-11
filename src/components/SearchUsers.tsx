import { useState } from "react"
import { Search } from "./svg/Search";

interface users{
    uid:string,
    displayName:string,
    photoUrl:string,
    email:string,
    firstName:string,
    lastName:string,
}
export const SearchUsers = ()=>{
    const [users,setUsers] = useState<users[]>([]);
    const [userName,setUserName] = useState('');

    const searchUsers = async()=>{

    }
    const handleKey = (e:any)=>{
        if(e.code === "Enter"){
            searchUsers();
        }
    }
    return(
        <div className="w-[100%] h-[50px] flex">
            <div className="w-[80%] ml-5 pt-[15px]">
                <input type="text" id="user" className="w-[100%] h-[30px] bg-black/10 focus:outline-none font-semibold pl-[5px] rounded-sm" placeholder="Search for user..." onKeyDown={handleKey} value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            </div>
            <div className="hover:cursor-pointer flex self-center ml-[10px]" onClick={()=> searchUsers}>
                <Search width={25} height={25} fill="#444444" />
            </div>
        </div>
    )
}