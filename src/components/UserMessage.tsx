
interface UserMessageProps{
    name:string,
    photoUrl:string,
    message?:string,
}
export const UserMessage = ({message,photoUrl,name}:UserMessageProps)=>{

    return(
        <>
        <div className="flex pt-5 pl-5 w-[100%] h-[100px] hover:cursor-pointer hover:bg-primaryButton/10">
            <div className="w-[50px] h-[50px] rounded-full">
                <img src={photoUrl} alt="" className="w-[100%] h-[100%] rounded-full"/>
            </div> 
            <div className="ml-[10px]">
                <p className="font-bold">{name}</p>
                <p className="text-primaryText">{message?message:""}</p>
            </div>
        </div>
            <hr className="opacity-[0.3] " />
        </>
    )
}