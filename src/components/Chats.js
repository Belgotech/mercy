import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase";
// import Img from "../Asset/Pink Dark Blue Modern Elegant Letter B Logo (1).png";


const Chats = () =>{

    const history = useHistory()

    const handleLogOut = async () =>{
        await auth.signOut()

        history.push('/')
    }

    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    {/* <img src={Img} alt="logo" /> */}
                    MercyChat
                </div>

                <div onClick={handleLogOut} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine 
                height="cal(100vh - 66px)"
                projectId="54fffeb1-767b-439b-a46b-89ca4eea370a"
                userName="."
                userSecret="."
            />
        </div>
    )
}

export default Chats