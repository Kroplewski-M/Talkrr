import { useState } from "react";
import { usePopUpsInfo } from "../context/PopUps";
import { SubmitHandler, useForm } from "react-hook-form"


type Inputs = {
    email:string,
    password:string,
}

export const LoginForm = ()=>{
    window.scrollTo(0, 0);
    const {register,handleSubmit,formState: { errors },} = useForm<Inputs>();
    const {PushPopUp} = usePopUpsInfo();
    const [loading,setLoading] = useState(false);



    const onSubmit:SubmitHandler<Inputs> = async(data)=>{
        PushPopUp("loggin in","defaultPopUp");
        console.log(data);
    }
    return(
        <section className="relative z-50">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[250px] h-[300px] mx-auto mt-10  grid place-content-center rounded-sm">
                <label htmlFor="email" className="block font-semibold text-primaryText/70 text-[25px]">Email:</label>
                <input type="email" {...register('email',{required:"Required"})} id="email" placeholder="JohnDoe@gmail.com" className="bg-accent/0 mb-5 border-b-accent border-b-2 w-[200px] focus:outline-0 font-semibold text-primaryText text-[20px] h-[40px]"/>
                <p className="font-light text-signOutBtn -mt-[15px]">{errors.email?.message}</p> 

                <label htmlFor="password" className="block font-semibold text-primaryText/70 text-[25px]">Password:</label>
                <input type="password" {...register('password',{required:"Required"})} id="password" placeholder="Password" className="bg-accent/0 font-semibold border-b-accent border-b-2 w-[200px] focus:outline-0 text-[20px] h-[40px]"/>
                <p className="font-light text-signOutBtn mt-[5px]">{errors.password?.message}</p>
                <button type="submit" disabled={loading} className="block w-[170px] h-[40px] font-semibold border-primaryText border-dashed border-2 relative z-50 mt-10 hover:font-bold hover:text-primaryText/80 hover:shadow-xl">Login</button>
            </form>
        </section>
    )
}