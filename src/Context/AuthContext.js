import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase";
import react from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthContext = react.createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const history = useHistory()
}