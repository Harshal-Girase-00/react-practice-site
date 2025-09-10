import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Registre = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange =(e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors= {};

    if (!formData.fullname.trim()){
    newErrors.fullname = "Full Name is required!"
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is Required!"
    }
    else if(!formData.email.includes("@") || !formData.email.includes(".")){
      newErrors.email = "Email format is Invalid!"
    }

    if (!formData.password.trim()){
    newErrors.password = "password is required!"
    }

    if (!formData.confirmPassword.trim()){
    newErrors.confirmPassword = "confirmpassword  is required!"
    }
     else if (formData.password !== formData.confirmPassword){
    newErrors.confirmPassword = "confirm Password must be same."
    }

    if (!formData.username.trim()){
    newErrors.username = "Username is required!"
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){
      axios.post("https://68c052250b196b9ce1c3ffe9.mockapi.io/users/users",formData)
      .then((res) => {
        console.log("user saved: ",res.data);
        setFormData({ fullname: "", email: "", username: "", password: "", confirmPassword: "" });
      navigate("/user-login")
      })
      .catch((err) => {
        console.log("Error Saving User:", err)
      });
      
    }
  }

      

  return (
    <>
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Full Name</label>
          <input 
          type="text"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}/>
          {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}

          <label className="block mb-2 text-sm font-medium mt-1">Email</label>
          <input 
          type="email"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"/>
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label className="block mb-2 text-sm font-medium mt-1">Username</label>
          <input 
          type="text"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder=" Enter Username"
          name="username"
          value={formData.username}
          onChange={handleChange}/>
          {errors.username && <p className="text-red-500">{errors.username}</p>}

          <label className="block mb-2 text-sm font-medium mt-1">Password</label>
          <input 
          type="text"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}/>
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <label className="block mb-2 text-sm font-medium mt-1">Confirm Password</label>
          <input 
          type="text"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}/>
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
        </div>

     <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Register 
    </button>
    <button type="button" className="w-full border-gray-500 border-2 py-2 rounded-md font-semibold mt-4 hover:bg-blue-800 teansition-colors " onClick={() => navigate("/")}>Back to Home</button>
         </form>
           </div>

    </>
  )
}

export default Registre;



