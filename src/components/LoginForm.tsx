
export const LoginForm = ()=>{

    return(
        <section className="relative z-50">
            <form className="w-[250px] h-[300px] mx-auto mt-10  grid place-content-center rounded-sm">
                <label htmlFor="email" className="block font-semibold text-primaryText/70 text-[25px]">Email:</label>
                <input type="email" name="email" id="email" placeholder="JohnDoe@gmail.com" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>

                <label htmlFor="password" className="block font-semibold text-primaryText/70 text-[25px]">Password:</label>
                <input type="password" name="password" id="password" placeholder="Password" className="bg-accent/0 font-semibold border-b-accent border-b-2 w-[200px] focus:outline-0 text-[20px] h-[40px]"/>

                <button type="submit" className="block w-[170px] h-[40px] font-semibold border-primaryText border-dashed border-2 relative z-50 mt-10 hover:font-bold hover:text-primaryText/80 hover:shadow-xl">Login</button>
            </form>
        </section>
    )
}