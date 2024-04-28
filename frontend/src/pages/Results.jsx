import { useUserContext } from "../context/UserContext";

export default function Results() {
  const { user } = useUserContext();
  console.log("user in results page: ", user);
  return (
    <div className="px-16">
      <div>
        <h1>Great News {user.first_name}! Here are</h1>
        <h1>your results:</h1>
      </div>
    </div>
  );
}
