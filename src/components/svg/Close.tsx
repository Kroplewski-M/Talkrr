interface CloseProps{
    width:number,
    height:number,
    fill:string,
}

export const Close = ({width,height,fill}: CloseProps)=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={fill}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
    )
}