import Login from "../components/LogIn";
import Signup from "../components/SignUp";


export default function Home() {
  return (
    <div className="bg-slate-400">
      <Signup />
      <Login />
    </div>
  )
}
