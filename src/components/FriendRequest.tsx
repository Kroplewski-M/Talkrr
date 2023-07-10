import { Close } from "./svg/Close"
import { Tick } from "./svg/Tick"


export const FriendRequest = ()=>{

    return(
        <div className="w-[80%] h-[40px] bg-background/70 mx-auto mt-5 rounded-sm flex">
            <div className="min-w-[30px] min-h-[30px] bg-black rounded-full flex self-center ml-5"></div>
            <p className="flex self-center ml-5 font-semibold leading-[1rem]">Mateusz Kroplewski</p>
                <div className="grow flex flex-row-reverse">
                    <div className="hover:cursor-pointer">
                        <Close width={30} height={30} fill={'#FF3333'} />
                    </div>
                    <div className="hover:cursor-pointer">
                        <Tick width={30} height={30} fill={'#22FF22'} />
                    </div>
                </div>
        </div>
    )
}