

export const RegisterForm = ()=>{
    return(
        <section className="relative z-50">
            <form className="w-[250px] md:w-[500px] mx-auto mt-10  grid place-content-center rounded-sm">
                <div className="flex md:flex-row flex-col mb-5">
                    <label htmlFor="ProfileImage" className="inline font-semibold text-primaryText/70 text-[25px]">Profile Image:</label>
                    <input type="file" name="ProfileImage" id="ProfileImage" className="md:ml-5 md:mt-[5px]" />
                </div>
                <div className="md:flex md:flex-wrap">
                    <div className="md:mr-5">
                        <label htmlFor="FirstName" className="block font-semibold text-primaryText/70 text-[25px]">First Name:</label>
                        <input type="text" name="FirstName" id="FirstName" placeholder="John" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>
                    </div>
                    <div>
                        <label htmlFor="LastName" className="block font-semibold text-primaryText/70 text-[25px]">Last Name:</label>
                        <input type="text" name="LastName" id="LastName" placeholder="Doe" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>
                    </div>
                    <div className="md:mr-5">
                        <label htmlFor="email" className="block font-semibold text-primaryText/70 text-[25px]">Email:</label>
                        <input type="email" name="email" id="email" placeholder="JohnDoe@gmail.com" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-semibold text-primaryText/70 text-[25px]">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-accent/0 font-semibold border-b-accent border-b-2 w-[200px] focus:outline-0 text-[20px] h-[40px] mb-5"/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block font-semibold text-primaryText/70 text-[25px]">Confirm Password:</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="bg-accent/0 font-semibold border-b-accent border-b-2 w-[200px] focus:outline-0 text-[20px] h-[40px]"/>
                    </div>
                </div>




                <button type="submit" className="block w-[170px] h-[40px] font-semibold border-primaryText border-dashed border-2 relative z-50 mt-10 hover:font-bold hover:text-primaryText/80 hover:shadow-xl">Register</button>
            </form>
        </section>
    )
}