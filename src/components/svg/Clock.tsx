
interface ClockProps{
    width:number,
    height:number,
    fill:string,
}
export const Clock = ({width,height,fill}:ClockProps)=>{

    return(
        <svg fill={fill} width={width} height={height} viewBox="-1.4 0 30 30" id="_22_-_Stopwatch" data-name="22 - Stopwatch" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_265" data-name="Path 265" d="M16,3.8A13.6,13.6,0,1,0,29.6,17.4,13.606,13.606,0,0,0,16,3.8Zm0,2A11.6,11.6,0,1,1,4.4,17.4,11.606,11.606,0,0,1,16,5.8Z" transform="translate(-2.4 -1)" fillRule="evenodd"></path> <path id="Path_266" data-name="Path 266" d="M19.1,3.4A2.4,2.4,0,0,0,16.7,1H15.3a2.4,2.4,0,0,0-2.4,2.4v0a2.4,2.4,0,0,0,2.4,2.4h1.4a2.4,2.4,0,0,0,2.4-2.4v0Zm-2,0v0a.4.4,0,0,1-.4.4H15.3a.4.4,0,0,1-.4-.4v0a.4.4,0,0,1,.4-.4h1.4A.4.4,0,0,1,17.1,3.4Z" transform="translate(-2.4 -1)" fillRule="evenodd"></path> <path id="Path_267" data-name="Path 267" d="M17,18.18V8.38a1,1,0,0,0-2,0v9.8a1,1,0,0,0,2,0Z" transform="translate(-2.4 -1)" fillRule="evenodd"></path> <path id="Path_268" data-name="Path 268" d="M16,19.18h5.6a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2Z" transform="translate(-2.4 -1)" fillRule="evenodd"></path> </g></svg>
    )
}