import { useEffect, useState } from "react";
import { ChatList } from "../components/ChatList"
import { ChatUser } from "../components/ChatUser"
import { useMessagesInfo } from "../context/Messages"
export const Messages = ()=>{
    const {selectedMessage,selectMessage,setSelectedUserMessages} = useMessagesInfo();
    const [showMessages,setShowMessages] = useState(false);
    const [windowSize, setWindowSize] = useState<number>(getWindowSize());
    const mobileLimit:number = 768;


      //SET FILTER DISPLAY DEPENDING ON SCREEN SIZE
      function getWindowSize() {
        const innerWidth:number = window.innerWidth;
        return innerWidth;
      }
      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      useEffect(() =>{
        if(windowSize >= mobileLimit){
            setShowMessages(true);
        }
        if(windowSize < mobileLimit){
            setShowMessages(false);
        }
    },[windowSize]);

        useEffect(()=>{
            if(selectedMessage !=""){
                setShowMessages(true);
                setSelectedUserMessages(undefined);
            }
        },[selectedMessage])
    
    const goBack = ()=>{
        setShowMessages(false);
    }
    return(
        <section className="w-[100vw] h-[100vh] flex">
            <div className={`${showMessages && windowSize < mobileLimit?("hidden"):("inline")}`}>
                <ChatList showMessage={()=>setShowMessages(true)}/>
            </div>
            <div className={`w-[100%] bg-accent/10 ${showMessages?("inline"):("hidden")}`}>
                <div className={`w-[100%] h-[100%] ${selectedMessage==""?("grid place-content-center"):("")} `}>
                    {
                        selectedMessage == ""?(<p className="font-semibold text-primaryText/50 text-[25px]">Choose a chat to get started!</p>):(<ChatUser back={goBack}/>)
                    }
                </div>
            </div>
        </section>
    )
}