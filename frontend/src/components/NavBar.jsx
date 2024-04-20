import { useEffect, useState } from "react";
// import { useUserContext } from "../context/UserContext";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000';

export default function NavBar() {
    // const [ user, setUser ] = useState(null);

    // const fetchCurrentUser = async () => {
    //     try {
    //       // Replace with your actual backend call (FastAPI) to fetch current user
    //       const response = await axios.get('/auth/token'); // Assuming an endpoint for fetching current user
    //       const userData = response.data;
      
    //       if (userData) {
    //         setUser(userData);
    //       } else {
    //         setUser(null); // Set user to null if not found
    //       }
    //     } catch (error) {
    //       console.error('Error fetching current user:', error);
    //       // Handle errors appropriately (e.g., display error message)
    //     }
    //   };

    //   useEffect(() => {
    //     fetchCurrentUser();
    //   }, []); 

    //   console.log('user', user);

  return (
    <div className="bg-slate-300">
      NavBar
    </div>
  )
}
