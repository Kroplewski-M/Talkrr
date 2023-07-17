

interface ChatUserProps{
    back:()=>void,
}
export const ChatUser=({back}:ChatUserProps)=>{

    return(
        <>
            <div className="w-[100%] h-[100%] relative">
                <div onClick={back} className="w-[50px] h-[50px]">&larr;</div>
                <div>
                    <p>messages</p>
                </div>
                <div className="absolute bottom-0 w-[100%] h-[100px] bg-accent/10 flex pt-5" >
                    <input type="text" className="w-[80%] h-[40px] pl-5 bg-black/0 focus:outline-none text-primaryText font-semibold" placeholder="Type something..."/>
                    <div className="mr-5 w-[100px] h-[35px]">
                        <button className="w-[100%] h-[100%] bg-accent font-semibold">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}