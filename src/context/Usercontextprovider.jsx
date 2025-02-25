import React from "react";
import Usercontext from "./Usercontext";
const Usercontextprovider = ({children})=>{// this is a wrapper componenet that will provide values to its all child components,takes children as prop which represents compinents nested inside it
    const [user, setuser] = React.useState(null)
   return (
    <Usercontext.Provider value = {{user,setuser}}>  
        {children}
    </Usercontext.Provider>
   )
}//wraps children inside usercontext.providert making user and setuser available to all child components
export default Usercontextprovider//import the usercontext provider in app.jsx