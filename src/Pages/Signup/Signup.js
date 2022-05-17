import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../CustomHooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    // sing in with google
    const [
        signInWithGoogle,
        gUser,
        gError,
        gLoading
    ] = useSignInWithGoogle(auth);

    // create user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    // update profile
    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        alert('Updated profile');
    };

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate('/appointment')
    }

    let signInError;
    if (error || gError || uError) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message || gError?.message || uError?.message}</small></p>
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mt-32">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("name", { 
                                required: {
                                    value: true,
                                    message: "Name is require"
                                  }
                             })} />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full max-w-xs"
                            {...register("email", { 
                                required: {
                                    value: true,
                                    message: "Email is require"
                                  },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                             })} />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* password */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", { 
                                required: {
                                    value: true,
                                    message: "Password is require"
                                  },
                                minLength: {
                                    value: 6,
                                    message: 'Must be use 6 characters password'
                                }
                             })} />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    <p>Already have an account???? <Link to={'/login'}><small className='text-secondary'>Please login</small></Link></p>
                </form>
                <div className="divider">OR</div>
                {/* <p className='text-red-500'>{error?.message}</p>
                <p>{loading?.message}</p> */}
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
            </div>
        </div>
    );
};

export default Signup;