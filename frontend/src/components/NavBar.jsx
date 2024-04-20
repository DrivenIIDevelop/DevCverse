import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000';

export default function NavBar() {
    
    const { user } = useUserContext();
    console.log('user in NavBar: ', user);

  return (
    <div className="bg-slate-300">
      NavBar
    </div>
  )
}
