import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Home/Shared/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));

    const imageStorageKey = '4b59068e70b6c045448e7caa48248aec';


    if (isLoading) {
        return <Loading></Loading>
    }

    /** 
     * 3 ways to store upload image
     * 1) Use third party storage // Free open public storage for practice project
     * 2) Your own storage in your own server(file)
     * 3) Database : MongoDB
     * 
     * 
     * YUP : to valid file : search YUP file validation for react hook form
     */

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image );

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                const docImg = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: docImg
                }

                // send to server
                fetch('http://localhost:5000/doctors', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        toast.success('Doctor added successfully')
                        reset();
                    }
                    else {
                        toast.error('Failed to add doctor')
                    }
                })
            }
        })
    };
    return (
        <div className='pl-5'>
            <h3 className='text-2xl text-cyan-500'>Add A New Doctor....</h3>
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

                    {/* specialty */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Specialty</span>
                        </label>
                        <select {...register('specialty')} class="select select-bordered w-full max-w-xs">
                            {
                                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                            }
                        </select>
                    </div>
                    {/* photo */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input type="file" className="input input-bordered w-full max-w-xs"
                            {...register("image", { 
                                required: {
                                    value: true,
                                    message: "image is require"
                                }
                            })} />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-xs' type="submit" value="ADD" />
                </form>
        </div>
    );
};

export default AddDoctor;