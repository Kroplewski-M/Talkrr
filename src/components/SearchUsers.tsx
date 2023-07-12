import { useEffect, useState } from "react"
import { Search } from "./svg/Search";
import { collection,getDocs,or,query,where } from "firebase/firestore";
import { db } from "../firebase";
import { useUserInfo } from "../context/User";
interface users{
    uid:string,
    displayName:string,
    photoUrl:string,
    email:string,
    firstName:string,
    lastName:string,
}
interface SearchUsersPros{
    setIsSearching: (e:boolean)=>void,
}
export const SearchUsers = ({setIsSearching}:SearchUsersPros)=>{
    const {userInfo} = useUserInfo();
    const [users,setUsers] = useState<users[]>([]);
    const [userName,setUserName] = useState('');
    const [noResults,setNoResults] = useState(false);

    useEffect(()=>{
        if(userName ==""){
            setIsSearching(false);
            setNoResults(false);
        }
        setUsers([]);
    },[userName])

    const setSearchValue = (e:any)=>{
        setUserName(e.target.value)
    }
    const searchUsers = async()=>{
        setIsSearching(true);
        try{
            const usersRef = collection(db,"users");
            const q = query(usersRef,or(where("displayName","==",userName),where("email","==",userName)),);
            const querySnapshot = await getDocs(q);
            if(querySnapshot.size == 0){
                setNoResults(true);
            }else{
                setNoResults(false);
            }
            querySnapshot.forEach((doc)=>{
                const user:users = {
                    uid:doc.data().uid,
                    displayName:doc.data().displayName,
                    email:doc.data().email,
                    firstName:doc.data().firstName,
                    lastName:doc.data().lastName,
                    photoUrl:doc.data().photoUrl,
                }
                if(user.uid != userInfo.uid){
                    setUsers(currUsers=>[...currUsers,user]);
                }
            });

            console.log(users);
        }catch(error){
            console.log(error);
        }
    }
    const handleKey = (e:any)=>{
        if(e.code === "Enter"){
            searchUsers();
        }
    }
    return(
        <div className="w-[100%] h-[50px] flex relative">
            <div className="w-[80%] ml-5 pt-[15px]">
                <input type="text" id="user" className="w-[100%] h-[30px] bg-black/10 focus:outline-none font-semibold pl-[5px] rounded-sm" placeholder="Search for user..." onKeyDown={handleKey} value={userName} onChange={setSearchValue}/>
            </div>
            <div className="hover:cursor-pointer flex self-center ml-[10px]" onClick={searchUsers}>
                <Search width={25} height={25} fill="#444444" />
            </div>
                {
                    users.length>0?(<>
                        <div className="absolute w-[100%] mt-16 z-50 h-[100vh]">
                        <p className="font-semibold pl-5 pt-5 mb-5">Results:</p>
                        {
                            users.map(user=>(
                                <div className="w-[100%] h-[70px] bg-black/10 mb-[5px] flex z-50 hover:cursor-pointer hover:bg-black/40 rounded-sm" key={user.uid}>
                                    <img src={user.photoUrl} alt="" className="w-[40px] h-[40px] rounded-full flex self-center ml-5" />
                                    <p className="ml-5 flex self-center font-bold">{user.displayName}</p>
                                    <hr />
                                </div>
                            ))
                        }
                        </div>
                    
                    </>):(<></>)
                }
                        
                {noResults?<p className="absolute mt-16 ml-5 font-bold text-errorPopUp/90">No Users Found!</p>:<></> }

        </div>
    )
}