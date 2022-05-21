import React from 'react';
import { toast } from 'react-toastify';


const AllUserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    // admin role
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
                if (res.status === 403) {
                    toast.error('Fail to make an admin')
                }
                res.json()
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`);
            }
        })
    }
    return (
            <tr>
                <td>{index + 1}</td>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>

                <td><button class="btn btn-xs">Delete</button></td>
            </tr>
    );
};

export default AllUserRow;