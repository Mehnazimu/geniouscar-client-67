import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SignUp = () => {
     const { createUser } = useContext(AuthContext);
    const handleSignup = event => {
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
        const password = form.password.value;

         createUser(email, password)
             .then(result => {
                const user = result.user;
                 console.log(user);
             })
            .catch(err => console.error(err.message));
    }
    return (
        <div className="hero w-full">
            <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row my-5">
                <div className="w-3/4 text-center lg:text-left">
                    <img src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-center text-5xl font-bold">Sign up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='signin' />

                        </div>
                    </form>
                    <p className='text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;