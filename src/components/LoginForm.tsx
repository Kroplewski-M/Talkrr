

export const LoginForm = ()=>{

    return(
        <>
            <form className="w-[250px] mx-auto mt-10">
                <label htmlFor="email" className="block font-semibold text-primaryText/70">Email:</label>
                <input type="email" name="email" id="email" placeholder="JohnDoe@gmail.com" className="mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText"/>

                <label htmlFor="password" className="block font-semibold text-primaryText/70">Password:</label>
                <input type="password" name="password" id="password" placeholder="Password" className="border-b-accent border-b-2 w-[200px] focus:outline-0 "/>

                <button type="submit" className="block w-[150px] h-[35px] font-semibold border-primaryText border-dashed border-2 relative z-50 mt-10">Login</button>
            </form>

        </>
    )
}