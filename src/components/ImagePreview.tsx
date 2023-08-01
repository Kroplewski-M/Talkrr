import { Close } from "./svg/Close"

interface ImagePreviewProps{
    ImgUrl?:string,
    close:()=>void,
}

export const ImagePreview = ({ImgUrl,close}:ImagePreviewProps)=>{

    return(
        <div className="fixed top-0 left-0 z-[100] w-[100vw] h-[100%] backdrop-blur-md grid place-content-center">
            <div className="flex">

                <img src={ImgUrl} alt="" className="w-[80%] h-[250px] md:w-[500px] md:h-[500px]"/>
                <div className="md:-mt-16 -mt-10 hover:cursor-pointer" onClick={close}>
                    <Close width={50} height={50} fill="#FF0000" />
                </div>
            </div>
        </div>
    )
}