import Login from "../components/LogIn";
import SignUp from "../components/SignUp";


export default function Home() {
  return (
    <div className="bg-slate-400">
      <SignUp />
      <Login />
    </div>
  )
}
