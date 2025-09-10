import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Userlogin = () => {
   const navigate= useNavigate();
   const [formData, setFormData] =useState({
    username: "",
    password: "",
   });

   const [errors, setErrors] = useState("");

   const [login,setLogin] = useState(false)

   const handleChange =(e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value,
    });
    setErrors("");
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);

    if (!formData.username.trim() || !formData.password.trim()){
      
      setErrors("Username and Password is required!")
      setLogin(false);
      return;
    }
    
    axios .get("https://68c052250b196b9ce1c3ffe9.mockapi.io/users/users")
    .then((res) => {
      
      const users = res.data;
      const user = users.find(
        (u) => 
          u.username === formData.username && u.password === formData.password
        
      );

      if(user){
        setErrors("");
        setFormData({username: "", password: ""});
        navigate("/");
      }else{
        setErrors("Invalid username or Password");
      }
      setLogin(false);
    })
    .catch((err) => {
      console.log("Error fetching users:",err);
      setErrors("something went wrong! try again leter.");
   
   setLogin(false); });
   } ;

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-2">User Login</h2>
        <p className="text-gray-300 text-center mb-6">Sign up using Username and Password</p>

        {errors && <p className="text-sm text-red-500 text-center">{errors}</p>}
      <div className="mb-4">
        <label className="blcok mb-2 text-sm font-md">Username</label>
        <input 
        type="text"
        name="username"
        value={formData.username}
        placeholder="Enter your username"
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        onChange={handleChange}
         />

        <label className="blcok mb-2 text-sm font-md">Password</label>
        <input 
        type="text"
        name="password"
        value={formData.password}
        placeholder="Enter your Password"
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        onChange={handleChange}
         />
         <button className="w-full bg-green-500 text-white py-2 rounded-md font-semibold mt-4 hover:bg-blue-600 transition"
         disabled={login}>{login ? "Logging in..." : "Login"}</button>
         <p className=" mt-4 text-center text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Register here
          </span>
        </p>
        <button type="button" className="w-full border-gray-500 border-2 py-2 rounded-md font-semibold mt-4 hover:bg-blue-800 teansition-colors " onClick={() => navigate("/")}>Back to Home</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default Userlogin;