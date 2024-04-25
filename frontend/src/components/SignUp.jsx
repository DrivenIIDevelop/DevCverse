import { useState } from "react";
import { useUserContext } from "../context/UserContext";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [skin_type, setSkinType] = useState("");
  const [error, setError] = useState(null);
  const { userSignUp } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const userData = {
      username,
      password,
      first_name,
      last_name,
      age,
      skin_type,
    };
    

    userSignUp( userData );
    // if (signUpSuccess) {
    //   setUserName("");
    //   setPassword("");
    //   setFirstName("");
    //   setLastName("");
    //   setAge("");  // Reset age
    //   setSkinType("");  // Reset skin type
    // } else {
    //   setError("Failed to create account. Please check your details.");
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="email"
        value={username}
        placeholder="User email"
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="User password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        value={first_name}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={last_name}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <select value={age} onChange={(e) => setAge(e.target.value)} required>
        <option value="">Select Age Range</option>
        <option value="Below 18">Below 18</option>
        <option value="18-25">18-25</option>
        <option value="26-35">26-35</option>
        <option value="36-50">36-50</option>
        <option value="Above 50">Above 50</option>
      </select>
      <select value={skin_type} onChange={(e) => setSkinType(e.target.value)} required>
        <option value="">Select Skin Type</option>
        <option value="oily">Oily</option>
        <option value="dry">Dry</option>
        <option value="normal">Normal</option>
        <option value="combination">Combination</option>
        <option value="sensitive">Sensitive</option>
        <option value="uncertain">Uncertain</option>
        <option value="mature">Mature</option>
        <option value="acne">Acne</option>
      </select>
      <button type="submit">Signup</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
