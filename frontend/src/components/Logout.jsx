
import { useUserContext } from '../context/UserContext'

export default function Logout() {
    const { userLogout } = useUserContext();

    function handleLogout() {
        userLogout();
    }   

  return (
    <div>
      
    </div>
  )
}
