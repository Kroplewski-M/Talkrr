

export const Profile = ()=>{
    return(
        <section className="fixed top-0 z-[50] w-[100vw] h-[100vh] backdrop-blur-md">
            <div className="w-[100%] h-[100%] grid place-content-center">
                <div className="w-[270px] pb-10 rounded-md bg-accent mx-auto mt-10 pt-10 relative">
                    <p className="font-bold absolute right-2 top-2">X</p>
                    <div className="w-[80px] h-[80px] rounded-full mx-auto bg-primaryText"></div>
                    <p className="font-bold text-[20px] text-center mt-6">Mateusz Kroplewski</p>
                    <p className="font-semibold text-[15px] text-center mt-3 ">Kroplewskimateusz@gmail.com</p>
                    <div className="w-[200px] h-[35px] mx-auto mt-10">
                        <button className="w-[100%] h-[100%] font-semibold border-solid border-signOutBtn border-2 rounded-md ">SignOut</button>
                    </div>
                </div>

            </div>
        </section>

    )
}