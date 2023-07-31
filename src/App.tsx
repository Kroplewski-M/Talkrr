import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Messages } from "./pages/Messages";
import Authguard from "./components/AuthGuard";
import { usePopUpsInfo } from "./context/PopUps";
import { MessagesContext } from "./context/Messages";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserInfo } from "./context/User";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const {PopUps} = usePopUpsInfo();
  const {loginUser} = useUserInfo();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loginUser({
          uid:user.uid,
          displayName:user.displayName!=null?user.displayName:"",
          email:user.email!=null?user.email:"",
          photoUrl: user.photoURL!=null?user.photoURL:"",
      });
      navigate('/messages');
      } 
    });

  },[])
  return (
    <main className="min-h-100vh">
        <Nav />
        <div className="w-[100vw] fixed top-[50px] z-[100] flex flex-col">
          {
            PopUps.map((popUp,index)=>(
              <div className={`w-[300px] h-[50px] mt-[10px] mx-auto bg-${popUp.bgColor} rounded-md grid place-content-center`} key={index}>
                <p className="font-bold text-gray-200 text-center">{popUp.message}</p>
              </div>
            ))
          }
        </div>
        <MessagesContext>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authguard />}>
                <Route path="/messages" element={<Messages />} />
            </Route>
        </Routes>
        </MessagesContext>
      <Footer />
    </main>
  )
}

export default App;
