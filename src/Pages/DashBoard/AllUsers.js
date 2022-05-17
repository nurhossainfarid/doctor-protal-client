import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import AllUserRow from './AllUserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2 className='text-2xl'>All User : {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AllUserRow key={user._id} user={user} index={index} refetch={refetch}></AllUserRow>)
                        }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUsers;