import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react";
import { UploadImg } from "./svg/UploadImg";
import { auth,db,storage } from "../firebase";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import {doc,setDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../context/User";
import { usePopUpsInfo } from "../context/PopUps";

type Inputs = {
    FirstName:string,
    LastName:string,
    Email:string,
    Password:string,
    ProfileImg: File,
}

export const RegisterForm = ()=>{
    window.scrollTo(0, 0);
    const {loginUser} = useUserInfo();
    const {PushPopUp} = usePopUpsInfo();
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors },} = useForm<Inputs>();
    const [profileIcon, setProfileIcon] = useState<ArrayBuffer>();
    const [imgName,setImgName] = useState('');
    const [loading,setLoading] = useState(false);

    const changeFile = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files){
            e.target.files[0]?.arrayBuffer().then((res)=>setProfileIcon(res));
            // setProfileIcon(e.target.files[0])
            setImgName(e.target.files[0].name);
        }
    }
     const onSubmit: SubmitHandler<Inputs> = async(data) => {
        setLoading(true);
        try{
            PushPopUp('Creating account...', 'defaultPopUp');
            //CREATE USER ACCOUNT
            const user = await createUserWithEmailAndPassword(auth,data.Email,data.Password);
            const storageRef = ref(storage,`${data.Email}`);
            //UPLOAD IMAGE
            const metadata = {
                contentType: 'image/jpeg',
              };
            if(profileIcon != undefined){
                const uploadSnapshot = await uploadBytesResumable(storageRef, profileIcon,metadata);
                const downloadUrl = await getDownloadURL(uploadSnapshot.ref);
    
                await updateProfile(user.user, {
                    displayName: `${data.FirstName} ${data.LastName}`,
                    photoURL: downloadUrl,
                });
    
                await setDoc(doc(db, "users", user.user.uid), {
                    uid: user.user.uid,
                    displayName: `${data.FirstName} ${data.LastName}`,
                    firstName: data.FirstName,
                    lastName: data.LastName,
                    email: data.Email,
                    photoUrl: downloadUrl,
                });
                await setDoc(doc(db,"userChats",user.user.uid),{});
                await setDoc(doc(db,"userFriends",user.user.uid),{});
                
                PushPopUp('Account Created!', 'successPopUp');
                loginUser({uid:user.user.uid,displayName:`${data.FirstName} ${data.LastName}`,email:data.Email,photoUrl:downloadUrl});
                navigate('/messages');
            }

        }catch(error){
            PushPopUp('Error Occured...', 'errorPopUp');
        }finally{
            setLoading(false);
        }

    }


    return(
        <section className="relative z-50">
            <form className="w-[250px] md:w-[500px] mx-auto mt-10  grid place-content-center rounded-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex md:flex-row flex-col mb-5">
                    <label htmlFor="ProfileImg" className="inline font-semibold text-primaryText/70 text-[20px] flex">Profile Image:
                        <div className="hover:cursor-pointer ml-5 -mt-[10px]">
                            <UploadImg width={50} height={50} fill="#46ddb5" />
                        </div>
                        <p className="text-[10px]">{(imgName).slice(0,20)}</p>
                    </label>
                    <input type="file" accept="image/png, image/jpeg" {...register("ProfileImg",{
                        required:'Required'})} id="ProfileImg" onChange={(e) => changeFile(e)} className="md:ml-5 md:mt-[5px] hidden" />
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