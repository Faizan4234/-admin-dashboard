// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './login/logins';
// import SignUp from './signUp/signUps';
// import App from '../App';

// const Starter = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const alertMessage = "Incorrect Password";

//   const handleLogin = (password) => {
//     // Simple authentication logic
//     if (password === "faizan") {
//       setIsAuthenticated(true);
//     }else{
//       alert(alertMessage);
//     };
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={isAuthenticated ? <Navigate to="/app" /> : <Navigate to="/login" />} />
//         <Route path="/Login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/Signup" element={<SignUp />} />
//         <Route path="/App" element={isAuthenticated ? <App /> : <Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Starter;
