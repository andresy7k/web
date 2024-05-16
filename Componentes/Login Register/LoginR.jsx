
// import React, { useState } from 'react';
// import './LoginR.css';
// import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

// const LoginRegister = () => {
//     const [action, setAction] = useState('');

//     const registerLink = () => {
//         setAction('active');
//      }
    
//     const loginLink = () => {
//         setAction('');
//     }

//     return (
//         <div className={`wrapper ${action}`}>
//             <div className="form-box login"> 
//                 <form action="">
//                     <h1>Login</h1>
//                     <div className="input-box">
//                         <input type="text" 
//                         placeholder='Username' required />
//                         <FaUser className='icon' />
//                     </div>
//                     <div className="input-box">
//                         <input type="password" 
//                         placeholder='Password' required />
//                         <FaLock className='icon' />
//                     </div>

//                     <div className="remember-forgot">
//                         <label><input type="checkbox" />Remember me</label>
//                         <a href="0"> Forgot Password?</a>
//                     </div>

//                     <button type="submit">Login</button>

//                     <div className="register-link">
//                         <p>Don't have an account? <a href="#" onClick={registerLink}> Register</a></p>
//                     </div>
//                 </form>
//             </div>

//             <div className="form-box register"> 
//                 <form action="">
//                     <h1>Registration</h1>
//                     <div className="input-box">
//                         <input type="text" 
//                         placeholder='Username' required />
//                         <FaUser className='icon' />
//                     </div>
//                     <div className="input-box">
//                         <input type="email" 
//                         placeholder='Email' required />
//                         <FaEnvelope  className='icon' />
//                     </div>
//                     <div className="input-box">
//                         <input type="password" 
//                         placeholder='Password' required />
//                         <FaLock className='icon' />
//                     </div>

// //                     <div className="remember-forgot">
// //                         <label><input type="checkbox" />I agree to the terms & conditions</label>
// //                     </div>

// //                     <button type="submit">Register</button>

// //                     <div className="register-link">
// //                         <p>Already have an account?  <a href="#" onClick={loginLink}> Login</a></p>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
        
        
        
// //     );
// // };

// // export default LoginRegister;

import React, { useState } from 'react';
import './LoginR.css'
import logo from 'D:\\UNAC\\Proyecto Integrador\\etsafe fork prueba\\web-1\\img'
import imagen from 'D:\\UNAC\\Proyecto Integrador\\etsafe fork prueba\\web-1\\img'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

    
const LoginRegister = () => {
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    }
    
    const loginLink = () => {
        setAction('');
    }

    return (
        <>
            <div className={`wrapper ${action}`}>
                <div className="form-box login"> 
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" 
                            placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" 
                            placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="0"> Forgot Password?</a>
                        </div>

                        <button type="submit">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={registerLink}> Register</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register"> 
                    <form action="">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text" 
                            placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" 
                            placeholder='Email' required />
                            <FaEnvelope  className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" 
                            placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />I agree to the terms & conditions</label>
                        </div>

                        <button type="submit">Register</button>

                        <div className="register-link">
                            <p>Already have an account?  <a href="#" onClick={loginLink}> Login</a></p>
                        </div>
                    </form>
                </div>
            </div>

            <div className="social-buttons google">
                <button>Continue with Google</button>
            </div>

            <div className="social-buttons facebook">
                <button>Continue with Facebook</button>
            </div>
            <div className="logo">
                <img src={logo} alt="Logo" style={{ maxWidth: '300px', height: 'auto' }} />
            </div>
            <div className="imagen">
                <img src={imagen} alt="Imagen" style={{ maxWidth: '750px', height: 'auto' }} />
            </div>
            <h2 className="subtitle">Tu salud sexual está en tus manos.</h2>

            <div className="Divider"></div>

            <div className="right-side">
                {/* Aquí va tu contenido para la mitad derecha */}
            </div>
        </>
    );
};

export default LoginRegister;
