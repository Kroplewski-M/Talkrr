import { createContext, ReactNode, useContext,useEffect,useState } from "react";

interface PopUpsProvider{
    PopUps:PopUp[],
    PushPopUp:(message:string,bgColor:string)=>void,
}
interface PopUp{
    message:string,
    bgColor:string,
}

interface PopUpsProviderProps{
    children: ReactNode,
}

const PopUpsProvider = createContext({} as PopUpsProvider);

export const usePopUpsInfo= ()=>{
    return useContext(PopUpsProvider);
}

export const PopUpsContext = ({children}:PopUpsProviderProps)=>{
    const [PopUps,setPopUps] = useState<PopUp[]>([]);

    const [size,setSize] = useState(0);

    useEffect(()=>{
        while(PopUps.length != 0){
            const interval = setInterval(() => {
                RemoveFirstElement();
            }, 500);
            return () => clearInterval(interval);
        }
    },[size])

    const PushPopUp = (message:string,bgColor:string)=>{
        setSize(size + 1);
        setPopUps(prevState=>[...prevState,{message,bgColor}]);
    }
    const RemoveFirstElement = ()=>{
        setSize(size - 1);
        setPopUps(PopUps.slice(0,-1));
    }
    return(
        <PopUpsProvider.Provider value={{PopUps,PushPopUp}}>
            {children}
        </PopUpsProvider.Provider>

    )
}