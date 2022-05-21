import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl'>Manage Doctors : {doctors.length} </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            doctors?.map((doctor, index) => <DoctorsRow key={doctor._id} doctor={doctor} index={index} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteModal
                    deletingDoctor={deletingDoctor}
                    refetch={refetch}
                    setDeletingDoctor={setDeletingDoctor}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageDoctor;