import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react";

type Inputs = {
    FirstName:string,
    LastName:string,
    Email:string,
    Password:string,
    ProfileImg: File,
}

export const RegisterForm = ()=>{
    window.scrollTo(0, 0);
    const {register,handleSubmit,formState: { errors },} = useForm<Inputs>();
    const [profileIcon, setProfileIcon] = useState<File>();
    const [loading,setLoading] = useState(false);

    const changeFile = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files){
            setProfileIcon(e.target.files[0]);
        }
    }
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setLoading(true);
        try{

        }catch(error){

        }finally{
            setLoading(false);
        }
    }

    return(
        <section className="relative z-50">
            <form className="w-[250px] md:w-[500px] mx-auto mt-10  grid place-content-center rounded-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex md:flex-row flex-col mb-5">
                    <label htmlFor="ProfileImg" className="inline font-semibold text-primaryText/70 text-[20px]">Profile Image:</label>
                    <input type="file" accept="image/png, image/jpeg" {...register("ProfileImg",{
                        required:'Required'})} id="ProfileImg" onChange={(e) => changeFile(e)} className="md:ml-5 md:mt-[5px]" />
                </div>
                    <p className="font-light text-signOutBtn -mt-5">{errors.ProfileImg?.message}</p>
                <div className="md:flex md:flex-wrap">
                    <div className="md:mr-5">
                        <label htmlFor="FirstName" className="block font-semibold text-primaryText/70 text-[25px]">First Name:</label>
                        <input type="text" id="FirstName" {...register("FirstName",{
                            required:'Required'})} placeholder="John" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>
                            <p className="font-light text-signOutBtn -mt-5">{errors.FirstName?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="LastName" className="block font-semibold text-primaryText/70 text-[25px]">Last Name:</label>
                        <input type="text" {...register("LastName",{
                            required:'Required'})} id="LastName" placeholder="Doe" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>
                            <p className="font-light text-signOutBtn -mt-5">{errors.LastName?.message}</p>

                    </div>
                    <div className="md:mr-5">
                        <label htmlFor="email" className="block font-semibold text-primaryText/70 text-[25px]">Email:</label>
                        <input type="email" {...register("Email",{
                            required:'Required'})} id="email" placeholder="JohnDoe@gmail.com" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>
                            <p className="font-light text-signOutBtn -mt-5">{errors.Email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-semibold text-primaryText/70 text-[25px]">Password:</label>
                        <input type="password" {...register("Password",{
                            required:'Required',
                            minLength:{
                                value:6,
                                message:'Min characters:6'
                            }})} id="password" placeholder="Password" className="bg-accent/0 font-semibold border-b-accent border-b-2 w-[200px] focus:outline-0 text-[20px] h-[40px] mb-5"/>
                            <p className="font-light text-signOutBtn -mt-5">{errors.Password?.message}</p>

                    </div>
                </div>
                <button type="submit" className="block w-[170px] h-[40px] font-semibold border-primaryText border-dashed border-2 relative z-50 mt-10 hover:font-bold hover:text-primaryText/80 hover:shadow-xl" disabled={loading}>Register</button>
            </form>
        </section>
    )
}