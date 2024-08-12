import LoggOut from "./Component/LoggOut";
import Loggin from "./Component/Loggin";
import { useState } from "react";



function App() {
  const [isLoggIn, setIsLoggIn] = useState(false)


const handleLogIn = () => {
    setIsLoggIn(true)
  }

const handleLogOut = () =>{
  setIsLoggIn(false);
}

return(
  <div className="container">
   {isLoggIn ? ( <Loggin onlogout={handleLogOut} />) : ( <LoggOut onlogin={handleLogIn}/>)}
  
  
  </div>
);   
}
export default App