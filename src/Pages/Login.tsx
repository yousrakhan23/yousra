const Login = () => {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md bg-black rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-center text-fuchsia-700 mb-6">Login</h1>
            <div className="space-y-4">
              {/* <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /> */}
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="w-full bg-orange-600 hover:border-l-indigo-900 text-red-600 font-semibold py-2 px-4 rounded-lg mt-5 transition duration-500">Continue</button>
            {/* <p className="text-sm text-yellow-700 text-center mt-5">Already have an account? <span className=" text-blue-700 hover:underline cursor-pointer ">Login here</span> </p> */}
            <div className="flex items-center space-x-7 mt-6">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
              <p className="text-sm text-gray-600 ">By continuing you agree to our terms and conditions</p>
            </div>
          </div>
        </div>
  
  
      </>
    );
  }
  
  export default Login;