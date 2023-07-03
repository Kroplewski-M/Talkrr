

export const UserMessage = ()=>{

    return(
        <>
        <div className="flex pt-5 pl-5 w-[100%] h-[100px] hover:cursor-pointer hover:bg-primaryButton/10">
            <div className="w-[50px] h-[50px] rounded-full bg-black"></div>
            <div className="ml-[10px]">
                <p className="font-bold">Mateusz Kroplewski</p>
                <p className="text-primaryText">Hello how are you?</p>
            </div>
        </div>
            <hr className="opacity-[0.3] " />
        </>
    )
}