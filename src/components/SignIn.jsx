import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {signInUser}=useContext(AuthContext);
    const router=useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
    
      
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("from signin", email, password);

        signInUser(email,password)
        .then(result=>{
            console.log(result.user);
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = { email, lastSignInTime };

            fetch(`https://crud-operation-server-jet.vercel.app/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('sign in info updated in db', data);
                    router('/users');
                })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <p>New user create account : <Link to="/signup">Sign Up</Link> </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;