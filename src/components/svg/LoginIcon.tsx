interface LoginIconProps{
    width: number,
    height:number,
    fill:string,
}

export const LoginIcon = ({width,height,fill}:LoginIconProps)=>{

    return(
        <>
            <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill={fill}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M16.89 1.2l1.41 1.41c.39.39.39 1.02 0 1.41L14 8.33V18H3V3h10.67l1.8-1.8c.4-.39 1.03-.4 1.42 0zm-5.66 8.48l5.37-5.36-1.42-1.42-5.36 5.37-.71 2.12z"></path> </g> </g></svg>
        </>
    )
}