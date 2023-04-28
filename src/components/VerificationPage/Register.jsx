import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../icon/google.png';
import github from '../../icon/github_PNG40.png';
import twitter from '../../icon/Twitter-Symbol.png'
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const path = location?.state?.pathname;
    const handleSignUpEmailAndPass = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
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
        setSuccess('')

        createUser(email, password)
            .then(result => {
                const userLogged = result.user;
                console.log(userLogged);
                setSuccess('SuccessLogin User');
                setError('')

                form.reset();
                navigate('/order');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div className=' p-5 mt-7 rounded drop-shadow-md lg:w-[400px] mx-auto border'>
            <h1 className='text-center'>Please Login !</h1>
            <form onSubmit={handleSignUpEmailAndPass}>
                <div className='pt-12 flex flex-col justify-center items-center'>
                    <input type="text" name='name' id='name' required placeholder="Enter Name" className="input input-bordered input-accent w-full max-w-xs my-3" />
                    <input type="email" name='email' id='email' required placeholder="Enter Email" className="input input-bordered input-accent w-full max-w-xs my-3" />
                    <input type="password" name='password' required placeholder="Enter Password" className="input input-bordered input-accent w-full max-w-xs" />
                    <button type='submit' className="btn btn-wide bg-white text-black hover:bg-green-300 my-3">Sign Up</button>
                    <p className='text-center'><small>Already Have An Account? Please <Link to='/login' className='text-blue-600 font-bold underline'>Login</Link></small></p>
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

export default Register;