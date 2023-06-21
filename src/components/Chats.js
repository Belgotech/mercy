import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase";
import { Img } from "../Asset/Pink Dark Blue Modern Elegant Letter B Logo (1).png";


const Chats = () =>{
    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    <img src={Img} alt="logo" />
                </div>

                <div className="log-out">
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Chats