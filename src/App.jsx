import { useState } from "react";
import NotFound from "./Pages/NotFound";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import YtLinks from "./Components/YtLinks";
import Mobileprojects from "./Components/MobileProjects";
import Webprojects from "./Components/WebProjects";



const App =()=>{
  return(
       <div>

  { /* NavBar */}
     <NavBar />

<Webprojects />

   {/* Profile */}
     <Profile />

    {/* WebProject */}
     

     {/* Mobilerojects*/}
    <Mobileprojects />

    {/*  {Yt Links/Vid Ref} */}
     <YtLinks />

      </div>

  )

}
export default App