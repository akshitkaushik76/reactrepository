import React from "react";
import { useContext } from "react";
import Usercontext from "../context/Usercontext";
function Profile() {
    const {user} = useContext(Usercontext);
    if(!user) return <h1>please login</h1>
    return <div>{user.username}</div>

}
export default Profile;