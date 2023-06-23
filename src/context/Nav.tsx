

export const Nav = ()=>{

    return(
        <>
            <nav className="w-[100wv] h-[50px] bg-navBg flex">
               <h1 className="text-logo font-bold text-[24px] flex self-center ml-5">Talkrr</h1> 
               <div className="flex flex-row-reverse w-[100%]">
                <p className="flex self-center mr-5 font-bold text-secondaryText hover:cursor-pointer">Login/Register</p>
               </div>
            </nav>
        </>
    )
}