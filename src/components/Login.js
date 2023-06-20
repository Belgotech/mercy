import  React  from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "../Firebase";
import { fireEvent } from "@testing-library/react";
import firebase from "firebase/app";

const Login = () =>{
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to MercyChat</h2>

                <div 
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.apps.GoogleAuthProvider())}
                    
                >
                    <GoogleOutlined /> Sign in with Google
                </div>
                
                <br /> <br />

                <div 
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.apps.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign in with Facebook 
                    
                </div>
            </div>
        </div>
    )
}

export default Login