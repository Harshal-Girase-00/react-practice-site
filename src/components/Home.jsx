import { useNavigate } from "react-router-dom";
const Home=() => {
  const navigate = useNavigate();
  return(
    <>
    <nav className='bg-gray-800 p-4'>
        <div className='flex justify-around items-center text-white'>
          
         <a href='/'>Home</a>
         <a href='/admin-login'>Admin Login</a>
         <a href='/user-login'>User Login</a>
         <a href='/register'>Register</a>
        </div>
      </nav>
      <div className="relative w-full">
        <img src="https://picsum.photos/1200/500"
        alt="Hero"
        className="w-full h-[70vh] object-cover"/>

        <div className="absolute inset-0 flex items-center justify-left ml-2">
        <button  type="button" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 " onClick={()=> navigate("/register")} >User Registeer here</button></div>
      </div>

      <div className="w-full   mt-4 ">
        <h1 className="block  text-center text-gray-500 font-semibold text-6xl">About us</h1>
         <ul className="text-black font-serif text-2xl mt-4 ml-6 list-disc space-y-4">
    <li>
      This is a practice website where I experimented with Axios to perform both POST and GET requests from APIs. 
      For this, I created two different mock APIs on MockAPI.io – one for users and one for admins.
    </li>
    <li>
      In this project, I also installed and used Tailwind CSS. From my personal experience, I realized something important:
      beginners often make the mistake of skipping normal CSS and jumping directly into Tailwind or other frameworks.
      But without a strong foundation in basic CSS, it becomes harder to fully enjoy and understand advanced tools.
    </li>
    <li>
      Additionally, in this website I practiced using React Router (latest routing setup) and explored navigation using
      the useNavigate() hook to redirect between pages.
    </li>
  </ul>
  </div>
    </>
  )
}

export default Home;