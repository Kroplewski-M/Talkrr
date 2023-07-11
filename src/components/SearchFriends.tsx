import { useState } from "react";
import { Close } from "./svg/Close"
import { usePopUpsInfo } from "../context/PopUps";
import { FriendRequest } from "./FriendRequest";
import { collection,doc,getDocs,query,setDoc,where,addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useUserInfo } from "../context/User";

interface SearchFriendsProps{
    closeSearch:()=>void,
}

export const SearchFriends = ({closeSearch}:SearchFriendsProps)=>{
    const {PushPopUp} = usePopUpsInfo();
    const [userEmail,setUserEmail] = useState('');
    const [searchView,setSearchView] = useState(true);
    const [loading,setLoading] = useState(false);
    const {userInfo} = useUserInfo();
    const Search =async()=>{
        try{
            //CHECK IF USER EXISTS
            const usersRef = collection(db,"users");
            const q = query(usersRef, where("email", "==", userEmail));
            const querySnapShot = await getDocs(q);
            if(querySnapShot.size > 0){
                // CHECK IF ALREADY SENT REQUEST
                const friendRequestRef = collection(db,"FriendRequests");
                const q = query(friendRequestRef, where("From", "==", userInfo.email), where("To","==",userEmail));
                const snapShot = await getDocs(q);
                if(snapShot.size >0){
                        PushPopUp('Request Already Sent!!','successPopUp');
                }else{
                    querySnapShot.forEach(()=>{
                        addDoc(collection(db, "FriendRequests"), {
                            From:userInfo.email,
                            To:userEmail,
                        });
                    })
                    PushPopUp('Sent Request','successPopUp');
                }
            }
        }catch(error){
            console.log(error);
        }
    }
    const handleKey = (e:any)=>{
        if(e.code === "Enter"){
            Search();
        }
    }
    return(
        <section className="z-50 absolute w-[100vw] h-[100vh] grid place-content-center backdrop-blur-md">
            <div className="w-[290px] md:w-[400px] h-[200px] bg-accent -mt-[200px] rounded-md relative overflow-y-scroll">
                <div className="w-[30px] h-[30px] absolute top-0 right-0 hover:cursor-pointer" onClick={closeSearch}>
                    <Close width={30} height={30} fill="#FFFFFF" />
                </div>
                <div className="w-[100px] absolute top-0 left-2 bg-background/70 text-center hover:cursor-pointer" onClick={()=> setSearchView(!searchView)}>
                    <p className="font-semibold">{searchView?('Requests'):('Search')}</p>
                </div>
                {
                    searchView?(<>
                    <div className="mt-10">
                        <h1 className="font-bold text-center mt-[10px] text-secondaryText text-[20px]">Search Friends</h1>
                        <div className="w-[80%] mx-auto mt-5 bg-background rounded-sm">
                            <input type="text" className="w-[100%] h-[30px] rounded-sm bg-primaryButton/30 pl-[5px] focus:outline-none font-semibold text-primaryText" placeholder="johnDoe@gmail.com" onKeyDown={handleKey} value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                        </div>
                        <div className="w-[120px] mx-auto mt-5" onClick={Search}>
                            <button disabled={loading} className="w-[100%] font-semibold bg-background rounded-sm">Send Request</button>
                        </div>
                    </div>
                    </>):(<>
                        <div className="mt-10">
                        <h1 className="font-bold text-center mt-[10px] text-secondaryText text-[20px]">Requests</h1>
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />

                        </div>
                    </>)
                }
            </div>
        </section>
    )
}