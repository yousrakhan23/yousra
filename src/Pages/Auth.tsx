// // import { useState } from "react";
// // import Login from "./Login";
// // import Signup from "./Signup";

// // const Auth = () => {
// //   const [isLogin, setIsLogin] = useState(true); 

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
// //         <div className="flex justify-center space-x-4 mb-6">
// //           <button
// //             onClick={() => setIsLogin(true)}
// //             className={`py-2 px-4 rounded-lg ${
// //               isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
// //             }`}
// //           >
// //             Login
// //           </button>
// //           <button
// //             onClick={() => setIsLogin(false)}
// //             className={`py-2 px-4 rounded-lg ${
// //               !isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
// //             }`}
// //           >
// //             Signup
// //           </button>
// //         </div>

       
// //         {isLogin ? <Login /> : <Signup />}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Auth;

// import { useState } from "react";
// import Login from "../Pages/Login";
// import Signup from "../Pages/Signup";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true); 

//   const toggleForm = () => {
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         {isLogin ? <Login /> : <Signup />}

//         <button
//           onClick={toggleForm}
//           className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
//         >
//           {isLogin ? "Switch to Sign Up" : "Switch to Login"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Auth;
