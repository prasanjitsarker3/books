import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../icon/google.png';
import github from '../../icon/github_PNG40.png';
import twitter from '../../icon/Twitter-Symbol.png'
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Ensure string has two digits !")
            return;
        }
        else if (password.length < 6) {
            setError("Please at least 6 Characters")
            return;
            }
            
            
            setError('')
        userLogin(email, password)
            .then(result => {
                const userLogged = result.user;
                console.log(userLogged);
                setError('');
                setSuccess("SuccessLogin User");
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorCode = error.message;
                setError(errorCode);
            })
    }
    return (
        <div className=' p-5 mt-7 rounded drop-shadow-md lg:w-[400px] mx-auto border'>
            <h1 className='text-center'>Please Login !</h1>
            <form onSubmit={handleLoginSubmit}>
                <div className='pt-12 flex flex-col justify-center items-center'>
                    <input type="email" name='email' id='email' required placeholder="Enter Email" className="input input-bordered input-accent w-full max-w-xs my-3" />
                    <input type="password" name='password' required placeholder="Enter Password" className="input input-bordered input-accent w-full max-w-xs" />
                    <button type='submit' className="btn btn-wide bg-white text-black hover:bg-green-300 my-3 ">Login...</button>
                    <p className='text-center py-3'><small>New User? Please <Link to='/register' state={location.state} className='text-blue-600 font-bold underline'>Registration</Link></small></p>
                    <p className='text-center py-1'><small>Forget Password? Please <button className='text-blue-600 font-bold underline'>Reset</button></small></p>
                </div>
            </form>
            <p className='text-center text-green-600'><small>{success}</small></p>
            <p className='text-center text-rose-600'><small>{error}</small></p>
            <div className='flex justify-center items-center gap-4 pt-2'>
                <img src={google} alt="" className='w-[40px] cursor-pointer' />
                <img src={github} alt="" className='w-[40px] h-[40px] cursor-pointer' />
                <img src={twitter} alt="" className='w-[50px] h-[35px] cursor-pointer' />
            </div>
        </div>
    );
};

export default Login;