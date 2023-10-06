import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Result } from "postcss";


const Register = () => {

    const {createUser} =useContext(AuthContext)

    const handleRegister= e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password);

        //Create User
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }


    return (
        <div>
                <Navbar></Navbar>
          <div>
          <h2 className="text-3xl my-10 text-center">Please Register</h2>

          <form onSubmit={handleRegister} className="card-body md:3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
       <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
          </div>
            
        </div>
    );
};

export default Register;